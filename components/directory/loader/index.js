import React from "react";
import Lottie from "react-lottie";
import * as loading from "./loading.json";

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div style={{ margin: "0 auto", padding: "20px" }}>
      <Lottie
        style={{ pointerEvents: "none" }}
        options={defaultOptions}
        height={200}
        width={200}
      />
    </div>
  );
}
