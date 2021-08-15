import { createContext, useState, useContext, useEffect } from "react";

const shopContext = createContext()


const ShopContextProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [isCartOpened, setIsCartOpened] = useState(false);
    const [itemsInCart, setItemsInCart] = useState([]);
    const [itemsInFavourites, setItemsInFavourites] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    function onChangeSearchInput(event) {
        setSearchValue(event.target.value);
    }

    function clearSearchInput() {
        setSearchValue('');
    }

    const handleCart = () => {
        setIsCartOpened(!isCartOpened);
    }

    const addToCart = (elem) => {
        if (itemsInCart.some(item => item.id === elem.id)) {
            setItemsInCart(prev => prev.filter(item => item.id !== elem.id));
        } else {
            fetch('https://6117822b30022f0017a05e3f.mockapi.io/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(elem)
            })
            setItemsInCart(prev => [...prev, elem]);
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

    useEffect(() => {
        fetch('https://6117822b30022f0017a05e3f.mockapi.io/items')
            .then(res => res.json())
            .then(itemsFromServer => setItems(itemsFromServer))

        fetch('https://6117822b30022f0017a05e3f.mockapi.io/cart')
            .then(res => res.json())
            .then(itemsInCartFromServer => setItemsInCart(itemsInCartFromServer))
        fetch('https://6117822b30022f0017a05e3f.mockapi.io/favourites')
            .then(res => res.json())
            .then(itemsInFavouritesFromServer => setItemsInFavourites(itemsInFavouritesFromServer))
    }, []);

    return (
        <shopContext.Provider value={{
            searchValue,
            items,
            isCartOpened,
            itemsInCart,
            itemsInFavourites,
            onChangeSearchInput,
            clearSearchInput,
            handleCart,
            addToCart,
            removeFromCart,
            addToFavourites,
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