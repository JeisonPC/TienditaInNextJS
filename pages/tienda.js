import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Item from "../components/Item";

export default function tienda({productos}) {
  console.log("productos en tienda.js", productos);

  return (
    <Layout>
      <h1>Colección</h1>

      {productos.map((producto) => (
        <Item
          key={producto.id}
          id= {producto.id}
          producto={producto}
        />
      ))}

    </Layout>
  );
}

export async function getServerSideProps() {
  const apiUrl = process.env.API_URL;

  const res = await fetch(apiUrl + "/api/v1/products")
  const productos = await res.json();

  console.log("productos en tienda.js backend", productos)

  return {
    props: {
      productos,
    }, // will be passed to the page component as props
  };
}
