import React from 'react';

export default (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Pesquise por uma informação do processo"
      ></input>
      <button onClick={props.busca}>{props.children}</button>
    </div>
  );
};
