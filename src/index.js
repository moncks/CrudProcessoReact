import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CadastroDeProcesso from './components/cadastrodeprocesso/CadastroDeProcesso';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App}></Route>
      <Route parth="/CriarProcesso" component={CadastroDeProcesso}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
