import Image from "next/image";
import styles from "../../styles/Home.module.scss";

const WorkoutList = ({ items }) => (
  <ul className={styles.workoutList}>
    {items.map(
      ({ title, subheading, stats, image: { height, width } }, idx) => (
        <li className={styles.item} key={idx}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subheading}>{subheading}</p>
          {/* <ul className={styles.stats}>
            {stats.map((value, i) => (
              <li className={styles.stat} key={i}>
                {value}
              </li>
            ))}
          </ul> */}

          {/* Image - Absolute */}
          <div className={styles.image}>
            <Image
              height={height}
              width={width}
              alt={`${title} Demo Image`}
              src={`/images/workout-items/${
                { 1: "first", 2: "second", 3: "third" }[idx + 1]
              }.png`}
            />
          </div>
        </li>
      )
    )}
  </ul>
);

export default WorkoutList;
