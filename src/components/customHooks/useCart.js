import { useShopContext } from "../../context/shopContext"

export const useCart = () => {
    const { itemsInCart, setItemsInCart } = useShopContext();

    const totalPrice = itemsInCart.reduce((acc, elem) => acc + elem.price, 0);

    return { itemsInCart, setItemsInCart, totalPrice };
}