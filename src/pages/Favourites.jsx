import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useShopContext } from "../context/shopContext";

function Favourites() {
    const { addToCart, addToFavourites } = useShopContext();

    const [ itemsInFavourites, setItemsInFavourites] = useState([]);

    useEffect(() => {
        fetch('https://6117822b30022f0017a05e3f.mockapi.io/favourites')
            .then(res => res.json())
            .then(itemsInFavouritesFromServer => setItemsInFavourites(itemsInFavouritesFromServer))
    }, []);

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Мои закладки</h1>
            </div>
            <div className="d-flex flex-wrap">
                {
                    itemsInFavourites.length ?
                        itemsInFavourites
                            .map((elem, index) => <Card
                                key={index}
                                addToCart={(item) => addToCart(item)}
                                isItemFavourite={true}
                                addToFavourites={(item) => addToFavourites(item)}
                                {...elem}
                            />)
                        :
                        <p>В закладках нет кроссовок</p>
                }
            </div>
        </div>
    );
}

export default Favourites;