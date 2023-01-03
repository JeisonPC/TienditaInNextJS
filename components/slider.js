// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Banner from "../assets/Banner1.png";
import Banner2 from "../assets/Banner2.png";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import styles from "../styles/slider.module.css";

// import required modules
import { Navigation } from "swiper";

export default function Slider() {
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
            width="50%"
            height="50%"
          />
          <h2 className={styles.swiperSlideText}>La mejor Tiendita</h2>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            priority={true}
            src={Banner2}
            alt="Banner"
            width="50%"
            height="50%"
          />
          <h2 className={styles.swiperSlideTextInv}>La mejor Tiendita</h2>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
