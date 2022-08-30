import Product from "./pages/Product";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element = {<Home/>} />
        <Route exact path = "/products/:category" element = {<ProductList/>} />
        <Route exact path = "/product/:id" element = {<Product/>} />
        <Route exact path = "/cart" element = {<Cart/>} />
        <Route exact path = "/login" element = {<Login/>} />
        <Route exact path = "/register" element = {<Register/>} />
      </Routes>
    </Router>
  );
}; 

export default App;   