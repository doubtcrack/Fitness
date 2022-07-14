import styles from "../styles/Home.module.scss";
const Heading = ({ name }) => {
  return (
    <section className={styles.topWorkout}>
      <h2 className={styles.heading}>{name}</h2>
    </section>
  );
};

export default Heading;
