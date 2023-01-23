import React from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

const ExerciseCard = ({ exercise }) => (
  // console.log(exercise),
  (
    <Link href="/exercise/[id]" as={`/exercise/${exercise.id}`} passHref>
      <div className="exercise-card">
        <Image
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          width={300}
          height={300}
          key={exercise.id}
        />
        <Stack direction="row">
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#02e9bb",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.bodyPart}
          </Button>
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#ff2d5e",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.target}
          </Button>
        </Stack>
        <Typography
          ml="21px"
          color="#000"
          fontWeight="bold"
          sx={{ fontSize: { lg: "24px", xs: "20px" } }}
          mt="11px"
          pb="10px"
          textTransform="capitalize"
        >
          {exercise.name}
        </Typography>
      </div>
    </Link>
  )
);

export default ExerciseCard;
