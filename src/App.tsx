import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from './components/Main/Main';
import { List } from './pages/List';
import './assets/css/reset.css';
import './App.css';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
    </Routes>
    </>
  );
}

export default App;
