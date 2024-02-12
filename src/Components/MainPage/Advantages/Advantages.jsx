import { useSelector } from "react-redux";
import styles from "./Advantages.module.css";

import AdvantImage1 from "../../../assets/images/Advantages/Advantages1.svg";
import AdvantImage2 from "../../../assets/images/Advantages/Advantages2.svg";
import AdvantImage3 from "../../../assets/images/Advantages/Advantages3.svg";
import AdvantImage4 from "../../../assets/images/Advantages/Advantages4.svg";
import AdvantImage5 from "../../../assets/images/Advantages/Advantages5.svg";
import AdvantImage6 from "../../../assets/images/Advantages/Advantages6.svg";

const Advantages = () => {
  const language = useSelector((state) => state.lunguage.value);
  console.log(language);
  const items = [
    {
      id: 321,
      image: AdvantImage1,
      textRU: "Бережём природу.Эко-тара и проборы.",
      textEN: "We take care of nature. Eco-containers and partings.",
      textCH: "我們關懷大自然、生態容器和離別。",
    },
    {
      id: 3211,
      image: AdvantImage2,
      textRU: "28 дней без повторения, более 300 блюд!",
      textEN: "28 days without repetition, more than 300 dishes!",
      textCH: "28天不重複，300多道菜！",
    },
    {
      id: 321654,
      image: AdvantImage3,
      textRU: "Бесплатно заменяем блюда и ингредиенты.",
      textEN: "We replace dishes and ingredients free of charge.",
      textCH: "我們免費更換餐具和食材。",
    },
    {
      id: 154278,
      image: AdvantImage4,
      textRU: "Готовим ночью, упаковываем и отправляем Вам!",
      textEN: "We cook at night, pack and ship to you!",
      textCH: "我們晚上做飯，包裝並運送給您！",
    },
    {
      id: 15468762,
      image: AdvantImage5,
      textRU: "Ежедневная удобная и бесплатная доставка с 6:00 до 10:00",
      textEN: "Daily convenient and free delivery from 6:00 to 10:00",
      textCH: "每日 6:00 至 10:00 方便免費送貨",
    },
    {
      id: 147854741213,
      image: AdvantImage6,
      textRU:
        "Сохраняем Вашу энергию и до 14 часов в неделю освобождая от готовки!",
      textEN:
        "We save your energy and free you from cooking up to 14 hours a week!",
      textCH: "我們可以節省您的能源，讓您每週不用做飯 14 小時！",
    },
  ];
  return (
    <>
      <div className={styles.advBox}>
        <div className={styles.secondCircle}></div>
        {items.map((item) => (
          <div key={item.id} className={styles.advItem}>
            <img className={styles.advImage} src={item.image} alt="picture" />
            {language === "Russia" && (
              <p className={styles.advtext}>{item.textRU}</p>
            )}
            {language === "English" && (
              <p className={styles.advtext}>{item.textEN}</p>
            )}
            {language === "China" && (
              <p className={styles.advtext}>{item.textCH}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Advantages;
