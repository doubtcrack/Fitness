import React, { useEffect, useState } from "react";
import { Box, Button, Divider } from "@mui/material";
import Link from "next/link";
import {
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
  // console.log(id);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetch(`/api/exercises?id=${id}`)
        .then((response) => response.json())
        .catch((error) => console.error(error));
      setExerciseDetail(exerciseDetailData);
      console.log(exerciseDetail);

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
    const exerciseDetail = fetchExercisesData();
    fetchExercisesData();
  }, [id]);

  // console.log(targetMuscleExercises);

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
