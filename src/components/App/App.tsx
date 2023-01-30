import React from "react";
import "./App.scss";
import AppRouter from "../../router/AppRouter/AppRouter";
import ErrorBoundary from "../../shared/errors/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
}

export default App;
