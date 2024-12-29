import {useEffect, useState} from "react";

export const useLibros = () => {

    const [libros, setLibros] = useState([]);
    /**
     * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de ingredientes
     * del back-end en el primer renderizado.
     */
    useEffect(() => {
        //fetch(process.env.REACT_APP_GW_URL).then((res) => res.json()).then((res) => setLibros(res));

        setTimeout(() => {
            setLibros([
                { id: 1, titulo: "Narnia", imagen: "assets/narnia.jpg", autor: "Juan Perez.", genero:"Epica", precio: 15.00, puntuacion:5 },
                { id: 2, titulo: "Kibalion", imagen: "assets/kibalion.jpg", autor: "Augusto Rodas.", genero:"Teologia", precio: 17.00, puntuacion:6 },
                { id: 3, titulo: "El Señor de los Anillos", imagen: "assets/anillos.jpg", autor: "Anonimo.", genero:"Epica", precio: 20.00, puntuacion:5.5 },
                { id: 4, titulo: "Pinocho", imagen: "assets/pinocho.jpg",autor: "Yepeto.", genero:"Fabula", precio: 18.00, puntuacion:5.7 },
                { id: 5, titulo: "La Sirenita", imagen: "assets/sirenita.jpg", autor: "Anonimo.", genero:"Fabula", precio: 25.00, puntuacion:7 },
                { id: 6, titulo: "Caballo de Troya", imagen: "assets/troya.jpg", autor: "JJ Benitez.", genero:"Epica", precio: 35.00, puntuacion:5 },
            ]);
        }, 2500);
    }, []);

    return libros;
}