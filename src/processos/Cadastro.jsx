import { Button } from '@material-ui/core';
import React from 'react';

function Cadastro() {
  return (
    <div>
      <h1 for="consulta">Cadastro de processo</h1>
      <label>Assunto</label>
      <input type="text" nome="assunto" />
      <label>Novo Interessado</label>
      <input type="text" nome="novoInteressado" />
      <Button>ADICIONAR</Button>
      <label>Descrição</label>
      <input type="text" nome="descricao" />
      <Button>SALVAR</Button>
    </div>
  );
}

export default Cadastro;
