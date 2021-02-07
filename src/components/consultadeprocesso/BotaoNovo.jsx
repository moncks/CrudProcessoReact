import React, { Children } from 'react';

export default (props) => {
  return (
    <div>
      <button {...props}>{props.children}</button>
    </div>
  );
};
