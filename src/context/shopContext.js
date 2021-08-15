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

        if (itemsInCart.find(item => Number(item.id) === Number(id))) {
            fetch(`https://6117822b30022f0017a05e3f.mockapi.io/cart/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ id }),
            })
            setItemsInCart(prev => prev.filter(item => Number(item.id) !== Number(id)));
        } else {
            fetch('https://6117822b30022f0017a05e3f.mockapi.io/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(elem)
            })
                .then(res => res.json())
                .then(elem => setItemsInCart(prev => [...prev, elem]))
                .catch(() => alert('Не удалось добавить в корзину'))
            // setItemsInCart(prev => [...prev, elem]);
        }
    }

    const removeFromCart = (id) => {
        fetch(`https://6117822b30022f0017a05e3f.mockapi.io/cart/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ id })
        })
        setItemsInCart(prev => prev.filter(elem => elem.id !== id));
    }

    const addToFavourites = (elem) => {
        const id = elem.id;

        if (itemsInFavourites.find(item => item.id === id)) {
            fetch(`https://6117822b30022f0017a05e3f.mockapi.io/favourites/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ id }),
            })
            setItemsInFavourites(prev => prev.filter(item => item.id !== id));
        } else {
            fetch('https://6117822b30022f0017a05e3f.mockapi.io/favourites', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(elem)
            })
                .then(res => res.json())
                .then(elem => setItemsInFavourites(prev => [...prev, elem]))
                .catch(() => alert('Не удалось добавить в фавориты'))
        }
    }

    const isItemAdded = (id) => {
        return itemsInCart.some(item => Number(item.id) === Number(id));
    }

    useEffect(() => {
        async function fetchData() {
            const responseCart = await fetch('https://6117822b30022f0017a05e3f.mockapi.io/cart')
            const itemsInCartFromServer = await responseCart.json();

            const responseFavourites = await fetch('https://6117822b30022f0017a05e3f.mockapi.io/favourites')
            const itemsInFavouritesFromServer = await responseFavourites.json();

            const responseItems = await fetch('https://6117822b30022f0017a05e3f.mockapi.io/items')
            const itemsFromServer = await responseItems.json();

            setIsLoading(false);

            setItemsInCart(itemsInCartFromServer);
            setItemsInFavourites(itemsInFavouritesFromServer);
            setItems(itemsFromServer);
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