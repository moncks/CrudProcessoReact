import React from 'react';
import './App.css';
import Titulo from './components/home/Titulo';
import Busca from './components/home/Busca';
import Footer from './components/home/Footer';

export default (props) => (
  <div className="App">
    <div>
      <Titulo></Titulo>
      <Busca>Buscar</Busca>
      <Footer></Footer>
    </div>
  </div>
);
