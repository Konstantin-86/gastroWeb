import { useEffect, useState } from "react";
import styles from "./Styles/LaunchItems.module.css";
import { itemLaunch } from "./DATA/DataItemLaunch.js";
import Count from "./Count.jsx";

const LaunchItems = () => {
  const [busket, setBusket] = useState([]);
  const [handlebusket, setHandleBusket] = useState(false);
  const [busketFullCost, setBusketFullCost] = useState(null);
  const currentCount = (count, name, priceForOne) => {
    const arr = {
      name,
      count,
      priceForOne,
    };
    if (busket.length === 0) {
      setBusket([...busket, arr]);
    }
    const existingItem = busket.find((item) => item.name === name);

    if (existingItem) {
      if (count > existingItem.count) {
        const updatedItems = busket.map((item) =>
          item.name === name ? { ...item, count: item.count + 1 } : item
        );
        setBusket(updatedItems);
      } else {
        const updatedItems = busket.map((item) =>
          item.name === name ? { ...item, count: item.count - 1 } : item
        );
        setBusket(updatedItems.filter((item) => item.count > 0));
      }
    } else {
      setBusket([...busket, arr]);
    }
  };
  useEffect(() => {
    if (busket.length == 0) {
      setBusketFullCost(null);
    } else {
      let sum = 0;

      busket.map((item) => {
        sum += item.count * item.priceForOne;
      });
      setBusketFullCost(sum);
    }
  }, [busket]);
  useEffect(() => {
    const handleScroll = (e) => {
      if (handlebusket) {
        e.preventDefault();
      }
    };

    if (handlebusket) {
      document.body.style.overflow = "hidden";
      window.addEventListener("scroll", handleScroll);
    } else {
      document.body.style.overflow = "visible";
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handlebusket]);
  const closeBusket = () => {
    setHandleBusket(false);
  };
  return (
    <section>
      <div
        className={handlebusket ? styles.innerBusketActive : styles.innerBusket}
      >
        <div
          onClick={closeBusket}
          className={handlebusket ? styles.busketBgActive : styles.busketBg}
        ></div>
        <button
          className={styles.closeBtn}
          onClick={() => setHandleBusket(!handlebusket)}
        >
          X
        </button>
        <h2 className={styles.busketTitle}>Ваша корзина</h2>
        {busket.length ? (
          <div className={styles.notEmptyBusket}>
            <div className={styles.busketBox}>
              <p>Позиция</p>
              <p className={styles.busketSum}>Количество</p>
              <p className={styles.busetCost}>Стоимость</p>
            </div>
            {busket.map((item, index) => (
              <div key={index} className={styles.busketBox}>
                <p>{item.name}</p>
                <p className={styles.busketSum}>{item.count}</p>
                <p className={styles.busetCost}>
                  {item.count * item.priceForOne}
                </p>
              </div>
            ))}
            <p className={styles.busketFullCost}>Итого: {busketFullCost}</p>
          </div>
        ) : (
          <h2 className={styles.busketTitle}>Нет товаров</h2>
        )}
      </div>

      <div className={styles.boxButton}>
        <button
          onClick={() => setHandleBusket(!handlebusket)}
          type="button"
          className={styles.btnOrder}
        >
          Оформить заказ
        </button>
      </div>
      <div className={styles.inner}>
        {itemLaunch.map((elem) => (
          <div key={elem.image} className={styles.item}>
            <img className={styles.elemImage} src={elem.image} alt="image" />
            <div className={styles.titleBox}>
              <h4 className={styles.title}>{elem.title}</h4>
              <div className={styles.itemWeight}>{elem.weight}</div>
              <div className={styles.itemCallories}>{elem.callories}</div>
            </div>
            <ol className={styles.listContent}>
              {elem.list.map((item) => (
                <li key={item} className={styles.itemContent}>
                  {item}
                </li>
              ))}
            </ol>
            <div className={styles.footerItem}>
              <div className={styles.countBox}>
                <Count
                  priceForOne={elem.priceForOne}
                  nameItem={elem.title}
                  currentCount={currentCount}
                />
              </div>
              <div className={styles.footerPrice}>{elem.priceName}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LaunchItems;
