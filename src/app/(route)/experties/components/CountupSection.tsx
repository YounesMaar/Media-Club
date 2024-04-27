"use client";

import React from "react";
import CountUp from "react-countup";

const CountupSection = () => {
  return (
    <div className="py-10">
      <p className="font-bold text-4xl font-Space">
        Trusted by <CountUp end={100} delay={2} start={1} /> companies
        <br />
        around the world
      </p>
    </div>
  );
};

export default CountupSection;
