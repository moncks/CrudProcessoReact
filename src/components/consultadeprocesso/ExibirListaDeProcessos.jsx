import React, { Component } from 'react';
import './ExibirListaDeProcessos.css';
import Titulo from '../home/Titulo';
import Busca from '../home/Busca';
import BotaoNovo from './BotaoNovo';
import { withRouter } from 'react-router-dom';

export default class ExibirListaDeProcessos extends Component {
  state = {
    processo: this.props.location.exibirProps.processo,
  };

  render() {
    return (
      <>
        <div style={{ alignItems: 'center' }} id="listaProcessoPage">
          <Titulo style={{ color: 'black', width: '55%' }}></Titulo>
          <Busca
            style={{
              padding: '15px 80px',
              alignItems: 'center',
              borderRadius: '4px',
              shadowRadius: '1px',
              border: '1px solid #757575',
              fontSize: '18px',
              width: '25%',
            }}
            placeholderText={this.state.processo}
          ></Busca>

          <BotaoNovo
            className="BotaoEstilo"
            style={{
              padding: '15px 10px',
              alignItems: 'center',
              borderRadius: '4px',
              shadowRadius: '1px',
              border: '1px solid #757575',
              fontSize: '18px',
            }}
            onClick={(event) => (window.location.href = '/criarProcesso')}
          >
            Novo
          </BotaoNovo>
        </div>
        <div id="containerProcesso"></div>
      </>
    );
  }
}
