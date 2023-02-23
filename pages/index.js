import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Layout from "../components/layout";
import Slider from "../components/slider";
import { getProducts } from "./api/products";
import Item from "../components/Item";

import styles from "../styles/index.module.scss";

export default function Home({ products }) {
  console.log("productos de la página inicial", products);
  return (
    <>
      <Layout title={"Inicio"} description={"Tiendita Amigable"}>
        <Slider />

        {products.map((producto) => (
          <div key={producto.id} className={styles.cardProducts}>
            <Item
              id={producto.id}
              producto={producto.attributes}
            />
          </div>
        ))}
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://prawie-backend.fly.dev/api/products?populate=*"
  );
  const { data: products } = await res.json();

  return {
    props: {
      products,
    },
  };
}
