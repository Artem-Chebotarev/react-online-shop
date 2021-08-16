import { createContext, useState, useContext, useEffect } from "react";

const shopContext = createContext()


const ShopContextProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [isCartOpened, setIsCartOpened] = useState(false);
    const [itemsInCart, setItemsInCart] = useState([]);
    const [itemsInFavourites, setItemsInFavourites] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

    const clearSearchInput = () => {
        setSearchValue('');
    }

    const handleCart = () => {
        setIsCartOpened(!isCartOpened);
    }

    const addToCart = (elem) => {
        const id = elem.id;
        const findItem = itemsInCart.find(item => Number(item.parentId) === Number(id));

        if (findItem) {
            setItemsInCart(prev => prev.filter(item => Number(item.parentId) !== Number(id)));

            fetch(`https://6117822b30022f0017a05e3f.mockapi.io/cart/${findItem.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ id: findItem.id }),
            })
        } else {
            setItemsInCart(prev => [...prev, elem]);

            fetch('https://6117822b30022f0017a05e3f.mockapi.io/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(elem)
            })
                .then(res => res.json())
                .then(elem => setItemsInCart(prev => prev.map(item => {
                    if (item.parentId === elem.parentId) {
                        return {
                            ...item,
                            id: elem.id
                        };
                    }
                    return item;
                })))
                .catch(() => alert('Не удалось добавить в корзину'));
        }
    }

    const removeFromCart = (id) => {
        setItemsInCart(prev => prev.filter(elem => Number(elem.id) !== Number(id)));

        fetch(`https://6117822b30022f0017a05e3f.mockapi.io/cart/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ id })
        })
    }

    const addToFavourites = (elem) => {
        const id = elem.id;

        const findItem = itemsInFavourites.find(item => Number(item.parentId) === Number(id));

        if (findItem) {
            setItemsInFavourites(prev => prev.filter(item => Number(item.parentId) !== Number(id)));

            fetch(`https://6117822b30022f0017a05e3f.mockapi.io/favourites/${findItem.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ id: findItem.id }),
            })
        } else {
            setItemsInFavourites(prev => [...prev, elem]);

            fetch('https://6117822b30022f0017a05e3f.mockapi.io/favourites', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(elem)
            })
                .then(res => res.json())
                .then(elem => setItemsInFavourites(prev => prev.map(item => {
                    if (item.parentId === elem.parentId) {
                        return {
                            ...item,
                            id: elem.id
                        };
                    }
                    return item;
                })))
                .catch(() => alert('Не удалось добавить в фавориты'));
        }
    }

    const isItemAdded = (id) => {
        return itemsInCart.some(item => Number(item.parentId) === Number(id));
    }

    const isItemFavourite = (id) => {
        return itemsInFavourites.some(item => Number(item.parentId) === Number(id));
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const [responseCart, responseFavourites, responseItems] = await Promise.all([
                    fetch('https://6117822b30022f0017a05e3f.mockapi.io/cart'),
                    fetch('https://6117822b30022f0017a05e3f.mockapi.io/favourites'),
                    fetch('https://6117822b30022f0017a05e3f.mockapi.io/items'),
                ]);

                const itemsInCartFromServer = await responseCart.json();
                const itemsInFavouritesFromServer = await responseFavourites.json();
                const itemsFromServer = await responseItems.json();

                setIsLoading(false);

                setItemsInCart(itemsInCartFromServer);
                setItemsInFavourites(itemsInFavouritesFromServer);
                setItems(itemsFromServer);
            } catch (error) {
                alert('Ошибка при запросе данных с сервера');
            }
        }

        fetchData();
    }, []);

    return (
        <shopContext.Provider value={{
            searchValue,
            items,
            isCartOpened,
            itemsInCart,
            itemsInFavourites,
            isLoading,
            onChangeSearchInput,
            clearSearchInput,
            handleCart,
            addToCart,
            removeFromCart,
            addToFavourites,
            isItemAdded,
            isItemFavourite,
            setItemsInCart,
            setIsCartOpened,
        }} >
            {children}
        </shopContext.Provider>
    )
}

export default ShopContextProvider

const useShopContext = () => useContext(shopContext)

export {
    useShopContext,
}