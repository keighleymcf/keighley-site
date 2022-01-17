import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../../assets/loading-tetris.json";

import "./styles.scss";

const LoadingIndicator = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default LoadingIndicator;
