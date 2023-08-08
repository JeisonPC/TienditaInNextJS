/*
export async function getServerSideProps() {
  const apiUrl = process.env.API_URL;
  const respuesta = await fetch(`https://prawie-backend.fly.dev/api/products?populate=*`)
  const {data} = await respuesta.json();

  console.log("productos en tienda.js backend",data)

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
 */
