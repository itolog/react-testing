import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
// STYLES
import styles from "./errorPage.module.scss";

const ErrorPage = () => {
  const error = useRouteError();

  if (!isRouteErrorResponse(error) || error.status !== 401) {
    throw error;
  }

  return (
    <div className={styles.ErrorPage}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.data}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
