import React, { useState } from 'react';
import '../css/Busca.css';

export default (props) => {
  return (
    <input
      type="search"
      value={props.processo}
      onChange={(e) => props.alterarProcesso(e.target.value)}
      placeholder={props.placeholderText}
      {...props}
    ></input>
  );
};
