import { createContext, useState, useContext, useEffect } from "react";

const shopContext = createContext()


const ShopContextProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [isCartOpened, setIsCartOpened] = useState(false);
    const [itemsInCart, setItemsInCart] = useState([]);

    const handleCart = () => {
        setIsCartOpened(!isCartOpened);
    }

    const addToCart = (elem) => {
        if (itemsInCart.some(item => item.id === elem.id)) {
            setItemsInCart(prev => [...prev.filter(item => item.id !== elem.id)]);
        } else {
            setItemsInCart(prev => [...prev, elem]);
        }
    }

    useEffect(() => {
        fetch('https://60d62397943aa60017768e77.mockapi.io/items')
            .then(res => res.json())
            .then(itemsFromServer => setItems(itemsFromServer))
    }, []);

    return (
        <shopContext.Provider value={{
            items,
            isCartOpened,
            itemsInCart,
            handleCart,
            addToCart,
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