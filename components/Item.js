import Image from "next/image";
import Link from "next/link";

export default function Productos(producto, key) {
   const { title, price, images, description} = producto.producto;

   console.log("item", producto.id);

  return (
    <div>
      <Image
        src={images.data[0].attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`Imagen producto ${title}`}
      />
      <h2>{price}</h2>
      hol
      <p>{description}</p>
      {price}
      <p></p>
        <Link href={`/productos/${producto.id}`}>Ver Producto</Link>
    </div>
  );
}
