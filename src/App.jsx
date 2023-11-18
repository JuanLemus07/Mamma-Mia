/* eslint-disable no-unused-vars */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './component/Navigate';
import Home from './views/Home';
import Details from './views/Details';
import ShoppingCart from './views/ShoppingCart';
import ErrorPage from './views/ErrorPage'
import Footer from './component/Footer';

const App = () => {
  return (
    <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<Details />} />
          <Route path="/carrito" element={<ShoppingCart />} />
          <Route path="*" element= {<ErrorPage/>} />
        </Routes>
        <Footer/>
    </>
  )};

export default App;
