/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Categories from './components/storefront/Categories';
import Products from './components/storefront/Products';
import Footer from './components/Footer';
import ProductDetails from './components/storefront/ProductDetails';
import ShoppingCart from './components/storefront/ShoppingCart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>

          <Route exact path="/">
            <Categories />
            <Products />
          </Route>

          <Route exact path="/product/:productId">
            <ProductDetails />
          </Route>

          <Route exact path="/cart">
            <ShoppingCart />
          </Route>

        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;