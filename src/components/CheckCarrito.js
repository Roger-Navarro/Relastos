import React from 'react';

export const CheckCarrito = ({ carrito  = []}) => {
  // Calcular el total
  const total = carrito.reduce(
    (acumulador, producto) => acumulador + producto.precio * producto.cantidad,
    0
  );

  return (
    <div>
      <h2>Resumen del Carrito</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {carrito.map((producto) => (
              <li key={producto.id}>
                <p><strong>{producto.titulo}</strong></p>
                <p>Precio: ${producto.precio}</p>
                <p>Cantidad: {producto.cantidad}</p>
                <p>Subtotal: ${producto.precio * producto.cantidad}</p>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={() => alert('¡Compra Exitosa!')}> Pagar </button>
        </div>
      )}
    </div>
  );
};

export default CheckCarrito;