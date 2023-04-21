import React from "react";
import Navbar from "./NavBar";
import LoginBtn from "./LoginBtn";
import styles from "../styles/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link href={"/"}><strong>Mi Tiendita</strong></Link>
        <Navbar />
        <Link href={"/carrito"}>
          <FontAwesomeIcon icon={faBasketShopping} />
        </Link>
        <LoginBtn/>
      </header>
    </>
  );
}
