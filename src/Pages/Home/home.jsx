import { Container, IconButton, Skeleton, Stack } from "@mui/material";
import React from "react";
import { useGetDataQuery } from "../../Redux/service/user-service";
import { Card } from "../../components/Card";
import { Form } from "../../components/Form/form";

export const Home = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading, isFetching } = useGetDataQuery(page);
  const changePage = (newPage) => {
    setPage(newPage);
  };
  return (
    <>
      <Container>
        <Form />
        {isLoading ? (
          <div>
            <Stack gap={"2px"} mb={"20px"} height={"140px"}>
              <Skeleton height={"140px"} width={"100%"} />
            </Stack>
            <Stack gap={"2px"} mb={"20px"}>
              <Skeleton height={"140px"} width={"100%"} />
            </Stack>
            <Stack gap={"2px"} mb={"20px"}>
              <Skeleton height={"140px"} width={"100%"} />
            </Stack>
            <Stack gap={"2px"} mb={"20px"}>
              <Skeleton height={"140px"} width={"100%"} />
            </Stack>
          </div>
        ) : (
          <div>
            {data?.data?.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        )}
      </Container>
      <Container>
        {Array(data?.pageSize)
          ?.fill(null)
          ?.map((_, index) => (
            <IconButton
              sx={{
                color: `${page == index + 1 ? "white" : "blue"}`,
              }}
              onClick={() => changePage(index + 1)}
              key={index}
            >
              {index + 1}
            </IconButton>
          ))}
      </Container>
    </>
  );
};
