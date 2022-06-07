import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Notas from './components/Notas';
import Registrar from './components/Registrar';

function App() {
  return (
    <>
      <Router> 
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/notas" element={<Notas />} />
          <Route path="/registro" element={<Registrar/>} ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
