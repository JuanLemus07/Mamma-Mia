/* eslint-disable no-unused-vars */

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ShoppingCart = () => {
  const { cart, total } = useContext(CartContext);

  return (
    <div className='carrito'>
      <div className='totalist'>
        <h2 className='shop'>Carrito de Compras</h2>
        <ul>
          {cart.map((item) => (
          <li key={item.id}>{item.name} - ${item.price}</li>
          ))}
        </ul>
        <p>Total: ${total}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
