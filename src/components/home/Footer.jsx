import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      <p>
        Você pode criar um novo processo{' '}
        <Link to="/CadastroDeProcesso">clicando aqui</Link>.
      </p>
    </div>
  );
};
