/* eslint-disable no-unused-vars */

import React from 'react';
import Header from '../component/Header';
import PizzaList from '../component/PizzaList';

const Home = () => {
  return (
    <>
    <main className='home'>
      <Header/>
      <div className='homepizza'>
        <PizzaList/>
      </div>
    </main>
    </>
  );
};
export default Home;
