import styles from "./Styles/AboutSecondSec.module.css";
import about from "../../assets/images/about.png";

const AboutSecondSec = () => {
  return (
    <section>
      <div className={styles.inner}>
        <div className={styles.item}>
          <img className={styles.itemImage} src={about} alt="about" />
        </div>
        <div className={styles.item}>
          <div className={styles.boxItem}>
            <h3 className={styles.title}>
              История GastroChef началась более 6-ти лет назад...{" "}
            </h3>
            <p className={styles.itemText}>
              Долгое время я наблюдал как людям не хватает времени для
              правильного и здорового питания, какое правильного, просто питания
              регулярного.
            </p>
            <p className={styles.itemText}>
              Они могли позавтракать, в обед съесть что-то типа шаурмы или
              снэка, а вечером в силу голода наесться, что плохо сказывалось на
              их обмене веществ и естественно здоровье.{" "}
            </p>
            <p className={styles.itemText}>
              Желание хоть как-то изменить ситуацию и помочь людям не давало мне
              покоя и я решил открыть доставку еды правильного питания.{" "}
            </p>
            <p className={styles.itemText}>
              Я со своим 17-и летним опытом в спорте и проф. образованием,
              вместе с диетологом разработали рационы правильного питания с
              подсчетом калорий (КБЖУ).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSecondSec;
