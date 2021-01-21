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
                <div class="single-processo" key={index}>
                  <li id="processos-container">
                    <div id="img">
                      <img
                        src={icon}
                        alt="empty icon"
                        style={{ marginLeft: 10, width: 100 }}
                      />
                    </div>
                    <div id="test">
                      <label id="texto">Número</label>
                      <p id="paragrafo">{processo.numero}</p>
                    </div>
                    <div id="test">
                      <label id="texto">Assunto</label>
                      <p id="paragrafo">{processo.assunto}</p>
                    </div>
                    <div id="test">
                      <label id="texto">Interessado</label>
                      <p id="paragrafo">{processo.interessados}</p>
                    </div>
                    <div id="test">
                      <label id="texto">Descrição</label>
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
