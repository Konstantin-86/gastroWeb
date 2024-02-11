import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeCurrentDay } from "../../../store/daySlice";

import styles from "./RightTable.module.css";
import { useEffect, useState } from "react";
import FoodMenu from "./FoodMenu";

const RightTable = () => {
  const dispatch = useDispatch();
  const [currentLang, setCurLang] = useState([
    "ПН",
    "ВТ",
    "СР",
    "ЧТ",
    "ПТ",
    "СБ",
    "ВС",
  ]);
  const language = useSelector((state) => state.lunguage.value);
  const reduxDay = useSelector((state) => state.day.value);

  useEffect(() => {
    if (language === "Russia")
      setCurLang(["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]);
    if (language === "English")
      setCurLang(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);
    if (language === "China")
      setCurLang(["一", "二", "三", "四", "五", "六", "日"]);
  }, [language]);

  const handleDay = (newIndex) => {
    dispatch(changeCurrentDay(newIndex));
  };
  return (
    <>
      <div className={styles.innerRightTable}>
        <div className={styles.allDays}>
          {currentLang.map((item, indx) => (
            <div
              key={item}
              onClick={() => handleDay(indx)}
              className={
                indx === reduxDay ? styles.itemDayActive : styles.itemDay
              }
            >
              {item}
            </div>
          ))}
        </div>

        <FoodMenu />
      </div>
    </>
  );
};

export default RightTable;
