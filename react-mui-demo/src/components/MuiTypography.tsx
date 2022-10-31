import React from "react";
import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse provident
        incidunt praesentium est. Quod maxime, voluptatum earum aliquid officia
        autem consectetur natus accusamus ipsam pariatur itaque, excepturi,
        expedita quia sunt?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
        molestiae eius reiciendis sit, ipsam est cum delectus quasi, inventore,
        error fugit pariatur quos. Rem maxime itaque quo animi provident ipsum.
      </Typography>
    </div>
  );
};
