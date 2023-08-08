// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Banner from "../assets/Banner1.png";
import Banner2 from "../assets/Banner2.png";

//fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import styles from "../styles/slider.module.css";



// import required modules
import { Navigation } from "swiper";
import Link from "next/link";

export default function Slider() {
  const imageStyles = {
    width: "50%", // Cambia el porcentaje según tus necesidades
    height: "100%", // Cambia el porcentaje según tus necesidades
  };
  return (
    <>
      <Swiper
        className={styles.swiper}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide className={styles.swiperSlide}>

          <Image
            priority={true}
            src={Banner}
            alt="Banner"
            style={imageStyles}
          />
          <div className={styles.rigth}>
            <h1 className={styles.swiperSlideText}>Esto es PRAWIE</h1>
            <p>Una tienda especializada en Gamers Increíbles</p>
            <Link href={"/tienda"}>Ir a la tienda <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            priority={true}
            src={Banner2}
            alt="Banner"
            style={imageStyles}
          />
          <h2 className={styles.swiperSlideTextInv}>La mejor Tiendita</h2>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
