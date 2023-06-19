import styles from "../styles/Home.module.scss";
import Image from "next/image";
const Main = () => {
  return (
    <section className={` ${styles.hero}`}>
      <section className={styles.left}>
        <h1 className={` ${styles.heading}`}>
          One step towards a healthy lifestyle
        </h1>
        <p className={` ${styles.subheading}`}>
          Healthy body is the secret of a healthy lifestyle. Start your day with{" "}
          <b>Fitness</b>.
        </p>

        {/* CTAs */}
        <div className={styles.CTAs}>
          <button className={` ${styles.CTA} ${styles.fill}`}>
            Stay Connected
          </button>
          <button className={` ${styles.CTA} ${styles.outline}`}>
            Stay Strong
          </button>
        </div>
      </section>
      <section className={styles.right}>
        {/* Hero Image */}
        <div className={styles.image}>
          <Image
            height={528}
            width={800}
            alt="Lady in stretching pose"
            src="/images/banner-img.png"
          />
        </div>
      </section>
    </section>
  );
};

export default Main;
