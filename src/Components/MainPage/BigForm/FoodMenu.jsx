import { useSelector } from "react-redux";

import styles from "./FoodMenu.module.css";
import { food } from "../../DATA/DataFood";

const FoodMenu = () => {
  const nameAndTime = [
    {
      name: "Завтрак",
      time: "7:00 - 9:00",
    },
    {
      name: "2-й завтрак",
      time: "10:00 - 12:00",
    },
    {
      name: "Обед",
      time: "13:00 - 15:00",
    },
    {
      name: "Полдник",
      time: "16:00 - 17:30",
    },
    {
      name: "Ужин",
      time: "19:00 - 20:00",
    },
  ];
  const curProg = useSelector((state) => state.curNameProg.value);
  const day = useSelector((state) => state.day.value);
  const arr = food.find((item) => item.nameOfProg === curProg);

  return (
    <div className={styles.innerFood}>
      <div className={styles.innerItem}>
        {nameAndTime.map((item) => (
          <div key={item.name} className={styles.innerBox}>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.time}>{item.time}</div>
          </div>
        ))}
      </div>
      <div className={styles.innerFoodItem}>
        {arr.pecept[String(day)].map((elem, indx) => (
          <div key={indx} className={styles.foodItem}>
            <div className={styles.foodName}>{elem.name}</div>
            <div className={styles.foodWeith}>{elem.weight}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
