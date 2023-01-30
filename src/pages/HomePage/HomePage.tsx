import React from "react";

const HomePage = () => {
  return (
    <div>
      HomePage
      <button
        onClick={() => {
          throw new Error("error");
        }}>
        error
      </button>
    </div>
  );
};

export default HomePage;
