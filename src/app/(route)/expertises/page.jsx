"use client";
import React from "react";
import CountUp from "react-countup";
import SectionComponent from "@/components/SectionComponent";
import Marquee from "@/components/Marque/Marque";

function Expertises() {
  return (
    <div className='h-[100vh]   mx-auto bg-black'>
      <div className='Expertises flex gap-50 items-center justify-evenly  text-black  '>
        <p className=' font-bold text-4xl mt-28  font-Space'>
          Trusted by <CountUp end={100} delay={2} start={1}/> companies <br />
          around the world
        </p>
        <p className='font-bold text-sm  w-5  mt-28'>
          Nos partenaires à travers le monde nous ont choisis comme la solution
          de <br /> confiance pour résoudre tous les problèmes auxquels ils sont
          confrontés dans <br /> les industries.
        </p>
      </div>
      <div >
         <Marquee/>
      </div>
     
    </div>
  );
}

export default Expertises;
