import React, { Component } from 'react';
import Titulo from './Titulo';
import Busca from './Busca';
import Footer from './Footer';
import Botao from './Botao';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  state = {
    processo: this.props.processo,
    placeholder: 'Pesquise por uma informação do processo',
  };

  alterarTextoBusca = (novoTexto) => {
    this.setState({
      processo: novoTexto,
    });
    console.log(this.state.processo);
  };

  enviarTextoBusca = () => {
    console.log(this.state.processo);
    // props.TextoParaBusca(this.state.processo);
  };

  render() {
    return (
      <div style={{ alignItems: 'center' }}>
        <Titulo style={{ color: '#005b95', paddingTop: '15%' }}></Titulo>
        <div id="buscaProcessoPage">
          <Busca
            processo={this.state.processo}
            alterarProcesso={this.alterarTextoBusca}
            style={{
              padding: '15px 80px',
              alignItems: 'center',
              borderRadius: '4px',
              shadowRadius: '1px',
              border: '1px solid #757575',
              fontSize: '18px',
              width: '25%',
            }}
            placeholderText={this.state.placeholder}
          ></Busca>

          <Botao
            style={{
              padding: '15px 10px',
              alignItems: 'center',
              borderRadius: '4px',
              shadowRadius: '1px',
              border: '1px solid #757575',
              fontSize: '18px',
            }}
          >
            <Link
              to={{
                pathname: '/exibirProcesso',
                exibirProps: {
                  processo: this.state.processo,
                },
              }}
            >
              Buscar
            </Link>
          </Botao>
        </div>
        <Footer style={{ textAlign: 'center' }}></Footer>
      </div>
    );
  }
}
