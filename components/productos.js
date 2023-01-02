import Image from 'next/image'
import Link from "next/link";


export default function Productos(productos) {

  const { title, price, image, description, id } = productos;

  return (
    <div>
      <h2>{title} </h2>
      <p>{description}</p>
      <p>{price}</p>
      <Image src={image} alt={`imagen producto ${title}`} width={100} height={100}/>
      <Link href={`/productos/${id}`}>
        Ver Producto
      </Link>
    </div>
  );
}
