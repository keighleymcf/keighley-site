import React from "react";
import spinner from "../../assets/icons8-loading-circle.gif";
import "./styles.scss";

const LoadingIndicator = () => {
  return (
    <img
      className="spinner"
      src={spinner}
      alt="loading spinner - downloaded from Icons8"
    />
  );
};

export default LoadingIndicator;
