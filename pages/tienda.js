import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/layout";
import Productos from "../components/productos";

export default function tienda({productos}) {
  console.log(productos);

  return (
    <Layout>
      <h1>Colección</h1>

      {productos.map(producto => (
        <Productos
          key={producto.id}
          id={producto.id}
          title={producto.title}
          image={producto.image}
          price={producto.price}
          description={producto.description}
        />
      ))}

    </Layout>
  );
}

export async function getServerSideProps() {
  const respuesta = await fetch('https://fakestoreapi.com/products')
  const productos = await respuesta.json();

  console.log(productos)

  return {
    props: {
      productos,
    }, // will be passed to the page component as props
  };
}
