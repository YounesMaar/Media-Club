import Image from "next/image";
import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const Strategy = () => {
  return (
    <div>
      <div className='h-[100vh]'></div>
      <div className='container mx-auto space-y-6 bg-black py-10 text-white'>
        <div className='flex gap-x-10 justify-center flex-col md:flex-row items-center'>
          <div className='flex justify-center flex-col gap-y-10 items-start w-2/3'>
            <h1 className='underline text-2xl uppercase text-center md:w-2/3'>
              Chaque projet représente une invitation à explorer de nouveaux
              horizons imaginatifs
            </h1>
            <p className='text-base md:w-2/3 text-secondary/80'>
              Avec une expertise approfondie dans les disciplines
              perfectionnistes, gérer l'évolution de votre feuille de route
              digitale en fonction d'une analyse continue de la performance de
              vos applications mobiles et web, pour stimuler davantage leur
              utilisation. Guidés par un sens esthétique aiguisé, nos experts
              créatifs et nos consultants façonnent des mondes expressifs
              uniques, imprégnant chaque publicité d’unicité , , imaginant des
              identités de marques distinctives et élaborant des campagnes
              innovantes.
            </p>
          </div>
          <Image
            src='/Content1.png'
            alt='Brand_Content1'
            width={250}
            height={250}
          />
        </div>
      </div>
      <div className='mx-auto space-y-8  py-20 relative'>
        <div className='flex gap-x-10 justify-center flex-col items-center'>
          <Image
            src='/Content2.png'
            alt='Brandi_content2'
            width={200}
            height={500}
            className='absolute -bottom-1 left-0 hidden md:block'
          />
          <div className='flex justify-center flex-col gap-y-10 items-center md:items-end md:w-2/3'>
            <h1 className='underline text-[35px] uppercase  w-2/4 font-grotesk'>
              Nous sommes les architectes de votre identité visuelle et
              narrative, alliant esthétique et substance pour créer des
              expériences mémorables et engageantes
            </h1>
          </div>
        </div>
      </div>
      <div className='container mx-auto space-y-6 bg-black py-8 text-white'>
        <div className='flex gap-x-4 justify-center flex-col md:flex-row items-center'>
          <div className='flex justify-center flex-col gap-y-10 items-start w-2/4'>
            <p
              className='text-base md:w-2/3 text-secondary/80 text-center md:text-start
             font-Grotesk font-bold'>
              En nous appuyant sur une expertise approfondie dans la création
              d’images évocatrices et de contenus percutants, nous sommes votre
              partenaire privilégié pour donner vie à votre vision et raconter
              votre histoire de manière authentique et convaincante.
            </p>
          </div>
          <Image
            src='/Content3.png'
            alt='Branding_Content3'
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className='mx-auto space-y-8  py-20 relative'>
        <div className='flex gap-x-10 justify-center flex-col items-center'>
          <Image
            src='/Content4.png'
            alt='Brandi_content2'
            width={300}
            height={500}
            className='absolute top-2 left-0 hidden md:block'
          />
          <div className='flex justify-center flex-col gap-y-20 items-center md:items-end md:w-2/3'>
            <h1 className='underline text-[35px] uppercase  w-2/4 font-grotesk'>
              Que ce soit à travers des visuels saisissants, des campagnes
              publicitaires ou des stratégies de contenu innovantes, nous vous
              offrons bien plus qu’un simple service : nous vous faisons vivre
              une expérience.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
