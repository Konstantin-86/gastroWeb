import styles from "./SectionForm.module.css";
import FormComp from "./FormComp";
import FAQ from "./FAQ";

const SectionForm = () => {
  return (
    <section className={styles.container}>
      <FormComp />
      <FAQ />
    </section>
  );
};

export default SectionForm;
