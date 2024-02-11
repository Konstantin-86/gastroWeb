import Navigation from "../Navigation/Navigation";
import LaunchItems from "./LaunchItems";
import LaunchMainSection from "./LaunchMainSection";
import SecondSlider from "../MainPage/SecondSlider/SecondSlider";
import Footer from "../MainPage/Footer/Footer";

const SectionLaunch = () => {
  return (
    <section style={{ overflow: "hidden" }}>
      <Navigation />
      <LaunchMainSection />
      <LaunchItems />
      <SecondSlider />
      <Footer />
    </section>
  );
};

export default SectionLaunch;
