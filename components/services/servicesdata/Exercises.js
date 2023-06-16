import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import ExerciseCard from "./ExerciseCard.js";
import Loader from "./Loader.js";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetch("/api/exercises")
          .then((response) => response.json())
          .catch((error) => console.error(error));
      } else {
        exercisesData = await fetch(`/api/exercises?bodyPart=${bodyPart}`)
          .then((response) => response.json())
          .catch((error) => console.error(error));
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);
    const res = document.getElementById("showing-results");
    window.scrollTo({ res, behavior: "smooth" });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box sx={{ mt: { lg: "109px" } }} mt="70px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
        id="showing-results"
      >
        <div id="exercises"> Showing Results</div>
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "10px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            className="pagination"
            color="standard"
            shape="circle"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            siblingCount={0}
            sx={{ size: { lg: "large", xs: "small" } }}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
