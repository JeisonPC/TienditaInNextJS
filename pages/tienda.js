import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Item from "../components/Item";

export default function tienda({data}) {
  console.log("productos en tienda.js", data[0].id);

  return (
    <Layout>
      <h1>Colección</h1>

      {data.map(producto => (
        <Item
          key={producto.id}
          id= {producto.id}
          producto={producto.attributes}
        />
      ))}

    </Layout>
  );
}

export async function getServerSideProps() {
  const respuesta = await fetch(`https://prawie-backend.fly.dev/api/products?populate=*`)
  const {data} = await respuesta.json();

  console.log("productos en tienda.js backend",data)

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
