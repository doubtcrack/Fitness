import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Divider } from "@mui/material";
import Link from "next/link";
import {
  exerciseOptions,
  fetchData,
  youtubeOptions,
} from "../../components/services/utils/fetchData";
import Detail from "../../components/services/servicesdata/Detail";
import ExerciseVideos from "../../components/services/servicesdata/ExerciseVideos";
import SimilarExercises from "../../components/services/servicesdata/SimilarExercises.js";
import { useRouter } from "next/router";
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  // const { id } = useParams();

  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equimentExercisesData);
    };
    const exerciseDetail = fetchExercisesData();
    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <>
      <Box>
        <Divider color="red" />

        <Link href="/" as={`/`} passHref>
          <Button variant="outlined" sx={{ m: "2rem" }}>
            {" "}
            {" < Back to Home "}{" "}
          </Button>
        </Link>
      </Box>
      <Divider />
      <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
        <Detail exerciseDetail={exerciseDetail} />
        {/* <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      /> */}
        <SimilarExercises
          targetMuscleExercises={targetMuscleExercises}
          equipmentExercises={equipmentExercises}
        />
      </Box>
      <Divider color="red" />
    </>
  );
};

export default ExerciseDetail;
