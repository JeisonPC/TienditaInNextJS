import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Producto from "../components/producto";

export default function tienda({data}) {
  console.log("productos en tienda.js",data);

  return (
    <Layout>
      <h1>Colección</h1>

      {data.map(producto => (
        <Producto
          key={producto.id}
          producto={producto.attributes}
        />
      ))}

    </Layout>
  );
}

export async function getServerSideProps() {
  const respuesta = await fetch(`https://prawie-backend.fly.dev/api/products?populate=*`)
  const {data} = await respuesta.json();

  console.log(data)

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
