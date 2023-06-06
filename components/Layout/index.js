import Header from "../Header";
import Head from "next/head";
import Footer from "../Footer";
import { Global, css } from "@emotion/react";

export default function Layout({ children, title = "", description = "" }) {
  return (
    <>
      <Head>
        <title>{`Tiendita Amigable - ${title}`}</title>
        <meta name="description" content={description} />
        <Global
          styles={css`
            :root {
              --morado: red;
            }
            html {
              box-sizing: border-box;
            }
            h1 {
              font-size: 2rem !important;
            }
            a {
              text-decoration: none;
            }
          `}
        />

      </Head>
      <Header />
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
