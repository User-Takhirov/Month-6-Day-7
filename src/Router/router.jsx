import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { HomeDetail } from "../components/Home-detail";
import { MainLayout } from "../Layout/main-layout";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home-detail/:id" element={<HomeDetail />} />
        </Route>
      </Routes>
    </>
  );
};
