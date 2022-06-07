import React from 'react'
import img from '../img/logo.svg'
import './Registrar.css';
import { Link } from 'react-router-dom';

function Registrar() {

    return (
        <>
            <div className="registro">


                <div className="caja ">
                    <div className="imagen">
                        <img src={img} alt="logo react" />
                    </div>
                    <div className="form ">
                        <h1>Registrar</h1>
                        <input
                            id="usuario"
                            type="text"
                            className="input"
                            placeholder="Usuario"
                           
                            name="username"
                        ></input>

                        <input
                            id="contraseña"
                            type="password"
                            className="input"
                            placeholder="Clave"
                            
                            name="password"
                        ></input>
                        <div className="botones">
                            <button >
                                Iniciar Sesion
                            </button>
                        </div>
                        <Link to="/"><button>Volver</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registrar;