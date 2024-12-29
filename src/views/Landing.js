import React from 'react';
import {Link} from "react-router-dom";
import useRedireccion from "../hooks/UseRedireccion";

function Landing() {

    useRedireccion("/libros", 3000); // Redireccionamos a la vista de libros en 3 segundos

    return (
        <div className="landing">
                <Link to={"/libros"}> {/* Añadimos un enlace a la vista de libros */}
                    <h1>Bienvenidos a Nuestro Portal</h1>
                </Link>
                <span className="laser-pointer"></span> {/* Puntero láser original */}
                <span className="laser-pointer-reverse"></span> {/* Nuevo puntero láser en sentido contrario */}
        </div>
    );
}

export default Landing;