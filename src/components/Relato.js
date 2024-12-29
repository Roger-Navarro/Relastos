//import React from "react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {LibroContext} from "../context/LibroContext";
import '../styles/styles.css';

//export const Relato = ({ id, titulo, imagen, autor, genero, precio, puntuacion}) => {
    export const Relato = ({ agregarProducto}) => {
    const { libros } = useContext(LibroContext);

    return (
        <div className="relato-container">  
        <section className="seccionIzquierda">         
        <div className="card">
            {libros.length > 0 ? (
            libros.map((libro) => (
                <div>
            <p><img className="imagen" src={libro.imagen} alt="Libro"></img></p>
            <h3>{libro.titulo}</h3>
            <p>Autor: {libro.autor}</p>
            <p>Precio: {libro.precio}</p>
            <Link to={`/libros/${libro.id}`}>
                <button> Ver detalles</button>
            </Link>
            <button onClick={() => agregarProducto({id: libro.id, nombre: libro.titulo, precio: libro.precio})}>Agregar al Carrito</button>
            </div>
        ))
    ) : (
      <p>No hay libros disponibles2.</p>
    )}
        </div>
        </section>
        </div>
    );
}
export default Relato;