"use client";

import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import { tsParticles } from "@tsparticles/engine";
import { useEffect } from "react";
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const Canvas = () => {
  // this should be run only once per application lifetime
  async function loadParticles(options: any) {
    await loadAll(tsParticles);

    await tsParticles.load({ id: "tsparticles", options });
  }
  const configs = {
    particles: {
      number: {
        value: 100,
      },
      // khalid zdt ghir l height
      innerHeight: "100vh",

      color: {
        value: "#ffffff",
      },
      links: {
        enable: true,
        distance: 200,
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: { min: 0.5, max: 1 },
      },
      size: {
        value: {
          min: 4,
          max: 6,
        },
      },
      move: {
        enable: true,
        speed: 2,
      },
    },
    background: {
      color: "#000000",
    },
    poisson: {
      enable: true,
    },
  };

  useEffect(() => {
    loadParticles(configs);
  }, []);

  return <></>;
};

export default Canvas;
