import { useState } from "react";

import Image from "next/image";
import Layout from "../../components/Layout";

export default function Producto({
  producto,
  agregarCarrito,
  actualizarCantidad,
}) {
  const [cantidad, setCantidad] = useState(0);
  console.log("pagina show producto", producto);
   const { name, price, photos, description } = producto;


  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("Cantidad No Válida");
      return;
    }

    const ProductoElegido = {
      id: producto.id,
      name,
      price,
      imagen: photos[0].url,
      cantidad,
    };

    console.log("elegi",ProductoElegido)

    agregarCarrito(ProductoElegido);
  };

  return (
    <Layout>
      <div>
         <h2>{name} </h2>
        <p>{description}</p>
        <p>{price}</p>

        {photos.map((photo, index) => (
          <Image
            src={photo.url}
            width={600}
            height={400}
            alt={`Imagen producto ${name}`}
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
  const api_url = process.env.API_URL
  const res = await fetch(`${api_url}/api/v1/products/${url}`);
  const producto = await res.json();

  console.log("propsproduct", producto);

  return {
    props: {
      producto,
    }, // will be passed to the page component as props
  };
}
