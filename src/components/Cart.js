function Cart({ handleCart, itemsInCart }) {
    return (
        <div className="overlay">
            <div className="Cart">
                <h2 className="d-flex justify-between mb-30">
                    Корзина<img className="cu-p" onClick={handleCart} src="/img/btn-remove.svg" alt="Close" />
                </h2>
                <div className="items">
                    {
                        itemsInCart.length ?
                            itemsInCart.map((elem, index) =>
                                <div className="cartItem d-flex align-center mb-20" key={index}>
                                    <div
                                        style={{ backgroundImage: `url(${ elem.imageUrl }` }}
                                        className="cartItemImg">
                                    </div>
                                    <div className="mr-20 flex">
                                        <p className="mb-5">{ elem.title }</p>
                                        <b>{ elem.price } руб.</b>
                                    </div>
                                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                                </div>
                            )
                            :
                            <p>Корзина пустая</p>
                    }
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
            </div>
        </div>
    );
}

export default Cart;