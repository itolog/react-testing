import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// PAGES
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />} path="/" element={<MainLayout />}>
      <Route errorElement={<ErrorPage />} index={true} element={<HomePage />} />
      <Route errorElement={<ErrorPage />} path="login" element={<LoginPage />} />
    </Route>,
  ),
);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
