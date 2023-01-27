import React from "react";
import { useRouteError } from "react-router-dom";
import { ErrorResponse } from "@remix-run/router/utils";
// STYLES
import styles from "./errorPage.module.scss";

const ErrorPage = () => {
  const error = useRouteError() as ErrorResponse;

  return (
    <div className={styles.ErrorPage}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.data}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
