import { useShopContext } from "../context/shopContext";

function Cart({ handleCart }) {
    const { itemsInCart, removeFromCart } = useShopContext();

    return (
        <div className="overlay">
            <div className="Cart">
                <h2 className="d-flex justify-between mb-30">
                    Корзина<img className="cu-p" onClick={handleCart} src="/img/btn-remove.svg" alt="Close" />
                </h2>
                {
                    itemsInCart.length ?
                        <>
                            <div className="items">
                                {itemsInCart.map(elem =>
                                    <div className="cartItem d-flex align-center mb-20" key={elem.id}>
                                        <div
                                            style={{ backgroundImage: `url(${elem.imageUrl}` }}
                                            className="cartItemImg">
                                        </div>
                                        <div className="mr-20 flex">
                                            <p className="mb-5">{elem.title}</p>
                                            <b>{elem.price} руб.</b>
                                        </div>
                                        <img className="removeBtn" onClick={() => removeFromCart(elem.id)} src="/img/btn-remove.svg" alt="Remove" />
                                    </div>
                                )}
                            </div>
                            <div className="cartTotalBlock">
                                <ul>
                                    <li>
                                        <span>Итого:</span>
                                        <div></div>
                                        <b>21 498 руб.</b>
                                    </li>
                                    <li>
                                        <span>Налог 5%</span>
                                        <div></div>
                                        <b>1074 руб.</b>
                                    </li>
                                </ul>
                                <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
                            </div>
                        </>
                        :
                        <p>Корзина пустая</p>
                }
            </div>
        </div>
    );
}

export default Cart;