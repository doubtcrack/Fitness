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
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            architecto beatae vitae dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui.
          </p>
        </div>
        <span className={styles.button}>Learn More</span>
      </div>
    </section>
  );
};

export default About;
