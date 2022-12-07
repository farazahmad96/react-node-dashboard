import React from 'react';
import './App.css';
import RoutesView from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <RoutesView />
    </BrowserRouter>
  );
}

export default App;
