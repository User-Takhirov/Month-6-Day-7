import { configureStore } from "@reduxjs/toolkit";
import { MainUserApi } from "./service/user-service";

export const store = configureStore({
  reducer: {
    [MainUserApi.reducerPath]: MainUserApi.reducer,
  },
  middleware: (defaultMiddleWare) => {
    return defaultMiddleWare().concat(MainUserApi.middleware);
  },
});
