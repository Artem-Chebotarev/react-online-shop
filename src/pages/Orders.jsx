import { useEffect, useState } from "react";
import Card from "../components/Card";

function Orders() {
    const [isLoading, setIsLoading] = useState(true);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://6117822b30022f0017a05e3f.mockapi.io/orders')
            .then(res => res.json())
            .then(ordersFromServer => setOrders(ordersFromServer.map(elem => elem.items).flat()))
            .catch((() => alert('Не дулаось загрузить заказы')))

        setIsLoading(false);
    }, []);

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Мои заказы</h1>
            </div>
            {
                orders.length ?
                    <div className="d-flex flex-wrap">
                        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
                            <Card
                                key={index}
                                loading={isLoading}
                                {...item}
                            />
                        ))}
                    </div>
                    :
                    <p>У Вас нет заказов</p>
            }

        </div>
    );
}

export default Orders;