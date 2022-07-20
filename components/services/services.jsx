import Exercises from "./servicesdata/Exercises";
import { useState } from "react";
import SearchExercises from "./servicesdata/SearchExercises";
import styles from "../../styles/Home.module.scss";
import { Box } from "@mui/material";
const Services = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <section className={styles.services}>
        <div>
          <h2>Let Us Find The Perfect Workout For You!</h2>
          <SearchExercises
            setExercises={setExercises}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
          <Exercises
            setExercises={setExercises}
            exercises={exercises}
            bodyPart={bodyPart}
          />
        </div>
      </section>
    </Box>
  );
};

export default Services;
