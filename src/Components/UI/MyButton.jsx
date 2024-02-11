import styles from "./MyButton.module.css";

const MyButton = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default MyButton;
