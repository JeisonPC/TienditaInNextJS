import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Link from "next/link";

import styles from "../styles/components/products.module.scss";

export default function Productos(producto, key) {
  const { title, price, images, description } = producto.producto;

  console.log("item", producto.id);

  return (
    <div key={key} className={styles.cardProducts}>
      <div className={styles.cardImg}>
        <Image
          src={images.data[0].attributes.formats.medium.url}
          width={100}
          height={100}
          sizes="100vw"
          alt={`Imagen producto ${title}`}
        />
      </div>
      <div>
        <p>{description}</p>
        <h3>{price}</h3>
      </div>
      <div className={styles.buttons}>
        <button>
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <Link href={`/productos/${producto.id}`}>
          VER PRODUCTO {/* <FontAwesomeIcon icon={faCartPlus}  />*/}
        </Link>
      </div>
    </div>
  );
}
