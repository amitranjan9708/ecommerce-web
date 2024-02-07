import Product from "./pages/Product";
import Home from "./pages/Home"
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Provider } from "react-redux";
import store from './redux/store'
const App = () => {
  const user =  false;
  return (

    <Provider store={store}>
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
       <Route path="/Products/:category" element={<ProductList/>}  />
       <Route path="/Product/:id" element={<Product />}  /> 
       <Route path="/cart" element={<Cart/>}  />
       <Route path="/login"  element={user ? <Home/> :<Login />}  />
       <Route path="/register" element={user ? <Home/> :<Register/>}  />
        
        </Routes>
    </Router>
    </Provider>
  )
  // return <Product/>
};

export default App;
// start with 'npm run dev'