import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useCreateDataMutation } from "../../Redux/service/user-service";

export const Form = () => {
  const { handleSubmit, reset, register } = useForm();
  const [userMutationFn] = useCreateDataMutation();

  const submit = (data) => {
    userMutationFn(data)
      .unwrap()
      .then((res) => {
        console.log(res);
      });

    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"10px"}
          mb={"30px"}
        >
          <input
            placeholder="Title"
            style={{
              padding: "20px 10px",
              fontWeight: "500",
              fontSize: "20px",
              outline: "none",
              borderRadius: "10px",
              border: "none",
            }}
            required
            sx={{ color: "red" }}
            {...register("title")}
          />
          <input
            placeholder="Description"
            style={{
              padding: "20px 10px",
              fontWeight: "500",
              fontSize: "20px",
              outline: "none",
              borderRadius: "10px",
              border: "none",
            }}
            required
            sx={{ color: "red" }}
            {...register("description")}
          />
          {/* <TextField
            required
            sx={{ color: "red" }}
            {...register("description")}
          /> */}
          <Button type="submit" sx={{ height: "56px" }} variant="contained">
            Send
          </Button>
        </Stack>
      </form>
    </>
  );
};
