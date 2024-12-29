import React,{useContext} from 'react';
import '../styles/styles.css';
import {Relato} from "../components/Relato";
import {LibroContext} from "../context/LibroContext";

export const BookList = () => {
    const { libros } = useContext(LibroContext);
    return (
        <div>
            <h2 className="center-text">Libros Disponibles</h2>
            <div className="relato-container">

                {
                    libros.length > 0 ? (
                        libros.map((libro, index) => (  
                            <Relato
                                key={index}
                                id={libro.id}
                                titulo={libro.titulo}
                                imagen={libro.imagen}
                                autor={libro.autor}
                                genero={libro.genero}
                                precio={libro.precio}
                                puntuacion={libro.puntuacion}
                            />
                        ))) : (
                            <h2 className="center-text">Libros Disponibles</h2>
                        )
                }
                {}
            </div>
        </div>
    );
}