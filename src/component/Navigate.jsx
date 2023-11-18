/* eslint-disable no-unused-vars */

import React from 'react';
import {  NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaPizzaSlice } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { NavbarBrand } from 'react-bootstrap';

const Navigate = () => {
  return (
    <>
      <navbar className="navbar">
          <div className='nav1'>
            <NavLink to="/"> <FaPizzaSlice /> </NavLink>
            <h3>Pizzeria Mamma Mia</h3>
          </div>
          <div className='nav2'>
              <NavLink to="/carrito"> <BsCart3/> </NavLink>
              <h3>Total</h3>
          </div>
      </navbar>
    </>
  );
};

export default Navigate;
