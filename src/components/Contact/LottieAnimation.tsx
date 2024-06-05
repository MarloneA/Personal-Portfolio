"use client";

import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const LottieAnimation = () => {
  return (
    <DotLottiePlayer
      src="/lottie/call_anim.json"
      autoplay
      loop
    ></DotLottiePlayer>
  );
};

export default LottieAnimation;
