import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";

export default function Layout({ children, title = "", description = "" }) {
  return (
    <>
      <Head>
        <title>{`Tiendita Amigable - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      {children}
      <Footer></Footer>
    </>
  );
}
