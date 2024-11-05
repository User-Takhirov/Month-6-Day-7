import { Box, Typography } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    <>
      <Box
        sx={{ py: "20px", bgcolor: "grey", textAlign: "center", mb: "30px" }}
      >
        <Typography variant="h4">Header</Typography>
      </Box>
    </>
  );
};
