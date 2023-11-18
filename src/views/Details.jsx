/* eslint-disable no-unused-vars */

import React from 'react';
import { useParams } from 'react-router-dom';
import pizzasData from '../data/pizzasData.json';
import { NavLink} from 'react-router-dom';
import { BsCartPlus } from "react-icons/bs";

const Details = () => {
  const { id } = useParams();
  const pizza = pizzasData.find((pizza) => pizza.id === id);

  return (
    <div className='detalle'>
      <img className='imgpizza' src={pizza.img} alt={pizza.name} />
      <div className='descripcion'>
        <h1>Pizza {pizza.name}</h1>
        <p>{pizza.desc}</p>
        <h2>Ingredientes:</h2>
        <ul>
          {pizza.ingredients.join(' , ')}
        </ul>
        <div className='addpizza'>
          <h1>Precio: ${pizza.price}</h1>
          <button><NavLink to="/carrito"> <BsCartPlus /> Agregar a carrito </NavLink></button>
        </div>
      </div>
    </div>
  );
};

export default Details;
