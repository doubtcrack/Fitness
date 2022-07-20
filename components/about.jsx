import styles from "../styles/Home.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.image}>
        <Image
          width={600}
          height={640}
          src={"/images/about-img.png"}
          alt={"About Us"}
        />
      </div>
      <div className={styles.about_info}>
        <span className={styles.sub_title}>About Us</span>
        <h2>We Are Ready To Making You In A Shape</h2>
        <div>
          <p>
            Finding motivation to work out can be challenging. There are so many
            distractions and less physically demanding alternatives to spending
            an hour at the gym or working out at home.
          </p>
          <p>
            You need to understand that Strength does not come from physical
            capacity. It comes from an indomitable will.
          </p>
        </div>
        <span className={styles.button}>Learn More</span>
      </div>
    </section>
  );
};

export default About;
