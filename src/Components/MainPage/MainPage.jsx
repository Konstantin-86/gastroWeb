import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./Bulet.css";
import "swiper/css/pagination";

import slideDATA from "./DataForSlider/TextForSlider.js";

import MyButton from "../UI/MyButton";
import styles from "./MainPage.module.css";
import SwiperButtonNext from "../UI/SwiperButtonNext";

const MainPage = () => {
  console.log(slideDATA);
  return (
    <>
      <div className={styles.circleBig}></div>

      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination
        modules={[Autoplay, Navigation, Pagination]}
        className={styles.mySwip}
      >
        {slideDATA.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles.itemSlider}>
              <div className={styles.contentSlider}>
                <p className={styles.blackText}>{item.blackText}</p>
                <p className={styles.greenText}>{item.greenText}</p>
                <p className={styles.blackTextSmall}>{item.blackTextSmall} </p>
                <p className={styles.smallText}>
                  {item.smallText} <span>{item.span}</span>{" "}
                  {item.smallTextContinue}
                </p>
                <div className={styles.boxPrice}>
                  <MyButton>{item.buttonText}</MyButton>
                  <div className={styles.innerPrice}>
                    <p className={styles.priceText}>{item.priceText}</p>
                    <p className={styles.priceNum}>{item.priceNum}</p>
                  </div>
                </div>
              </div>
              <div className={styles.imageSlider}>
                <img
                  className={styles.imgSlide}
                  src={item.srcImg}
                  alt="slide1"
                />
              </div>
            </div>
            <span className={styles.buletCr}></span>
          </SwiperSlide>
        ))}
        <SwiperButtonNext></SwiperButtonNext>
      </Swiper>
    </>
  );
};

export default MainPage;
