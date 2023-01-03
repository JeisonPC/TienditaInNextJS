import Layout from "../components/layout"
import Link from "next/link"

export default function Page404() {
  return (
    <Layout
      title="Página no encontrada"
      >
        <p>Página no encontrada</p>
        <Link href="/">Ir al inicio</Link>
    </Layout>
  )
}
