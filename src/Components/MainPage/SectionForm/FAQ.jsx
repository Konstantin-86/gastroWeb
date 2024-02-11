import { useState } from "react";
import styles from "./SectionForm.module.css";

const FAQ = () => {
  const DATAforFAQ = [
    {
      title: "Как осуществляется доставка правильного питания?",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo sapiente tempora cumque modi!",
    },
    {
      title: "Можно ли менять время доставки место?",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo sapiente Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo sapiente tempora cumque modi! tempora cumque modi!",
    },
    {
      title: "Как и в чем приезжает еда?",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicinLorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo sapiente tempora cumque modi!g elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo sapiente tempora cumque modi!",
    },
    {
      title: "Когда Вы готовите?",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo saLorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo sapiente tempora cumque modi!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo sapiente tempora cumque modi!piente tempora cumque modi!",
    },
    {
      title: "Какие продукты Вы используете?",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisiLorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo sapiente tempora cumque modi!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo sapiente tempora cumque modi!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo sapiente tempora cumque modi!cing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo sapiente tempora cumque modi!",
    },
    {
      title: "Я буду есть одно и то же?",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo sapiente tempora cumque modi!sapiente tempora cumque modi!",
    },
    {
      title: "У меня аллергия и непереносимость определенных продуктов",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo sapiente tempora cumque modi!",
    },
    {
      title: "В какой очередности все есть?",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisLorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo sapiente tempora cumque modi!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo sapiente tempora cumque modi!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo sapiente tempora cumque modi!icing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo sapiente tempora cumque modi!",
    },
    {
      title: "Можно ли замораживать программу?",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisLorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo sapiente tempora cumque modi!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo sapiente tempora cumque modi!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo sapiente tempora cumque modi!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo sapiente tempora cumque modi!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo sapiente tempora cumque modi!icing elit. Nesciunt odit sit voluptatibus quae autem aut facere eaque accusamus asperiores sunt minus inventore, magnam, quas dolore explicabo sapiente tempora cumque modi!",
    },
  ];
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleItemClick = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };
  return (
    <div className={styles.innerFAQ}>
      <h3 className={styles.titleFaq}>Часто задаваемые вопросы</h3>
      {DATAforFAQ.map((item, index) => (
        <div
          key={item.title}
          className={
            openIndexes.includes(index) ? styles.innerElemOff : styles.innerElem
          }
          onClick={() => handleItemClick(index)}
        >
          <div className={styles.elemTitle}>{item.title}</div>

          <p
            className={
              openIndexes.includes(index)
                ? styles.elemTextActive
                : styles.elemText
            }
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
