import { useState } from "react";

import Image from "next/image";
import Layout from "../../components/layout";

export default function Producto({ producto, agregarCarrito, actualizarCantidad }) {
  const [cantidad, setCantidad] = useState(0);
  const { title, price, image, description, id } = producto;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("Cantidad No Válida");
      return;
    }

    const ProductoElegido = {
      id,
      title,
      price,
      image,
      cantidad,
    };

    agregarCarrito(ProductoElegido)
  };

  return (
    <Layout>
      <div>
        <h2>{title} </h2>
        <p>{description}</p>
        <p>{price}</p>
        <Image
          src={image}
          alt={`imagen producto ${title}`}
          width={100}
          height={100}
        />
        <form onSubmit={handleSubmit}>
          <label htmlFor="cantidad">Cantidad:</label>

          <select onChange={(e) => setCantidad(+e.target.value)} id="cantidad">
            <option value="0">--Seleccione la cantidad</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <input type="submit" value="agregar al carrito" />
        </form>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const respuesta = await fetch(`https://fakestoreapi.com/products/${id}`);
  const producto = await respuesta.json();

  console.log(producto);

  return {
    props: {
      producto,
    }, // will be passed to the page component as props
  };
}
