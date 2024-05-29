import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DevelopmentPage() {
  return (
    <div className="text-white">
      <section className="text-center h-[100vh]">
        <h1 className="text-5xl font-bold my-16">
          UX, UI, webdesign et Motion design
        </h1>
        <Image
          src="/path/to/your/image.jpg"
          alt="Design Image"
          width={800}
          height={400}
          className="mx-auto"
        />
      </section>

      <section className="container mx-auto space-y-6 bg-[#EFEFEF] py-10 text-black">
        <div className="flex gap-x-4 justify-between flex-col md:flex-row items-center">
          <Image src="/path" alt="image1" width={400} height={400} />
          <div className="flex justify-center md:justify-between flex-col gap-y-10 items-start w-3/4">
            <h1 className="underline text-2xl text-center  capitalize">
              web design:
            </h1>
            <p className="font-bold text-base text-primary/80 text-center md:text-start">
              Le webdesign va bien au-delà de l'esthétique ! Un site web bien
              conçu qui représente votre marque de manière appropriée est la
              pierre angulaire de tout plan de marketing numérique, et il
              attirera et inspirera confiance aux nouveaux prospects qui
              découvriront votre présence en ligne.   Pour se démarquer, votre
              marque requiert des supports web performants, parfaitement alignés
              avec votre identité visuelle, votre marché, votre audience et
              l'évolution contemporaine.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link
            className={buttonVariants({
              variant: "outline",
              size: "customized",
              className: "rounded-xl bg-black text-white mx-auto",
            })}
            href="/contact"
          >
            Contactez-nous!
          </Link>
        </div>
      </section>

      <section className="container mx-auto space-y-6 bg-black py-10 text-white">
        <div className="flex gap-x-4 justify-between flex-col md:flex-row items-center">
          <div className="flex justify-between flex-col gap-y-10 items-start w-3/4">
            <h1 className="underline text-2xl text-center md:w-2/4 capitalize">
              Qu’est-ce que le webdesign ? 
            </h1>
            <p className="font-bold text-base md:w-2/3 text-secondary/80 text-center md:text-start">
              Que ce soit pour une landing page percutante, un site web
              captivant ou une application mobile séduisante, le webdesign est
              votre atout maître pour offrir une expérience utilisateur
              inoubliable.   Il conduit vos visiteurs à travers un voyage
              numérique immersif en combinant habilement des composants
              interactifs et visuels, les incitant à explorer votre univers, vos
              valeurs et vos produits avec aisance.   Avec Media Capital,
              laissez nos experts en webdesign et en marketing digital
              transformer vos idées en supports numériques vibrants et hautement
              engageants. 
            </p>
          </div>
          <Image src="/path" alt="image1" width={400} height={400} />
        </div>
      </section>

      <section className="container mx-auto space-y-6 bg-[#EFEFEF] py-10 text-black">
        <h1 className="underline text-2xl text-center capitalize">
          Nos prestations en webdesign :
        </h1>
        <div className="flex gap-x-4 justify-between flex-col md:flex-row items-center">
          <Image src="/path" alt="image1" width={400} height={400} />
          <div className="flex justify-between flex-col gap-y-10 items-start w-3/4">
            <h1 className="underline text-2xl text-center capitalize">
              UX design : Évoquer des émotions chez les visiteurs de votre
              site. 
            </h1>
            <p className="font-bold text-base text-primary/80 text-center md:text-start">
              Notre service d'UX Design chez Media Capital se distingue par une
              approche approfondie et ciblée de votre audience. Nos équipes
              expérimentées réalisent une analyse minutieuse afin de concevoir
              des interfaces fonctionnelles qui correspondent précisément aux
              attentes des utilisateurs, que ce soit sur ordinateur ou sur
              mobile. Notre dévouement réside dans le développement de sites web
              avec des interfaces et des graphiques optimisés pour stimuler les
              taux de conversion et s’assurer que votre présence en ligne est
              couronnée de succès.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto space-y-6 bg-[#EFEFEF] py-10 text-black">
        <div className="flex gap-x-4 justify-between flex-col md:flex-row items-center">
          <div className="flex justify-between flex-col gap-y-10 items-start w-2/4">
            <h1 className="underline text-2xl text-center capitalize">
              UI design : Optimiser le parcours client  
            </h1>
            <p className="font-bold text-base  text-primary/80 text-center md:text-start">
              Chez Media Capital, nous comprenons l'importance de l'UI Design
              pour fournir une expérience utilisateur exceptionnelle. Notre
              approche commence par une compréhension complète  de vos besoins
              et de ceux de vos utilisateurs. Nous collaborons étroitement avec
              vous pour saisir l'essence de votre marque et les objectifs de
              votre projet. 
            </p>
          </div>
          <Image src="/path" alt="image1" width={400} height={400} />
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
            Discutons de votre projet 
          </Link>
        </div>
      </section>

      <section className="container mx-auto space-y-6 bg-black py-10 text-white">
        <h1 className="text-secondary/80 underline text-2xl text-center md:w-2/4 capitalize">
          Nos prestations en webdesign :
        </h1>
        <div className="flex gap-x-4 justify-between flex-col md:flex-row items-center">
          <Image src="/path" alt="image1" width={400} height={400} />
          <div className="flex justify-between flex-col gap-y-10 items-start w-2/4">
            <h1 className="underline text-2xl text-center md:w-2/4 capitalize">
              Motion Design : Dynamiser votre contenu  avec notre service 
            </h1>
            <p className="font-bold text-base text-secondary/80 text-center md:text-start">
              Chez Media Capital, nous mettons en œuvre cette puissante
              technique pour donner vie à vos contenus et offrir à votre
              audience des expériences visuelles inoubliables.    Nous adoptons
              une approche stratégique du Motion Design, en combinant
              créativité, technique et storytelling pour créer des contenus
              animés percutants. Nous collaborons étroitement avec vous pour
              comprendre vos objectifs, votre public cible et l'essence même de
              votre marque, afin de produire des animations qui correspondent
              parfaitement à votre vision.    Dynamisez votre contenu et élevez
              votre présence visuelle avec notre service de Motion Design.
              Contactez-nous dès aujourd'hui pour discuter de la manière dont
              nous pouvons donner vie à votre vision ! 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
