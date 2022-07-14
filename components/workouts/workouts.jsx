import styles from "../../styles/Home.module.scss";
import WorkoutList from "./workoutList";

const Workouts = () => {
  return (
    <section className={styles.topWorkout}>
      {/* List */}
      <WorkoutList
        items={[
          {
            title: "Yoga Training",
            subheading: "For Beginners",
            // stats: ["🧘‍♀️ 15 Min", "🔥 200 Cal"],
            image: {
              width: 250,
              height: 300,
            },
          },
          {
            title: "Cardio Training",
            subheading: "For Intermediates",
            // stats: ["🏃‍♀️ 28 Min", "🔥 260 Cal"],
            image: {
              width: 250,
              height: 300,
            },
          },
          {
            title: "CrossFit Training",
            subheading: "For Experts",
            // stats: ["🏋️‍♀️ 14 Min", "🔥 350 Cal"],s
            image: {
              width: 250,
              height: 300,
            },
          },
        ]}
      />
    </section>
  );
};

export default Workouts;
