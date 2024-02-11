import styles from "./BigForm.module.css";
import { food } from "../../DATA/DataFood";
import { useState } from "react";
import PassiveTable from "./PassiveTable";
import ButtonOrder from "./ButtonOrder";
import RightTable from "./RightTable";

import { changeCurNameProg } from "../../../store/ProgrammModeSlice";
import { useDispatch, useSelector } from "react-redux";

const BigForm = () => {
  const curProg = useSelector((state) => state.curNameProg.value);
  const dispatch = useDispatch();
  const [handlerTopBtn, setHandlerTopBtn] = useState(true);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.boxTopButtons}>
          <div
            onClick={() => setHandlerTopBtn(!handlerTopBtn)}
            className={handlerTopBtn ? styles.topBtn : styles.topBtnActive}
          >
            Программы питания
          </div>
          <div
            onClick={() => setHandlerTopBtn(!handlerTopBtn)}
            className={handlerTopBtn ? styles.topBtnActive : styles.topBtn}
          >
            Специальные программы
          </div>
        </div>
        <div className={styles.innerAllProg}>
          {food.map((item) => (
            <div
              key={item.id}
              onClick={() => dispatch(changeCurNameProg(item.nameOfProg))}
              className={
                curProg == `${item.nameOfProg}`
                  ? styles.itemProgActive
                  : styles.itemProg
              }
            >
              <div className={styles.itemProgName}>{item.nameOfProg}</div>
              <p className={styles.itemProgCallories}>{item.callories}</p>
            </div>
          ))}
        </div>
        <div className={styles.innerBigTable}>
          <div className={styles.leftItemTable}>
            {food.map((item) => (
              <div
                key={item.nameOfProg}
                className={
                  curProg === `${item.nameOfProg}`
                    ? styles.firstTable
                    : styles.firstTableNone
                }
              >
                <span className={styles.spanTitle}>{item.nameOfProg}</span>
                <span className={styles.spanCall}>{item.callories}</span>
                <p className={styles.firstTableDecr}>{item.description}</p>
              </div>
            ))}
            <PassiveTable />
            <ButtonOrder />
          </div>

          <RightTable />
        </div>
      </div>
    </>
  );
};

export default BigForm;
