import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import styles from "./SecondSlider.module.css";
import first from "../../../assets/images/secondSlider/firstSlide.png";
import third from "../../../assets/images/secondSlider/thirdSlide.png";
import foth from "../../../assets/images/secondSlider/fothSlide.png";
import fith from "../../../assets/images/secondSlider/fiveSlide.png";
import six from "../../../assets/images/secondSlider/sixthSlide.png";

const SecondSlider = () => {
  return (
    <>
      <h2 className={styles.title}>Фото блюд</h2>
      <Swiper
        slidesPerView={1.4}
        spaceBetween={20}
        slidesOffsetBefore={0}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          1919: { slidesPerView: 6, slidesOffsetBefore: -10 },
          1365: { slidesPerView: 5, slidesOffsetBefore: 120 },
          1023: { slidesPerView: 4, slidesOffsetBefore: 0 },
          768: {
            slidesPerView: 2.5,
            slidesOffsetBefore: 0,
            spaceBetween: 30,
          },
          374: {
            slidesPerView: 1.7,
          },
        }}
        className={styles.mySecondSlider}
      >
        <SwiperSlide>
          <img className={styles.imgItem} src={first} alt="first" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.imgItem} src={third} alt="third" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.imgItem} src={foth} alt="foth" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.imgItem} src={fith} alt="fith" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.imgItem} src={six} alt="six" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.imgItem} src={first} alt="first" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.imgItem} src={third} alt="third" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.imgItem} src={foth} alt="foth" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.imgItem} src={fith} alt="fith" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.imgItem} src={six} alt="six" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SecondSlider;
