import React, { useState, useEffect } from "react";
//import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart, Home, Checkout, OrderSuccess,   ProductDetails, Auth, UserProfile } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {  useSelector } from 'react-redux';

import Footer from "./components/footer/Footer";
import {useGetProductsQuery} from './redux/services/apiSlice';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const authData = useSelector((state) => state.auth.authData);
  const {data} = useGetProductsQuery();
  const [anchorEl, setAnchorEl] = useState(false);
  const products =  data?.filter((product) => product.isActive === true);

  const handleClose = () => {
    setAnchorEl(null);
  };
 
  return (
    <Router>
      <div>
        <Navbar searchField={searchField} 
              setSearchField={setSearchField} 
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
              handleClose={handleClose}
              />
        <ToastContainer autoClose={2000}/>
        <Switch >
          <Route exact path="/">
            <Products searchField={searchField} products={products} />
          </Route>
          <Route exact path="/cart">
            <Cart handleClose={handleClose}/>
          </Route>
          <Route exact path="/product/:Pid">
            <ProductDetails/>
          </Route>
          <Route exact path="/login" >
            <Auth />
          </Route>
          <Route  exact path="/userProfile">
             <UserProfile/>
          </Route>
          <Route  exact path="/orderSuccess">
            <OrderSuccess/>
          </Route> 
          <Route  exact path="/admin">
             <Home/>
          </Route>
          <Route exact path="/checkout">
            <Checkout/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
