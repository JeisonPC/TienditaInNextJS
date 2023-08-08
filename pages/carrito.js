import { useEffect, useState } from "react";

import Image from "next/image";
import Layout from "../components/Layout";

export default function Carrito({ carrito, actualizarCantidad, eliminarProducto }) {
  console.log(carrito);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (carrito && carrito.length > 0) {
      const calculoTotal = carrito.reduce(
        (total, producto) => total + producto.cantidad * producto.price,
        0
      );
      setTotal(calculoTotal);
    } else {
      setTotal(0);
    }
  }, [carrito]);


  return (
    <Layout title="Carrito de Compras">
      <h1>Carrito</h1>
      <div>
        <h2>Artículos</h2>
        {!carrito || carrito.length === 0
          ? "carrito vacío"
          : carrito.map((producto) => (
              <div key={producto.id}>
                <div>
                  <button type="button"
                  onClick={() => eliminarProducto(producto.id)}>
                    X
                  </button>
                  <Image
                    width={150}
                    height={150}
                    src={producto.imagen}
                    alt={producto.name}
                    priority={true}
                  />
                </div>
                <p>{producto.title}</p>
                Cantidad:{producto.cantidad}
                <select
                  onChange={(e) => actualizarCantidad({
                    id: producto.id,
                    cantidad: e.target.value
                  })}
                  id="cantidad"
                >
                  <option value="0">--Seleccione la cantidad</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            ))}
      </div>

      <h3>Resumen del pedido</h3>
      <p>Total a pagar {total}</p>
    </Layout>
  );
}
