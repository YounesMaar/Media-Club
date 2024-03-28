import React, { useEffect } from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  // useEffect(() => {}, []);
  return (
    <div className="container">
      <div className="w-full bg-black">
        <AspectRatio
          // TODO: fix the phone view
          ratio={20 / 9}
          className="flex flex-col items-center justify-center"
        >
          <Image
            src="/logo.png"
            alt="Image"
            className="rounded-md object-cover"
            width={300}
            height={300}
            style={{
              height: "auto",
              width: "auto",
            }}
          />
          <Button className="uppercase rounded-full bg-gray-500">
            commmencer l'aventure
          </Button>
        </AspectRatio>
      </div>
    </div>
  );
};

export default Hero;
