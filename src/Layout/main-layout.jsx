import React from "react";
import { Header } from "./Header/header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
