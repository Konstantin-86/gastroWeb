import Navigation from "../Navigation/Navigation";
import AboutContent from "./AboutContent";
import AboutSecondSec from "./AboutSecondSec";
import AboutTeamSection from "./AboutTeamSection";
import SecondSlider from "../MainPage/SecondSlider/SecondSlider";
import SectionForm from "../MainPage/SectionForm/SectionForm";
import Footer from "../MainPage/Footer/Footer";

import styles from "./Styles/SectionAbout.module.css";

const SectionAbout = () => {
  return (
    <section className={styles.innerAbout}>
      <Navigation />
      <AboutContent />
      <AboutSecondSec />
      <AboutTeamSection />
      <SecondSlider />
      <SectionForm />
      <Footer />
    </section>
  );
};

export default SectionAbout;
