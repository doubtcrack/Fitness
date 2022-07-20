import React from "react";
import { Stack } from "@mui/material";
import { Rings } from "react-loader-spinner";

const Loader = () => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
  >
    <Rings color="grey" />
  </Stack>
);

export default Loader;
