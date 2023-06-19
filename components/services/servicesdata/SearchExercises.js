import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar.js";
import styles from "../../../styles/Home.module.scss";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch("/api/exercises?bodyPartsList=true")
        .then((response) => response.json())
        .then((data) => setBodyParts(["all", ...data]))
        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetch("/api/exercises").then((response) =>
        response.json()
      );
      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  // useEffect(() => {
  //   console.log(bodyParts);
  //   console.log(bodyPart);
  // });
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Box position="relative" mb="72px" display="flex">
        <TextField
          className="search-exercises"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "60vw", xs: "80vw" },
            height: { lg: "55px", xs: "50px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
            border: "none",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className={[styles.CTA, styles.fill].join(" ")}
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px!important", xs: "14px!important" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
