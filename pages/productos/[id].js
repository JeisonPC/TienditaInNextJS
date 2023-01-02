import Image from 'next/image'

export default function Producto({producto}) {

  const { title, price, image, description, id } = producto;

  console.log(producto)

  return (
    <div>
      <h2>{title} </h2>
      <p>{description}</p>
      <p>{price}</p>
      <Image
        src={image}
        alt={`imagen producto ${title}`}
        width={100}
        height={100}
      />
    </div>
  );
}

export async function getServerSideProps({params: {id}}) {
  const respuesta = await fetch(`https://fakestoreapi.com/products/${id}`)
  const producto = await respuesta.json();

  console.log(producto)

  return {
    props: {
      producto,
    }, // will be passed to the page component as props
  };
}
