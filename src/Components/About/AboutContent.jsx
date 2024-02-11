import styles from "./Styles/AboutContent.module.css";
import aboutImage from "../../assets/images/sliderImages/image3.jpg";

const AboutContent = () => {
  return (
    <section>
      <div className={styles.innerImage}>
        <div className={styles.greenCircle}>
          <div className={styles.whiteBox}>
            <img src={aboutImage} alt="aboutImage" />
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.inner}>
          <h2 className={styles.title}>
            Здравствуйте! Меня зовут <span>Кобылинский Кирилл,</span> и я
            являюсь
            <span> основателем GastroChef.</span>
          </h2>
          <p className={styles.titleText}>
            Я Мастер Спорта Украины по тяжёлой атлетике, а так же состоял в
            составе сборной Украины.
          </p>
          <p className={styles.titleText}>
            У меня высшее образование национального университета физического
            воспитания и спорта Украины (НФВСУ), а так же в прошлом я
            профессиональный фитнес тренер!
          </p>
          <p className={`${styles.titleText} ${styles.textStrong}`}>
            И я хочу Вам рассказать побольше о GastroChef.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
