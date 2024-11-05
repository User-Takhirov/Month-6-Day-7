import { fetchBaseQuery } from "@reduxjs/toolkit/query";
export const CreateMainBase = () => {
  return fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_URL}`,
    headers: { Authorization: "Bearer token" },
  });
};
