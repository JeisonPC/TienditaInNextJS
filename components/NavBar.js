import React from 'react'
import Link from "next/link";

function NavBar() {
  return (
    <>
      <nav>
        <Link href={"/nosotros"}><p>Nosotros</p></Link>

      </nav>
    </>
  )
}

export default NavBar
