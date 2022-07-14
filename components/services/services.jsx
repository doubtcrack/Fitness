import Image from "next/image";
import styles from "../../styles/Home.module.scss";

const Services = () => {
  return (
    <section className={styles.services}>
      <div>
        <h2>Let Us Find The Perfect Workout For You!</h2>

        <div>
          <div>
            <div>
              <div className="service-box">
                <div className="service-img">
                  <Image
                    width={370}
                    height={315}
                    src={"/images/logo.png"}
                    alt={"Body Building"}
                  />
                </div>
                <div className="service-title">
                  <h3 className="h3-title">
                    <a href="service-detail.html" title="Body Building">
                      Body Building
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <div className="service-box">
                <div className="service-img">
                  <Image
                    width={370}
                    height={315}
                    src={"/images/hero-lady.png"}
                    alt={"Body Building"}
                  />
                </div>
                <div className="service-title">
                  <h3 className="h3-title">
                    <a href="service-detail.html" title="Body Building">
                      Body Building
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
