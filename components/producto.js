import Image from "next/image";
import Link from "next/link";

export default function Productos(producto) {
  const { title, price, images, description, id } = producto.producto;
  console.log("Ti", { producto });

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
      <p>{price}</p>
      <Link href={`/productos/${id}`}>Ver Producto</Link>
    </div>
  );
}
