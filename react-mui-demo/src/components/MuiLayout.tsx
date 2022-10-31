import React from "react";
import { Box, Stack, Divider } from "@mui/material";

export const MuiLayout = () => {
  return (
    <Stack
      sx={{ border: "1px solid" }}
      direction="column-reverse"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Codevolution
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
      ></Box>
    </Stack>
  );
};
