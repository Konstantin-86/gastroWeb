import styles from "./Styles/LaunchMainSection.module.css";

import decor1 from "../../assets/images/gastrobg1.png";
import decor2 from "../../assets/images/gastrobg2.png";

const LaunchMainSection = () => {
  return (
    <section>
      <div className={styles.inner}>
        <img className={styles.imgDecor1} src={decor1} alt="decor1" />
        <img className={styles.imgDecor2} src={decor2} alt="decor2" />
        <div className={styles.bgDark}>
          <h2 className={styles.title}>Бизнес-ланчи</h2>
          <p className={styles.text}>
            Представляем сладкую коллекцию полезных конфет. Созданы с любовью и
            изготовлены из натуральных продуктов без добавления сахара - с
            заботой о вас и ваших близких!
          </p>
          <p className={styles.text}>
            {" "}
            Стоимость доставки 60 грн по предварительному заказу (за 1 сутки).
            Предварительный заказ предполагает доставку на следующий день с
            6:00-10:00. Минимальный заказ - от 6 конфет. Вес 1 кофетки 25 г.
          </p>
          <p className={styles.text}>
            Заказы на завтра принимаются до 11-00 текущего дня.
          </p>
          <p className={styles.text}>
            Конфеты доставляются в прозрачных пакетах со стикером. Вы можете
            заказать подарочный бокс с лентой стоимостью 20 грн
          </p>
        </div>
      </div>
    </section>
  );
};
export default LaunchMainSection;
