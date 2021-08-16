import Cart from './components/Cart';
import Header from './components/Header';
import { useShopContext } from './context/shopContext';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Orders from './pages/Orders';

function App() {
  const { isCartOpened, handleCart } = useShopContext();

  return (
    <div className="wrapper clear">
      <Router>
        <Cart handleCart={handleCart} opened={isCartOpened} />

        <Header handleCart={handleCart} />

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/favourites">
          <Favourites />
        </Route>

        <Route exact path="/orders">
          <Orders />
        </Route>

      </Router>
    </div>
  );
}

export default App;
