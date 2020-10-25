/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/Header';
import Categories from './components/storefront/Categories';
import Products from './components/storefront/Products';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Categories />
      <Products />
      <Footer />
    </>
  );
}

export default App;