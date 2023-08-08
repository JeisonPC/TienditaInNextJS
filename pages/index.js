import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import Slider from "../components/slider";
import { getProducts } from "./api/products";
import Item from "../components/Item";
import CanvasRenderer from "../components/CanvasRenderer";


import styles from "../styles/index.module.scss";

export default function Home({ productos }) {
  console.log("productos de la página inicial", productos);
  return (
    <>
      <Layout title={"Inicio"} description={"Tiendita Amigable"}>
        <Slider />
        <div className={styles.containerProducts}>
          {productos.map((producto) => (
            <Item
              key={producto.id}
              producto={producto}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const apiUrl = process.env.API_URL;

  const res = await fetch(apiUrl + "/api/v1/products");
  const productos = await res.json();

  return {
    props: {
      productos,
    },
  };
}
