import styles from "./Footer.module.css";
import logo from "../../../assets/images/logo.png";
import inst from "../../../assets/images/Icons/inst.png";
import tele from "../../../assets/images/Icons/telegram.png";
import watts from "../../../assets/images/Icons/wattsap.png";
import face from "../../../assets/images/Icons/face.png";

const Footer = () => {
  const listItems = [
    "Програмы питания",
    "О нас",
    "Бизнес-ланчи",
    "Gastro Shop",
    "Блог",
  ];
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerItem}>
          <ul className={styles.footerList}>
            {listItems.map((item) => (
              <li key={item} className={styles.listItem}>
                <a href="/" className={styles.linkItem}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footerItem}>
          <div className={styles.footerLogoBox}>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
            <h4 className={styles.logoText}>сервис здорового питания</h4>
          </div>
        </div>
        <div className={styles.footerItem}>
          <a className={styles.linkPolicy} href="/">
            Условия сотрудничества
          </a>
          <a className={styles.linkPolicy} href="/">
            FAQ
          </a>
          <div className={styles.innerSocial}>
            <a href="/">
              <img src={inst} alt="inst" />
            </a>
            <a href="/">
              <img src={tele} alt="tele" />
            </a>
            <a href="/">
              <img src={watts} alt="watts" />
            </a>
            <a href="/">
              <img src={face} alt="face" />
            </a>
          </div>
          <a className={styles.footerPhone} href="tel:+380689494919">
            +38 (068) 949 - 49 - 19
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
