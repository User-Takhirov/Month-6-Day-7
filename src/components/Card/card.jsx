import { Box, Container, Typography, Button, Stack } from "@mui/material";
import React from "react";
import {
  useDeleteDataMutation,
  useEditDataMutation,
} from "../../Redux/service/user-service";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const Card = ({ item }) => {
  const [userDelete] = useDeleteDataMutation();
  const [userEdit] = useEditDataMutation();
  const DeleteItem = (id) => {
    userDelete(id)
      .unwrap()
      .then((res) => console.log(res));
    toast.success("Successfully Deleted");
  };

  const EditItem = (id, title, description) => {
    const TitleEdit = prompt("title");
    const DesEdit = prompt("des");
    if (TitleEdit.length && DesEdit.length >= 3) {
      userEdit({ id, title: TitleEdit, description: DesEdit })
        .unwrap()
        .then((res) => {
          console.log(res);
          toast.success("Successfully Edited");
        });
    } else {
      toast.error("kamida 3 ta harf tashkil qilsin");
    }
  };
  return (
    <>
      <Container>
        <Box
          sx={{
            bgcolor: "#411378",
            mb: "20px",
            p: "20px",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Box sx={{ mb: "10px", color: "white" }}>
            <Typography variant="h4">{item.title}</Typography>
            <Typography variant="h6">{item.description}</Typography>
          </Box>
          <Stack direction={"row"} justifyContent={"center"} gap={"20px"}>
            <Button
              onClick={() => DeleteItem(item.id)}
              style={{
                borderColor: "red",
                color: "white",
                backgroundColor: "red",
              }}
              variant="contained"
            >
              DELETE
            </Button>
            <Button
              onClick={() => EditItem(item.id)}
              style={{
                borderColor: "red",
                color: "blue",
                backgroundColor: "yellow",
              }}
              variant="contained"
            >
              EDIT
            </Button>
            <Link to={`/home-detail/${item.id}`}>
              <Button variant="contained">Show</Button>
            </Link>
          </Stack>
        </Box>
      </Container>
    </>
  );
};
