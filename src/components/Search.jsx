import React, { Component } from 'react';
import '../assets/css/search.css';
import icon from '../img/iconfinder_outlined_placeholder_4280497.png';

class Search extends Component {
  state = {
    textoDeBusca: '',
    processos: [],
  };

  handleOnChange = (event) => {
    this.setState({ textoDeBusca: event.target.value });
  };

  handleSearch = () => {
    this.buscaPorTermo(this.state.textoDeBusca);
  };

  buscaPorTermo = (searchInput) => {
    var searchUrl = `http://localhost:3002/processo?q=${searchInput}`;
    fetch(searchUrl)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        this.setState({ processos: jsonData });
      });
  };

  render() {
    return (
      <div id="main">
        <h1>Busca de Processos</h1>
        <input
          name="text"
          type="text"
          placeholder="Search"
          onChange={(event) => this.handleOnChange(event)}
          value={this.state.textoDeBusca}
        />
        <button onClick={this.handleSearch}>Search</button>
        {this.state.processos ? (
          <div>
            <ul>
              {this.state.processos.map((processo, index) => (
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
                      <p id="paragrafo">{processo.assunto}</p>
                    </div>
                    <div class="item-processo">
                      <label id="li-label">Interessado</label>
                      <p id="paragrafo">{processo.interessados}</p>
                    </div>
                    <div class="item-processo">
                      <label id="li-label">Descrição</label>
                      <p id="paragrafo">{processo.descricao}</p>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ) : (
          <p>
            Você pode criar um novo processo <a>clicando aqui.</a>
          </p>
        )}
        <p>
          Você pode criar um novo processo <a>clicando aqui.</a>
        </p>
      </div>
    );
  }
}

export default Search;
