import styles from "./SectionForm.module.css";

const FormComp = () => {
  return (
    <div className={styles.innerForm}>
      <h3 className={styles.title}>Оформить заказ</h3>
      <p className={styles.formText}>
        Обсудите все детали заказа по телефону или сами укажите все подробности
        онлайн
      </p>
      <form>
        <label className={styles.lblName} htmlFor="inptName">
          Имя
        </label>
        <input className={styles.formInpt} name="inptName" type="text" />

        <label className={styles.lblPhone} htmlFor="inptPhone">
          Номер телефона
        </label>
        <input className={styles.formInpt} name="inptPhone" type="number" />

        <input className={styles.inptDisc} id="discount" type="checkbox" />
        <label className={styles.lblDiscount} htmlFor="discount">
          Тест-день! Получить скидку -30%?
        </label>

        <input className={styles.inptDisc} id="agreement" type="checkbox" />
        <label htmlFor="agreement">
          Согласен с <span>условиями сотрудничества</span>
        </label>

        <button className={styles.btnPhone}>Заказ по телефону</button>
        <p className={styles.TextBetweenBtn}>ИЛИ</p>
        <button className={styles.btnOnline}>Онлайн заказ</button>
      </form>
    </div>
  );
};

export default FormComp;
