"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, gsap } from "@/lib/gsap";

const NosVisionPage = () => {
  useGSAP(() => {
    ScrollTrigger.normalizeScroll(true);
    ScrollTrigger.create({
      trigger: ".phone-mockup",
      pin: true,
      start: "100px center",
      end: "+=1900",
    });

    // Height-stacked pinning effect
    let panels = gsap.utils.toArray(".panel");

    panels.forEach((panel: any) => {
      ScrollTrigger.create({
        trigger: panel as HTMLDivElement,
        start: () =>
          panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    });
  });
  return (
    <div id="smooth-wrapper" className="bg-white">
      <div id="smooth-content">
        <div className="bg-black h-[100vh] flex flex-col items-center py-40 gap-2 panel">
          <h1 className="md:text-5xl text-4xl font-bold uppercase text-white">
            notre vision
          </h1>
          <Button className="button" variant="outline">
            Scroller pur decouvrir
          </Button>
        </div>
        <div className="flex justify-center itmes-center">
          <Image
            id="phone"
            src="/mockup.svg"
            alt="scroller"
            height={400}
            width={400}
            className="phone-mockup"
            priority
          />
        </div>

        <div className="container text-black bg-white h-[100vh] flex items-center">
          <div className="flex flex-col">
            <h1 className="text-7xl">01</h1>
            <p className="text-md font-bold sm:w-1/3 ">
              Notre conviction est faconne par notre sensibilite a l'histoire et
              aux valeurs de chaque marque, melee de notre curiosite.
              <br />
              <br />
              Nous avons le pouvoir d'abolir les frontieres dans tous les
              secteurs : de la mode a la beaute, de l'art a l'architecture, du
              design a la gastronomie.
            </p>
          </div>
        </div>
        <div className="container text-white bg-black h-[100vh] flex justify-end items-center">
          <div className="flex flex-col items-end justify-center text-end">
            <h1 className="text-7xl">02</h1>
            <p className="text-md font-bold sm:w-2/4 ">
              Nous clutivons la beaute du gest, l'amour du savoir-faire et le
              raffinement du minimalisme.
            </p>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              officiis aperiam omnis ullam illo consectetur iusto quia maiores
              sequi nobis. Rerum dolorum doloremque perspiciatis corporis
              explicabo, totam vitae error voluptas.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosVisionPage;
