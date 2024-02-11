import { useState } from "react";
import styles from "./Styles/Count.module.css";

const Count = ({ currentCount, nameItem, priceForOne }) => {
  const [state, setState] = useState(0);

  function increment() {
    if (state === 0) return state;
    setState(state - 1);
    currentCount(state - 1, nameItem, priceForOne);
  }

  const decrement = () => {
    setState(state + 1);
    currentCount(state + 1, nameItem, priceForOne);
  };
  return (
    <>
      <div className={styles.inner}>
        <div className={styles.increment} onClick={increment}>
          -
        </div>
        <div className={styles.state}>{state}</div>
        <div className={styles.decrement} onClick={decrement}>
          +
        </div>
      </div>
    </>
  );
};

export default Count;
