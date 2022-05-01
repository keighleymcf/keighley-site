import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../../assets/loader.json";

export const LoadingIndicator = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={36} width={200} />;
};
