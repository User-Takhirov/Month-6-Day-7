import React from "react";
import { useGetUniqueDataQuery } from "../../Redux/service/user-service";
import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
export const HomeDetail = () => {
  const { id } = useParams();
  console.log(id);

  const { data } = useGetUniqueDataQuery(id);

  return (
    <>
      <Container>
        {data && (
          <Box textAlign={"center"}>
            <Typography variant="h3">{data.title}</Typography>
            <Typography variant="h6">{data.description}</Typography>
          </Box>
        )}
      </Container>
    </>
  );
};
