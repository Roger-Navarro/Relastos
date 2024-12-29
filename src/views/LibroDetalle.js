
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {LibroContext} from '../context/LibroContext';
import { Link } from "react-router-dom";

const LibroDetalle = () => {
    const { libroId } = useParams();
    const { libros } = useContext(LibroContext);
    const libro = libros.find(r => r.id == libroId);

    if (!libro) {
        return <h2>Libro no encontrado</h2>;
    }

    console.log(libro.titulo);

    return (
        <div className="libro-details">
             <p><img className="imagen" src={libro.imagen} alt="Libro"></img></p>
            <h2 className="libro-name">{libro.titulo}</h2>
            <p className="libro-cuisine">Autor: {libro.autor}</p>
            <p className="libro-rating">Genero: {libro.genero}</p>
            <p className="libro-rating">Precio: {libro.precio}</p>
            <p className="libro-rating">Puntuacion: {libro.puntuacion}</p>
            <Link to={"/libros/"}>
                <button>Regresar</button>
            </Link>
        </div>
    );
}

export default LibroDetalle;