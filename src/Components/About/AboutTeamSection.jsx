import styles from "./Styles/AboutTeamSection.module.css";
import bigImg from "../../assets/images/aboutBigImage.png";
import handImage from "../../assets/images/aboutHandImage.png";

const AboutTeamSection = () => {
  return (
    <section>
      <h2 className={styles.title}>Знакомтесь! Команда GastroChef!</h2>
      <div className={styles.bigImage}>
        <img src={bigImg} alt="bigImg" />
      </div>
      <div className={styles.inner}>
        <div className={styles.item}>
          <h3 className={styles.subTitle}>«GastroChef - легко для занятых»</h3>
          <p className={styles.text}>
            GastroChef - правильное питание с доставкой на дом, создано что бы
            облегчить жизнь, освободить время от готовки, от ненужных перекусов,
            фастфудов и дать возможность чувствовать себя легко и полным
            энергии, сил, для новых свершений и побед.
          </p>
          <p className={styles.text}>
            Все продукты для приготовления правильного питания закупаются только
            с сертификатами, а рационы готовятся на современной и безопасной
            кухне ночью перед приездом к Вам!
          </p>
          <p className={`${styles.text} ${styles.textStrong}`}>
            Друзья, если у Вас остались вопросы Вы с легкостью можете позвонить
            нам или написать мне лично в Инстаграм или Фейсбук.
          </p>
          <h5 className={styles.titleInfo}>С уважением, Кобылинский Кирилл.</h5>
        </div>
        <div className={styles.itemImg}>
          <div className={styles.greenCircle}></div>
          <img src={handImage} alt="handImage" />
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
