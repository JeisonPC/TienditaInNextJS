import { useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const carritoLS =
    typeof window !== "undefined" ? JSON.parse(localStorage.getItem("carrito")) ?? [] : [];

  const [pageReady, setPageReady] = useState(false);
  const [carrito, setCarrito] = useState(carritoLS);

  useEffect(() => {
    setPageReady(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarCarrito = (producto) => {
    if (carrito.some((productoState) => productoState.id === producto.id)) {
      const carritoActualizado = carrito.map((productoState) => {
        if (productoState.id === producto.id) {
          productoState.cantidad = producto.cantidad;
        }
        return productoState;
      });
      setCarrito(carritoActualizado);
      localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
    } else {
      setCarrito([...carrito, producto]);
      localStorage.setItem("carrito", JSON.stringify([...carrito, producto]));
    }
  };

  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter((producto) => producto.id !== id);
    setCarrito(carritoActualizado);
    localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
  };

  const actualizarCantidad = (producto) => {
    const carritoActualizado = carrito.map((productoState) => {
      if (productoState.id === producto.id) {
        productoState.cantidad = parseInt(producto.cantidad);
      }
      return productoState;
    });
    setCarrito(carritoActualizado);
    localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
  };

  return (
    <SessionProvider session={pageProps.session}>
      {pageReady ? (
        <Component
          {...pageProps}
          carrito={carrito}
          agregarCarrito={agregarCarrito}
          eliminarProducto={eliminarProducto}
          actualizarCantidad={actualizarCantidad}
        />
      ) : null}
    </SessionProvider>
  );
}
