import React from 'react';
import '../css/Busca.css';

export default (props) => {
  return (
    <input
      type="text"
      placeholder="Pesquise por uma informação do processo"
      {...props}
    ></input>
  );
};
