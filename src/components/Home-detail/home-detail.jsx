import React, { useEffect } from "react";
import { useGetUniqueDataQuery } from "../../Redux/service/user-service";
import { useSearchParams } from "react-router-dom";
export const HomeDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);

  const { data } = useGetUniqueDataQuery(id);

  return (
    <>
      {data && (
        <div>
          <h1>{data.title}</h1>
          <h3>{data.description}</h3>
        </div>
      )}
    </>
  );
};
