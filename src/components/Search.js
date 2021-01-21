import React, { Component } from 'react';
import '../assets/css/search.css';

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
        <h1>Welcome to the meal search app</h1>
        <input
          name="text"
          type="text"
          placeholder="Search"
          onChange={(event) => this.handleOnChange(event)}
          value={this.state.textoDeBusca}
        />
        <button onClick={this.handleSearch}>Search</button>
        {this.state.processos ? (
          <div id="processos-container">
            {this.state.processos.map((processo, index) => (
              <div class="single-meal" key={index}>
                <h2>{processo.numero}</h2>
                <img src="" alt="meal-thumbnail" />
              </div>
            ))}
          </div>
        ) : (
          <p>Try searching for a meal</p>
        )}
      </div>
    );
  }
}

export default Search;
