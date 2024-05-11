import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BrandingPage = () => {
  return (
    <>
      <div className='hero'>
        <div
          className='layer-bg layer parallax'
          data-depth='0.50'></div>
        <div
          className='layer-1 layer parallax'
          data-depth='0.80'></div>
        <div
          className='layer-2 layer parallax'
          data-depth='0.90'></div>
        <div
          className='layer-3 layer parallax'
          data-depth='1'></div>
      </div>

      <div className='container mx-auto space-y-6 bg-black py-10 text-white'>
        <h1 className='underline text-2xl uppercase text-center'>
          chez media capital
        </h1>

        <div className='flex gap-x-10 justify-center flex-col md:flex-row items-center'>
          <div className='flex justify-center flex-col gap-y-10 items-start w-2/3'>
            <p className='text-base w-2/3'>
              notre mission est de comprendre votre marque, de lui donner vie et
              de l incarner avec passion. Nous nous efforçons de faire résonner
              votre marque et son storytelling sur tous les canaux d'expression,
              créant ainsi des connexions profondes avec votre public cible.
            </p>
          </div>
          <Image
            src='/branding/image3.png'
            alt='image1'
            width={250}
            height={250}
          />
        </div>
      </div>
      <div className='container mx-auto py-10'>
        <div className='flex flex-between flex-col md:flex-row items-center justify-center'>
          <Image
            src='/branding/image2.png'
            alt='image1'
            width={200}
            height={200}
          />
          <div className='space-y-4'>
            <h1 className='underline text-2xl uppercase space-y-6'>
              IDENTITES
            </h1>
            <p className='text-base w-2/3'>
              Nous sommes des architectes de marque, façonnant des identités qui
              captivent et des images qui laissent une empreinte durable.
            </p>
          </div>
        </div>
      </div>
      <div className='container mx-auto py-10'>
        <div className='flex flex-between flex-col md:flex-row items-center justify-center'>
          <p className='text-base w-2/3'>
            De la genèse de votre identité à son rayonnement sur tous les
            fronts, nous vous accompagnons à chaque étape. De la création de la
            plateforme de marque au choix du nom, de l'élaboration d’une charte
            graphique à la mise en place d’outils de communication, notre
            expertise vous guide vers l'excellence.
          </p>
          <Image
            src='/branding/image1.png'
            alt='image1'
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className='container mx-auto space-y-6 bg-black  text-white py-10'>
        <div className='flex flex-between flex-col items-center gap-8'>
          <p className='text-base w-2/3'>
            Nous enracinerons vos produits et services dans l'esprit de vos
            consommateurs, en leur offrant une expérience immersive et cohérente
            à chaque point de contact avec votre marque.
          </p>
          <Link
            className={buttonVariants({
              variant: "outline",
              className: "rounded-xl bg-black text-white",
            })}
            href='/'>
            Let’s connect
          </Link>
        </div>
      </div>
    </>
  );
};

export default BrandingPage;
