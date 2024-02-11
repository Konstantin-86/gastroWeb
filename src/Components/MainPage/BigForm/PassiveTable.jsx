import styles from "./PassiveTable.module.css";

const PassiveTable = () => {
  const dataText = [
    {
      name: "Тестовый день",
      firstPrice: "510 руб",
      SecondPrice: "357 руб",
    },
    {
      name: "1 день",
      firstPrice: "512 руб",
      SecondPrice: "357 руб",
    },
    {
      name: "от 7 дней",
      firstPrice: "510 руб",
      SecondPrice: "357 руб",
    },
    {
      name: "от 14 дней",
      firstPrice: "525 руб",
      SecondPrice: "357 руб",
    },
    {
      name: "от 30 дней",
      firstPrice: "510 руб",
      SecondPrice: "352 руб",
    },
    {
      name: "Завтрак и ужин",
      firstPrice: "-15 %",
      SecondPrice: "389 руб",
    },
  ];
  return (
    <div className={styles.innerTextTable}>
      {dataText.map((item) => (
        <div key={item.name} className={styles.item}>
          <span>{item.name}</span>
          <span>{item.firstPrice}</span>
          <span>{item.SecondPrice}</span>
        </div>
      ))}
    </div>
  );
};

export default PassiveTable;
