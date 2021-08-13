import Card from './components/Card';
import Cart from './components/Cart';
import Header from './components/Header';
import { useShopContext } from './context/shopContext';

function App() {
  const { items, isCartOpened, itemsInCart, handleCart, addToCart } = useShopContext();

  return (
    <div className="wrapper clear">
      {isCartOpened && <Cart handleCart={handleCart} itemsInCart={itemsInCart} />}

      <Header handleCart={handleCart} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {
            items.length ?
              items.map((elem, index) => <Card
                key={index}
                title={elem.title}
                price={elem.price}
                imageUrl={elem.imageUrl}
                addToCart={() => addToCart(elem)}
              />)
              :
              <p>В магазине нет кроссовок</p>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
