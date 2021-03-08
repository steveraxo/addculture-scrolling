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
    <div style={{ margin: "15em auto" }}>
      <Lottie
        style={{ pointerEvents: "none" }}
        options={defaultOptions}
        height={100}
        width={100}
      />
    </div>
  );
}
