import Cart from './components/Cart';
import Header from './components/Header';
import { useShopContext } from './context/shopContext';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './pages/Home';
import Favourites from './pages/Favourites';

function App() {
  const { isCartOpened, handleCart } = useShopContext();

  return (
    <div className="wrapper clear">
      <Router>
        {isCartOpened && <Cart handleCart={handleCart} />}

        <Header handleCart={handleCart} />

        <Route exact path="/favourites">
          <Favourites />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
