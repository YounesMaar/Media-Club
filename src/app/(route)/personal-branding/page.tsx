import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PersonalBranding = () => {
  return (
    <div>
      <div
        className="text-white h-[100vh] bg-conver bg-center"
        style={{ backgroundImage: "url('/personal-branding/hero.png')" }}
      >
        <div className="flex justify-center items-center w-3/4 h-full  mx-auto">
          <h1 className="text-7xl text-center">Personal Branding</h1>
        </div>
      </div>

      <section className="container mx-auto space-y-6 text-white py-10 bg-black">
        <div className="flex gap-x-4 justify-between flex-col md:flex-row items-center">
          <Image
            src="https://i.ibb.co/BfRmk7C/figure.jpg"
            alt="image1"
            width={400}
            height={400}
          />
          <div className="flex justify-center md:justify-between flex-col gap-y-10 items-start w-3/4">
            <h1 className="underline text-2xl text-center  capitalize">
              Personal Branding
            </h1>
            <p className="font-bold text-base text-center md:text-start">
              Fais-vous entendre ! Si l'idée de "Faites entendre votre voix !"
              peut résumer le Personal Branding de manière simplifiée, sa mise
              en œuvre est beaucoup plus complexe.     En effet, le Personal
              Branding va bien au-delà de l’image de marque de votre marque. Son
              objectif principal est d’accroître la visibilité de votre marque
              et d'élargir votre communauté afin d’attirer de nouveaux
              prospects. Lorsqu’elle est mise en œuvre correctement, cette
              stratégie de communication personnelle, , peut s'avérer
              extrêmement efficace.    Découvrez comment Media Capital peut vous
              aider à développer et à déployer une stratégie de Personal
              Branding personnalisée pour propulser votre entreprise vers de
              nouveaux sommets. 
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className:
                "rounded-full bg-white text-secondary-foreground mx-auto",
            })}
            href="/contact"
          >
            Échanger avec Media Capital
          </Link>
        </div>
      </section>

      <div className="container flex justify-between flex-col md:flex-row items-center py-10">
        <div className="flex justify-center flex-col gap-y-10 items-start w-2/3">
          <h1 className="underline md:text-2xl text-xl uppercase text-center md:w-2/4">
            Qu'est-ce que le Personal Branding ? 
          </h1>
          <p className="text-base md:w-2/3 md:text-start text-center ">
            Le Personal Branding est une stratégie marketing qui utilise les
            mêmes outils que le marketing traditionnel, mais dans le but de
            promouvoir votre propre marque et  votre image personnelle.      En
            associant votre visage à votre marque,  vous pouvez établir une
            connexion émotionnelle avec vos prospects et vos clients.  
          </p>
        </div>
        <Image
          src="https://i.ibb.co/6RYy28n/figure.jpg"
          alt=" Image"
          width={250}
          height={250}
        />
      </div>

      <section className="container mx-auto space-y-6 text-white py-10 bg-black">
        <div className="flex gap-x-4 justify-between flex-col md:flex-row items-center">
          <Image
            src="https://i.ibb.co/6RYy28n/figure.jpg"
            alt="image1"
            width={400}
            height={400}
          />
          <div className="flex justify-center md:justify-between flex-col gap-y-10 items-start w-3/4">
            <h1 className="underline text-2xl text-center  capitalize">
              Devenez l'ambassadeur de votre propre marque :    
            </h1>
            <p className="font-bold text-base text-center md:text-start">
              Quelle que soit la taille de votre entreprise ou le domaine dans
              lequel vous évoluez, en tant que dirigeant, vous êtes le premier
              porte-parole de votre marque et, à ce titre, vous êtes le garant
              de sa réputation. 
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className:
                "rounded-full bg-white text-secondary-foreground mx-auto",
            })}
            href="/contact"
          >
            Faire appel à Media capital
          </Link>
        </div>
      </section>

      <section className="container flex flex-col gap-y-4 py-10">
        <h1 className="text-2xl">Les avantages du Personal Branding: </h1>
        <p className="font-sm text-secondary-foreground">
          uels sont les bénéfices à en tirer ? Pratiquement tous. Le Personal
          Branding offre une pléthore d'avantages pour votre entreprise, car il
          vous permet de : 
        </p>
        <div className="flex flex-col gap-y-4">
          <div className="flex justify-evenly flex-col md:flex-row items-center gap-y-5">
            <p className="bg-black shadow text-white rounded-lg p-4 w-[250px] h-[200px]">
              1. Vous différencier de vos concurrents en adoptant une approche
              plus personnelle : en devenant le visage de votre marque, vous
              devenez unique et inimitable.
            </p>
            <p className="bg-black shadow text-white rounded-lg p-4 w-[250px] h-[200px]">
              2. Renforcer la crédibilité et la confiance accordées à votre
              marque par vos clients grâce à une présence humaine : la vôtre. 
            </p>
          </div>
          <div className="flex justify-center">
            <p className="bg-black shadow text-white rounded-lg p-4 w-[250px] h-[200px]">
              3. Améliorer la réputation et l'e-réputation de votre marque en
              devenant son principal influenceur. Utilisez votre influence pour
              propulser votre marque !   
            </p>
          </div>
          <div className="flex justify-evenly flex-col md:flex-row items-center gap-y-5">
            <p className="bg-black shadow text-white rounded-lg p-4 w-[250px] h-[200px]">
              4.Augmenter la visibilité de votre marque sur le web : en
              partageant votre expertise et votre savoir-faire sur les réseaux
              sociaux et en ligne, vous élargissez votre audience potentielle. 
            </p>
            <p className="bg-black shadow text-white rounded-lg p-4 w-[250px] h-[200px]">
              5.Contrôler votre image de marque : ne laissez pas le public se
              faire une opinion sur votre marque sans votre intervention.  
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto space-y-6 text-white py-10 bg-black">
        <div className="flex flex-col gap-y-6 justify-center items-center">
          <p className="text-base text-center md:text-start w-2/3">
            Vous êtes convaincu de l'importance de mettre en place une stratégie
            de Personal Branding ? Passons alors à l'action et parlons
            méthodologie. Vous avez de la chance, chez Media Capital, nous avons
            des experts en Personal Branding prêts à vous aider. 
          </p>
          <Link
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className:
                "rounded-xl bg-white text-secondary-foreground mx-auto",
            })}
            href="/contact"
          >
            Contactez-Nous
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PersonalBranding;
