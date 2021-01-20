import React from 'react';
import './consulta.css';

function Consulta() {
  return (
    <div>
      <h1 for="consulta">Busca de Processos</h1>
      <input
        type="text"
        nome="consulta"
        placeholder="Pesquise por uma informação do processo"
      />
      <p>
        Você pode criar um novo processo <a>clicando aqui.</a>
      </p>
    </div>
  );
}

export default Consulta;
