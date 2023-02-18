import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Layout from "../components/layout";
import Slider from "../components/slider";
import Producto from "./productos/[url]";

export default function Home({ productos }) {
  console.log("productos de la página inicial", productos);
  return (
    <>
      <Layout title={"Inicio"} description={"Tiendita Amigable"}>
        <Slider />
      </Layout>
    </>
  );
}
