import { Route } from 'react-router-dom';
import './App.css';
import AddItem from './pages/Additem';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/Cart'>
        <Cart />
      </Route>
      <Route path='/AddItem'>
        <AddItem />
      </Route>

    </div>
  );
}

export default App;
