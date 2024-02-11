import Navigation from "../Navigation/Navigation";
import Footer from "../MainPage/Footer//Footer";
import { Link } from "react-router-dom";

import styles from "./Styles/SectionBlog.module.css";

import inst from "../../assets/images/Icons/inst.png";
import face from "../../assets/images/Icons/face.png";
import mainImg from "../../assets/images/blog/main.png";
import blogImage1 from "../../assets/images/blog/blogImage1.png";
import blogImage2 from "../../assets/images/blog/blogImage2.png";

const SectionBlog = () => {
  return (
    <section style={{ overflow: "hidden" }}>
      <Navigation />
      <article className={styles.artBlog}>
        <img className={styles.mainImage} src={mainImg} alt="mainImg" />
        <div className={styles.innerToptext}>
          <h2 className={styles.blogTitle}>
            Как поменять свои пищевые привычки?
          </h2>
          <div className={styles.innerShare}>
            <p>Поделиться:</p>
            <img src={inst} alt="inst" />
            <img src={face} alt={face} />
          </div>
        </div>
        <div className={styles.blogDate}>29.05.2020</div>
        <div className={styles.textBox}>
          <p>Привычка — это неосознанное, то, что мы делаем на автомате.</p>
          <p>
            Например, это такие обыденные вещи, как чистка зубов утром или
            пристегнуться, садясь в автомобиль.
          </p>
          <p>
            Большинству из этих привычек мы не отдаем отчета. Именно этот
            бессознательный фактор и является той сложностью, которая не
            позволяет вам легко и просто изменить эту самую привычку в итоге.
          </p>
          <p>
            В такой момент ваш мозг не думает, а стоит ли ему это делать. Он
            просто берет и делает. Пищевые привычки действуют так же.{" "}
          </p>
        </div>
        <img className={styles.blogImage} src={blogImage1} alt="blogImage1" />
        <div className={styles.textBox}>
          <p>
            Их нужно перевести на автомат. И если вы считаете, что для этого
            нужна невероятная сила воли или сверхстрогий самоконтроль, то вовсе
            нет. У меня для вас есть несколько простых постепенных шагов,
            которые помогут вам сделать ваши пищевые привычки осознанными и
            подконтрольными.
          </p>
          <p>
            Первое, с чего стоит начать — это прекратите покупать вредные
            продукты. Запомните: то, чего нет, того и не съешь. В свою очередь,
            ставим на стол на самое видное место тарелочку с ломтиками моркови,
            сухофруктами и орешками.
          </p>
          <p>
            Второе — это создаем себе препятствия на пути к вредностям — ходите
            домой другой дорогой, проходите мимо отдела сладостей или офисной
            кухни, если ощущаете манящий запах выпечки — просто понюхайте
            запястье, на которое утром нанесли духи.
          </p>
          <p>
            Третье и очень важное правило — полезные продукты в вашей квартире и
            на работе должны стать доступнее и заметнее. Например, яблоко или
            морковь вместо печенья и конфет на столе, сделайте заготовку из
            нарезанных листьев салатов в холодильнике, заранее очистите овощей и
            нарежьте ломтиками.
          </p>
          <p></p>
        </div>
        <img className={styles.blogImage} src={blogImage2} alt="blogImage2" />
        <div className={styles.textBox}>
          <p>
            Четвертое — используйте посуду для еды меньшего размера. Да-да,
            придется отказаться от любимых блюдец на пол-стола, но оно того
            стоит. Также не берите добавки. Ведь многие исследования доказывают,
            что мы делаем выводы о своем насыщении, основываясь не на своих
            чувствах сытости, а видя, что тарелка уже пуста.
          </p>
          <p>Пятое — всегда начинайте еду с овощей.</p>
          <p>
            Очень рекомендую менять привычки не только с себя, а сразу с семьей.
            Поддержка близких очень важна будет для вас.
          </p>
          <p>
            И, конечно же, для смены пищевых привычек очень рекомендуем
            попробовать рационы здорового питания GastroChef.
          </p>
          <p></p>
        </div>

        <div className={styles.innerShare}>
          <Link to={"/"} className={styles.linkButton}>
            Программы питания
          </Link>
          <div className={styles.shareBox}>
            <p>Поделиться:</p>
            <img src={inst} alt="inst" />
            <img src={face} alt={face} />
          </div>
        </div>
      </article>
      <Footer />
    </section>
  );
};

export default SectionBlog;
