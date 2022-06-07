import React, { useState } from 'react'
import img from '../img/logo.svg'
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login (){

  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleInputChange = ({ target }) => {
      setUsuario(target.value)
  };

  const handleInputChamge = ({ target }) => {
      setContraseña(target.value);
  };


  const sesion = () => {
      if (usuario === "CristianJavier" && contraseña === "1234") {
          window.location= "/Notas";
      } else {
          alert("Usuario y Contraseña incorrectos");
      }
  }
  return (
    
      <>
        <div className="Login">
          <div className="caja">
            <div className="img">
              <img src={img} alt="" />
            </div>
            <div className="form">
              <h1>Inicio Sesion</h1>
              <input
                id="usuario"
                type="text"
                className="input"
                placeholder="Usuario"
                value={usuario}
                onChange={handleInputChange}
                name="username"
              ></input>

              <input
                id="contraseña"
                type="password"
                className="input"
                placeholder="Clave"
                value={contraseña}
                onChange={handleInputChamge}
                name="password"
              ></input>
              <div className="botones">
                <button onClick={sesion}>
                  Iniciar Sesion
                </button>
              </div>
              <p>¿Aún no tienes una cuenta?</p>
              <Link to="registro">Registrate</Link>

            </div>

          </div>
        </div>
      </>
  )
}