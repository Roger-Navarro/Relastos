
import React, { useState,useContext } from "react";
import {Relato} from "../components/Relato";
import {CheckCarrito} from "./CheckCarrito";
import { Link } from "react-router-dom";
import '../styles/styles.css';
import '../index.css';

export const Carrito = () => {
  const [carrito, setCarrito] = useState([]);

  
  
  const agregarProducto = (producto) => {
    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
      // Incrementar la cantidad si ya está en el carrito
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      // Agregar nuevo producto al carrito
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarProducto = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <div className="container-carrito">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul className="lista">
          {carrito.map((item) => (
            <li key={item.id} classname="item">
              {item.nombre} - ${item.precio} x {item.cantidad}
              <button
                onClick={() => eliminarProducto(item.id)}
                className="boton"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
      <button onClick={vaciarCarrito} className="botonPrincipal">
        Vaciar Carrito
      </button>
      <Link to={"/check"}>
                <button> Check Carrito</button>
            </Link>
      <h2 className="center-text">Libros Disponibles</h2>
      <section className="seccionDerecha">      
      <Relato  agregarProducto={agregarProducto} />
      <CheckCarrito carrito={carrito} />
      </section>
    </div>
  );
};


export default Carrito;
