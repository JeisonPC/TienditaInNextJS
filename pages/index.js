import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Layout from "../components/layout";
import Productos from "../components/productos";
import Slider from "../components/slider";

export default function Home({productos}) {
  console.log(productos)
  return (
    <>
      <Layout title={"Inicio"} description={"Tiendita Amigable"}>
        <Slider/>
      </Layout>
    </>
  );
}
