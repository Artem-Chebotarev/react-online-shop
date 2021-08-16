import Card from "../components/Card";
import { useShopContext } from "../context/shopContext";

function Home() {
    const { isLoading, items, addToCart, addToFavourites, searchValue, onChangeSearchInput, clearSearchInput } = useShopContext();

    function renderItems() {
        const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));

        return (isLoading ? [...Array(8)] : filteredItems).map((elem, index) => (
            <Card
                key={index}
                {...elem}
                loading={isLoading}
                addToCart={(item) => addToCart(item)}
                addToFavourites={(item) => addToFavourites(item)}
            />
        ));
    }

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
                    renderItems()
                }
            </div>
        </div>
    );
}

export default Home;