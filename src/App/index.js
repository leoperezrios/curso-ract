//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { TodoProvider } from '../todoContext';
import { AppUi } from './AppUi';

function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
