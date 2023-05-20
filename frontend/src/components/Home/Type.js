import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "First Register The System.....",
          "Login to the Mental System.....",
          "Play Game and Release your Stress.....",
          "We Recover You Mind....",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
