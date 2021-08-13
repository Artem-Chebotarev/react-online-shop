import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

const arr = [
  { title: 'Мужские кроссовки Nike Blazer Mid Suede', price: 12999, url: '/img/sneakers/1.jpg' },
  { title: 'Мужские кроссовки Nike Air Max 270', price: 15600, url: '/img/sneakers/2.jpg' },
  { title: 'Мужские кроссовки Nike Blazer Mid Suede', price: 10999, url: '/img/sneakers/3.jpg' },
  { title: 'Мужские кроссовки Puma X Aka', price: 8999, url: '/img/sneakers/8.jpg' },
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="d-flex">
          {
            arr.length ?
              arr.map((elem, index) => <Card 
                key={index} 
                title={elem.title} 
                price={elem.price} 
                url={elem.url}
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
