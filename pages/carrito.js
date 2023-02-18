import Image from "next/image";
import Layout from "../components/layout";

export default function carrito({ carrito }) {
  return (
    <Layout title="Carrito de Compras">
      <h1>Carrito</h1>
      <div>
        <h2>Artículos</h2>
        {carrito.length === 0
          ? "carrito vacío"
          : carrito.map((producto) => (
              <div key={producto.id}>
                <div>
                  <Image
                    width={150}
                    height={150}
                    src={producto.imagen}
                    alt={producto.title}
                  />
                </div>
                <p>{producto.title}</p>
                Cantidad:{producto.cantidad}
              </div>
            ))}
      </div>

      <h3>Resumen del pedido</h3>
      <p>Total a pagar</p>
    </Layout>
  );
}
