import React from 'react';
import './App.css';
import { Search } from './Busca';
import { Container } from './Container';

const App = () => {
  const triggerText = 'clicando aqui';
  const onSubmit = (event) => {
    event.preventDefault(event);
  };
  return (
    <div className="App">
      <Search />
      <p>Você pode criar um novo processo</p>
      <Container triggerText={triggerText} onSubmit={onSubmit} />
    </div>
  );
};

export default App;
