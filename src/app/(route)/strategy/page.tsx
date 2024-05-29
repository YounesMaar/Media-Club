import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Strategy = () => {
  return (
    <>
      <div
        className="h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/strategy/hero.jpg')" }}
      ></div>
      <div className="container mx-auto space-y-6 bg-black py-10 text-white">
        <div className="flex gap-x-10 justify-center flex-col md:flex-row items-center">
          <div className="flex justify-center flex-col gap-y-10 items-start w-2/3">
            <h1 className="underline text-2xl uppercase text-center md:w-2/4">
              Façonner Votre Histoire : L'Expertise de Media Capital
            </h1>
            <p className="text-base md:w-2/3 text-secondary/80">
              Nous mettons un point d'honneur à choisir les termes qui vous
              correspondent le mieux, en donnant  vie à votre histoire et en
              mettant en valeur votre expertise chez Media Capital.  Nous
              analysons passionnément et avec précision votre patrimoine,
              révélant vos fondamentaux et atouts, renforçant ainsi vos
              fondements d'entreprise. Notre but : inscrire votre patrimoine
              dans le paysage national et international des marques premium.
            </p>
          </div>
          <Image
            src="https://i.ibb.co/YPWJCzz/image1.jpg"
            alt="image1"
            width={250}
            height={250}
          />
        </div>
      </div>
      <div className="mx-auto space-y-6 py-6 relative">
        <div className="flex gap-x-10 justify-center flex-col items-center">
          <Image
            src="https://i.ibb.co/HLZbMFs/image1.png"
            alt="image1"
            width={350}
            height={350}
            className="absolute -bottom-2 left-0 hidden md:block"
          />
          <div className="flex justify-center flex-col gap-y-10 items-center md:items-end md:w-2/3">
            <h1 className="underline text-2xl uppercase text-center w-2/4">
              Façonner Votre Histoire : L'Expertise de Media Capital
            </h1>
            <p className="text-base w-2/3 text-primary/80">
              Nous mettons un point d'honneur à choisir les termes qui vous
              correspondent le mieux, en donnant  vie à votre histoire et en
              mettant en valeur votre expertise chez Media Capital.  Nous
              analysons passionnément et avec précision votre patrimoine,
              révélant vos fondamentaux et atouts, renforçant ainsi vos
              fondements d'entreprise. Notre but : inscrire votre patrimoine
              dans le paysage national et international des marques premium.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto space-y-6 bg-black py-10 text-white">
        <div className="flex gap-x-4 justify-center flex-col md:flex-row items-center">
          <div className="flex justify-center flex-col gap-y-10 items-start w-2/4">
            <h1 className="underline text-2xl uppercase text-center md:w-2/4">
              Stratégie de Marque Globale : De l'Analyse au Manifeste
            </h1>
            <p className="text-base md:w-2/3 text-secondary/80 text-center md:text-start">
              Conseil et planification stratégique : Audit et analyse, conseil
              et recommandation, développement de la stratégie de marque.
              Plateforme de marque : Élaborer la stratégie et l’image de marque,
              les éléments de base tels que l’ADN, les valeurs , la vision et
              l’essence de la marque, créer un guide de marque, des directives
              créatives et une identité visuelle. Manifeste :Définition du
              territoire d’expression, copywriting, choix sémantiques
              stratégiques, déclaration de marque.
            </p>
          </div>
          <Image
            src="https://i.ibb.co/bvn8ZHt/image3.jpg"
            alt="image1"
            width={300}
            height={300}
          />
        </div>
        <div className="flex justify-center items-center">
          <Link
            className={buttonVariants({
              variant: "outline",
              size: "customized",
              className: "rounded-xl bg-black text-white mx-auto",
            })}
            href="/"
          >
            Let’s connect
          </Link>
        </div>
      </div>
    </>
  );
};

export default Strategy;
