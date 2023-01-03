import Layout from "../components/layout";

export default function carrito({ carrito }) {
  return (
    <Layout title="Carrito de Compras">
      <h1>Carrito</h1>
      <div>
        <h2>Artículos</h2>
        {carrito.length === 0 ? "carrito vacío" : (
          carrito.map(producto => (
            <div key={producto.id}>
              <p>{producto.title}</p>
            </div>
          ) )
        )}
      </div>

      <h3>Resumen del pedido</h3>
      <p>Total a pagar</p>
    </Layout>
  );
}
