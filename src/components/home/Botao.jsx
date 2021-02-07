import React, { Children } from 'react';

export default (props) => {
  return (
    <div>
      <button onClick={props.onEnviarTextoBusca} {...props}>
        {props.children}
      </button>
    </div>
  );
};
