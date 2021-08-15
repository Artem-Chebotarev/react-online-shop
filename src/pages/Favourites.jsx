import Card from "../components/Card";
import { useShopContext } from "../context/shopContext";

function Favourites() {
    const { itemsInFavourites, addToCart, addToFavourites } = useShopContext();

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Мои закладки</h1>
            </div>
            <div className="d-flex flex-wrap">
                {
                    itemsInFavourites.length ?
                        itemsInFavourites
                            .map(elem => <Card
                                key={elem.id}
                                addToCart={() => addToCart(elem)}
                                isInFavourites={true}
                                addToFavourites={() => addToFavourites(elem)}
                                {...elem}
                            />)
                        :
                        <p>в закладках нет кроссовок</p>
                }
            </div>
        </div>
    );
}

export default Favourites;