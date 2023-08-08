import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Link from "next/link";

import styles from "../styles/components/products.module.scss";

export default function Item({producto}) {
  const { name, price, photos, description } = producto;
  console.log("Pagina del item", producto)

  return (
    <div className={styles.cardProducts}>
      <div className={styles.cardImg}>
      {photos && photos.length > 0 ? (
        <Image
          src={photos[0].url}
          width={100}
          height={100}
          sizes="100vw"
          alt={`Imagen producto ${name}`}
          priority={true}
        />
      ) : (
        <p>No hay fotos disponibles</p>
      )}
    </div>
      <div>
        <h2>{name}</h2>
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
