import Card from "../components/Card";
import { useShopContext } from "../context/shopContext";

function Home() {
    const { items, addToCart, addToFavourites, searchValue, onChangeSearchInput, clearSearchInput } = useShopContext();

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="search-block">
                    <img src="/img/search.svg" alt="Search" />
                    {
                        searchValue && <img
                            className="clear cu-p"
                            onClick={clearSearchInput}
                            src="/img/btn-remove.svg"
                            alt="Clear"
                        />
                    }
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."></input>
                </div>
            </div>
            <div className="d-flex flex-wrap">
                {
                    items.length ?
                        items
                            .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                            .map(elem => <Card
                                key={elem.id}
                                {...elem}
                                addToCart={() => addToCart(elem)}
                                addToFavourites={() => addToFavourites(elem)}
                            />)
                        :
                        <p>В магазине нет кроссовок</p>
                }
            </div>
        </div>
    );
}

export default Home;