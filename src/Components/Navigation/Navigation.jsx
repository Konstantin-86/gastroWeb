import styles from "./Navigation.module.css";

import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import RadioBtnLanguage from "./RadioBtnLanguage/RadioBtnLanguage";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [burgerHandler, setBurgerHandler] = useState(true);
  const [listItems, setListItems] = useState([
    {
      name: "Програмы питания",
      linkTo: "/",
    },
    {
      name: "Бизнес-ланчи",
      linkTo: "/lunch",
    },
    {
      name: "Gastro Shop",
      linkTo: "/gastro",
    },
    {
      name: "О нас",
      linkTo: "/about",
    },
    {
      name: "Блог",
      linkTo: "/blog",
    },
  ]);

  const langHandler = (lang) => {
    switch (lang) {
      case "Russia":
        setListItems([
          {
            name: "Програмы питания",
            linkTo: "/",
          },
          {
            name: "Бизнес-ланчи",
            linkTo: "/lunch",
          },
          {
            name: "Gastro Shop",
            linkTo: "/gastro",
          },
          {
            name: "О нас",
            linkTo: "/about",
          },
          {
            name: "Блог",
            linkTo: "/blog",
          },
        ]);
        break;
      case "China":
        setListItems([
          {
            name: "營養計劃",
            linkTo: "/",
          },
          {
            name: "商務午餐",
            linkTo: "/lunch",
          },
          {
            name: "美食店",
            linkTo: "/gastro",
          },
          {
            name: "關於我們",
            linkTo: "/about",
          },
          {
            name: "部落格",
            linkTo: "/blog",
          },
        ]);
        break;
      case "English":
        setListItems([
          {
            name: "Nutrition programs",
            linkTo: "/",
          },
          {
            name: "Business lunches",
            linkTo: "/lunch",
          },
          {
            name: "Gastro Shop",
            linkTo: "/gastro",
          },
          {
            name: "About Us",
            linkTo: "/about",
          },
          {
            name: "Blog",
            linkTo: "/blog",
          },
        ]);
        break;
    }
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 600) setBurgerHandler(true);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <div className={styles.innerNav}>
        <div className={burgerHandler ? "" : styles.bgShadow}></div>
        <div className={styles.innerLine}></div>
        <div className={styles.circle}>
          <img className={styles.logo} src={logo} alt="logo" />
          <p className={styles.logoText}>healthy ration</p>
        </div>
        <ul className={burgerHandler ? styles.list : styles.listActive}>
          {listItems.map((item) => (
            <li key={item.name} className={styles.listItem}>
              <Link to={item.linkTo} className={styles.itemLink}>
                {item.name}
              </Link>
            </li>
          ))}

          {/*  <li className={styles.listItem}>
            <Link className={styles.itemLink}>Програмы питания</Link>
          </li>
          <li>
            {" "}
            <Link to={"/lunch"} className={styles.itemLink}>
              Бизнес-ланчи
            </Link>
          </li>
          <li>
            {" "}
            <Link to={"/gastro"} className={styles.itemLink}>
              Gastro Shop
            </Link>
          </li>
          <li>
            {" "}
            <Link to={"/about"} className={styles.itemLink}>
              О нас
            </Link>
          </li>
          <li>
            {" "}
            <Link to={"/blog"} className={styles.itemLink}>
              Блог
            </Link>
          </li> */}
        </ul>

        <div className={styles.phone}>
          <a href="tel: 380689494919" className={styles.phoneLink}>
            <svg
              className={styles.phoneSvg}
              width="28"
              height="31"
              viewBox="0 0 28 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.2055 12.6174C19.2727 18.3914 13.9455 22.3964 11.5234 23.6772L9.04751 19.6363L0.491525 23.3018L2.12452 30.8411C23.1015 28.9132 27.5858 10.2956 27.2059 1.22785L20.3845 0.147132L17.6499 9.62352L21.2055 12.6174Z"
                fill="#65CF71"
              />
            </svg>

            <span>+38 (068) 949 - 49 -19</span>
          </a>
        </div>
        <div
          className={
            burgerHandler ? styles.innerLanguage : styles.innerLanguageActive
          }
        >
          <RadioBtnLanguage langHandler={langHandler} />
        </div>
        <div
          onClick={() => setBurgerHandler(!burgerHandler)}
          className={styles.burger}
        >
          <svg
            className={
              burgerHandler ? styles.burgerOpenHide : styles.burgerOpenShow
            }
            width="25"
            height="20"
            viewBox="0 0 25 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="25" height="3.94737" rx="1.97368" fill="#020202" />
            <rect x="5" y="8" width="20" height="4" rx="2" fill="#020202" />
            <rect
              y="15.7895"
              width="25"
              height="3.94737"
              rx="1.97368"
              fill="#020202"
            />
          </svg>
          <svg
            className={
              burgerHandler ? styles.burgerCloseHide : styles.burgerCloseShow
            }
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3.05762"
              y="-6.10352e-05"
              width="25"
              height="3.94737"
              rx="1.97368"
              transform="rotate(45 3.05762 -6.10352e-05)"
              fill="#020202"
            />
            <rect
              x="0.265625"
              y="17.6776"
              width="25"
              height="3.94737"
              rx="1.97368"
              transform="rotate(-45 0.265625 17.6776)"
              fill="#020202"
            />
          </svg>
        </div>
        <div
          className={
            burgerHandler ? styles.buttonNumber : styles.buttonNumberActive
          }
        >
          <a href="tel: 380689494919">+38 (068) 949 - 49 -19</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
