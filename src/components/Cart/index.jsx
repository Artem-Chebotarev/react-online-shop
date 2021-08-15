import { useState } from "react";
import { useShopContext } from "../../context/shopContext";
import Info from "../Info/Info";

import styles from './Cart.module.scss';

const delay = (ms) => new Promise(resolve => setTimeout(() => resolve(), ms));

function Cart({ handleCart }) {
    const { itemsInCart, removeFromCart, setItemsInCart } = useShopContext();

    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    async function onClickOrder() {
        setIsLoading(true);
        fetch('https://6117822b30022f0017a05e3f.mockapi.io/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ items: itemsInCart })

        })
            .then(res => res.json())
            .then(orderIdFromServer => setOrderId(orderIdFromServer.id))
            .catch(() => alert('Не удалось создать заказ'))

        setIsOrderComplete(true);

        for (let i = 0; i < itemsInCart.length; i++) {
            const item = itemsInCart[i];

            await fetch(`https://6117822b30022f0017a05e3f.mockapi.io/cart/${item.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ id: item.id })
            });
            
            /* из-за ограничения количества запросов в секунду у mockapi нужно сделать задержку */
            await delay(500);
        }

        setItemsInCart([]);
        setIsLoading(false);
    }


    return (
        <div className={`${styles.overlay} ${true ? styles.overlayVisible : ''}`}>
            <div className={styles.cart}>
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
                                <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
                            </div>
                        </>
                        :
                        (
                            <Info
                                title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
                                description={
                                    isOrderComplete
                                        ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                                        : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
                                }
                                image={isOrderComplete ? 'img/complete-order.jpg' : 'img/empty-cart.jpg'}
                            />
                        )
                }
            </div>
        </div>
    );
}

export default Cart;