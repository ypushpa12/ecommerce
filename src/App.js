import './App.css';
import Navbar from './component/Navbar';
import Products from './component/Products';
import Product from './component/Product';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/products/:id" component={Product} />
      </Switch>
    </>

  );

}

export default App;
