import React from "react";
import { NProgress } from "@tanem/react-nprogress";
import Container from "./components/Container";
import Bar from "./components/Bar";

interface AppNprogressProps {
  isAnimating: boolean;
}

const AppNprogress: React.FC<AppNprogressProps> = ({ isAnimating }) => {
  return (
    <NProgress isAnimating={isAnimating}>
      {({ animationDuration, isFinished, progress }) => {
        return (
          <Container animationDuration={animationDuration} isFinished={isFinished}>
            <Bar animationDuration={animationDuration} progress={progress} />
          </Container>
        );
      }}
    </NProgress>
  );
};

export default AppNprogress;
