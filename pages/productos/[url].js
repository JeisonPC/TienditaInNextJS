import { useState } from "react";

import Image from "next/image";
import Layout from "../../components/layout";

export default function Producto({
  productoId,
  agregarCarrito,
  actualizarCantidad,
}) {
  const [cantidad, setCantidad] = useState(0);
   const { title, price, images, description } = productoId[0].attributes;
  console.log("pagina show producto", productoId);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("Cantidad No Válida");
      return;
    }

    const ProductoElegido = {
      id: productoId[0].id,
      title,
      price,
      imagen: images.data[0].attributes.url,
      cantidad,
    };

    console.log("elegi",ProductoElegido)

    agregarCarrito(ProductoElegido);
  };

  return (
    <Layout>
      <div>
         <h2>{title} </h2>
        <p>{description}</p>
        <p>{price}</p>

        {images.data.map((image, index) => (
          <Image
            src={image.attributes.formats.medium.url}
            width={600}
            height={400}
            alt={`Imagen producto ${title}`}
            key={index}
          />
        ))}
        <form onSubmit={handleSubmit}>
          <label htmlFor="cantidad">Cantidad:</label>

          <select
            onChange={(e) => setCantidad(Number(e.target.value))}
            id="cantidad"
          >
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

export async function getServerSideProps({ params: { url } }) {
  const respuesta = await fetch(
    `https://prawie-backend.fly.dev/api/products?filters[id]=${url}&populate=images`
  );
  const { data: productoId } = await respuesta.json();

  console.log("propsproduct", productoId);

  return {
    props: {
      productoId,
    }, // will be passed to the page component as props
  };
}
