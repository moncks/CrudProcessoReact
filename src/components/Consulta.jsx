import React from 'react';

function Consulta() {
  return (
    <div>
      <label for="consulta">Busca de Processos</label>
      <input
        type="text"
        nome="consulta"
        placeholder="Pesquise por uma informação do processo"
      />
    </div>
  );
}

export default Consulta;
