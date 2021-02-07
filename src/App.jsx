import React from 'react';
import './App.css';
import Titulo from './components/home/Titulo';
import Busca from './components/home/Busca';
import Footer from './components/home/Footer';
import Botao from './components/home/Botao';

export default (props) => (
  <div style={{ alignItems: 'center' }}>
    <Titulo style={{ paddingTop: '15%' }}></Titulo>
    <div id="buscaProcessoPage">
      <Busca
        // alignItems="center"
        // padding="21px 4px"
        // width="500px"
        // color="#293E6A"
        style={{
          padding: '15px 80px',
          alignItems: 'center',
          borderRadius: '4px',
          shadowRadius: '1px',
          border: '1px solid #757575',
          fontSize: '18px',
          width: '25%',
        }}
      ></Busca>

      <Botao
        className="BotaoEstilo"
        // alignItems="center"
        // padding="21px 4px"
        // width="6rem"
        // color="#293E6A"
        style={{
          padding: '15px 10px',
          alignItems: 'center',
          borderRadius: '4px',
          shadowRadius: '1px',
          border: '1px solid #757575',
          fontSize: '18px',
        }}
      >
        Buscar
      </Botao>
    </div>
    <Footer></Footer>
  </div>
);
