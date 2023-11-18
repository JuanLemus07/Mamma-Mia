/* eslint-disable no-unused-vars */

import React from 'react';
import { Link ,NavLink} from 'react-router-dom';
import pizzasData from '../data/pizzasData.json';
import { BsCartPlus } from "react-icons/bs";



const PizzaList = () => {
  return (
    <div className="pizzalist">
      {pizzasData.map((pizza) => (
        <div className='itempizza' key={pizza.id}>
          <img className='imgpizzalist' src={pizza.img} alt={pizza.name} />
          <h3>{pizza.name}</h3>
          <button><Link to={`/pizza/${pizza.id}`}>Detalles</Link></button>
          <button><NavLink to="/carrito"> <BsCartPlus /> </NavLink></button>
        </div>
      ))}
    </div>
  );
};

export default PizzaList;
