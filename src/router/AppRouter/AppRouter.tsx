import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// TYPES
import { AppRouterPath } from "../../shared/types";
// LOADERS
import { photosLoader } from "../pageDataLoaders/userLoaders";
// PAGES
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";
import PhotoPage from "../../pages/PhotoPage/PhotoPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />} path={AppRouterPath.HOME} element={<MainLayout />}>
      <Route errorElement={<ErrorPage />} index={true} element={<HomePage />} />
      <Route
        errorElement={<ErrorPage />}
        path={AppRouterPath.PHOTOS}
        loader={photosLoader}
        element={<PhotoPage />}
      />
      <Route errorElement={<ErrorPage />} path={AppRouterPath.LOGIN} element={<LoginPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>,
  ),
);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
