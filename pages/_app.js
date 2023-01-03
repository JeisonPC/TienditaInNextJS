import { useState } from "react";
import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (producto) => {
    // Comprobar si el producto ya esta en el carrito...
    if (carrito.some((productoState) => productoState.id === producto.id)) {
      // Iterar para actualizar la cantidad
      const carritoActualizado = carrito.map((productoState) => {
        if (productoState.id === producto.id) {
          productoState.cantidad = producto.cantidad;
        }
        return productoState;
      });
      // Se asigna al array
      setCarrito([...carritoActualizado]);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    } else {
      // En caso de que el articulo no exista, es nuevo y se agrega
      setCarrito([...carrito, producto]);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  };

  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter((producto) => producto.id != id);
    setCarrito(carritoActualizado);
    window.localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  const actualizarCantidad = (producto) => {
    const carritoActualizado = carrito.map((productoState) => {
      if (productoState.id === producto.id) {
        productoState.cantidad = parseInt(producto.cantidad);
      }
      return productoState;
    });
    setCarrito(carritoActualizado);
    window.localStorage.setItem("carrito", JSON.stringify(carrito));
  };
  return (
    <Component
      {...pageProps}
      carrito={carrito}
      agregarCarrito={agregarCarrito}
      eliminarProducto={eliminarProducto}
      actualizarCantidad={actualizarCantidad}
    />
  );
}
