import MainPage from "../MainPage/MainPage";
import Navigation from "../Navigation/Navigation";
import Advantages from "../MainPage/Advantages/Advantages";

import styles from "./Main.module.css";
import BigForm from "../MainPage/BigForm/BigForm";
import SecondSlider from "../MainPage/SecondSlider/SecondSlider";
import SectionForm from "../MainPage/SectionForm/SectionForm";
import Footer from "../MainPage/Footer/Footer";

const Main = () => {
  return (
    <main className={styles.mainScreen}>
      <Navigation />
      <MainPage />
      <Advantages />
      <BigForm />
      <SecondSlider />
      <SectionForm />
      <Footer />
    </main>
  );
};

export default Main;
