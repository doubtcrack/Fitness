import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchData, youtubeOptions } from "../services/utils/fetchData.js";
import Detail from "../services/servicesdata/Detail";
import ExerciseVideos from "../services/servicesdata/ExerciseVideos";
import SimilarExercises from "../services/servicesdata/SimilarExercises.js";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetch(`/api/exercises?id=${id}`)
        .then((response) => response.json())
        .catch((error) => console.error(error));
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetch(
        `/api/exercises?target=${exerciseDetailData.target}`
      )
        .then((response) => response.json())
        .catch((error) => console.error(error));
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetch(
        `/api/exercises?equipment=${exerciseDetailData.equipment}`
      )
        .then((response) => response.json())
        .catch((error) => console.error(error));
      setEquipmentExercises(equimentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
