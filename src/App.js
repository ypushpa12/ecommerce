import './App.css';
import Navbar from './component/Navbar';
import Products from './component/Products';
import Product from './component/Product';
import { Switch, Route } from 'react-router-dom';
import Home from './component/Home';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/products/:id" component={Product} />
      </Switch>
    </>

  );

}

export default App;
