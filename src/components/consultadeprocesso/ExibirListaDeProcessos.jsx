import React, { Component } from 'react';
import './ExibirListaDeProcessos.css';
import Titulo from '../home/Titulo';
import Busca from '../home/Busca';
import BotaoNovo from './BotaoNovo';
import Cards from '../layout/Card';
import icon from '../img/iconfinder_outlined_placeholder_4280497.png';

export default class ExibirListaDeProcessos extends Component {
  state = {
    processo: this.props.location.exibirProps.processo,
    processos: [],
  };
  getProcessos = () => {
    var searchUrl = `http://localhost:3002/processo?q=${this.state.processo}`;
    fetch(searchUrl)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        this.setState({ processos: jsonData });
      });
  };

  componentDidMount() {
    this.getProcessos();
  }

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

        <div>
          <ul className="lista">
            {this.state.processos.map((processo, index) => (
              <Cards style="maxWidth: 600px">
                <div class="lista-processos" key={index}>
                  <li id="single-processo">
                    <div id="img">
                      <img src={icon} alt="empty icon" style={{ width: 100 }} />
                    </div>
                    <div class="item-processo">
                      <label id="li-label">Número</label>
                      <p id="paragrafo">{processo.numero}</p>
                    </div>
                    <div class="item-processo">
                      <label id="li-label">Assunto</label>
                      <p id="paragrafo">
                        {processo.assunto.substring(0, 20) + '...'}
                      </p>
                    </div>
                    <div class="item-processo">
                      <label id="li-label">Interessado</label>
                      <p id="paragrafo">{processo.interessados}</p>
                    </div>
                    <div class="item-processo">
                      <label id="li-label">Descrição</label>
                      <p id="paragrafo">
                        {processo.descricao.substring(0, 20) + '...'}
                      </p>
                    </div>
                  </li>
                </div>
              </Cards>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
