import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroDeProcesso from './components/cadastrodeprocesso/CadastroDeProcesso';
import ExibirListaDeProcessos from './components/consultadeprocesso/ExibirListaDeProcessos';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App}></Route>
      <Route
        path="/criarProcesso/"
        exact={true}
        component={CadastroDeProcesso}
      ></Route>
      <Route
        path="/exibirProcesso/"
        exact={true}
        component={ExibirListaDeProcessos}
      ></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
