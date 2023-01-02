import Navbar from "./NavBar"

export default function Layout({children}) {
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}
