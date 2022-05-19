import React from "react";
import Lottie from "lottie-react";
import * as animationData from "../../../assets/loader.json";

export const LoadingIndicator = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      height={52}
      width={200}
    />
  );
};
