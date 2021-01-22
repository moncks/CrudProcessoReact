import React from 'react';
import { Button } from '@material-ui/core';
import '../assets/css/form.css';

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <h1>Cadastro de processo</h1>
      <div className="form-group">
        <label htmlFor="assunto">Assunto</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="interessados">Interessados </label>
        <input className="form-control" id="interessado" />
        <Button>ADICIONAR</Button>
      </div>
      <div className="form-group">
        <label htmlFor="descricao">Descrição</label>
        <input className="form-control" id="descricao" />
      </div>
      <div className="form-group">
        <button id="salvarNovoProcesso" type="submit">
          SALVAR
        </button>
      </div>
    </form>
  );
};
export default Form;
