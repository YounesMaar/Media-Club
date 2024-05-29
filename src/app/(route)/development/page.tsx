import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DevPage() {
  return (
    <div className="text-white">
      <section className="text-center h-[100vh]">
        <h1 className="text-5xl font-bold my-16">
          Developpement web et mobile
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
          <div className="flex justify-center md:justify-between flex-col gap-y-10 items-start w-3/4">
            <h1 className="underline text-2xl text-center  capitalize">
              Performance Innovante : Expériences Digitales Captivantes avec
              Media Capital
            </h1>
            <p className="font-bold text-base text-primary/80 text-center md:text-start">
              En combinant  la finesse du référencement naturel (SEO) à la
              puissance du référencement payant (SEA), nous pouvons sculpter une
              stratégie sur mesure, conçue spécifiquement  pour votre
              entreprise. L'objectif est simple : amplifier le flux de visiteurs
              sur votre plateforme, orchestrer des conversions optimales et
              fidéliser des relations avec une clientèle exigeante.  Dans cet
              univers numérique en constante évolution, chaque opportunité
              commerciale est un joyau qui doit être peaufiné., Explorons
              ensemble les nuances du SEO et du SEA pour libérer le potentiel
              inégalé de votre présence en ligne. 
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
            href="/contact"
          >
            Demander un devis
          </Link>
        </div>
      </section>

      <div className="container md:h-[100vh] bg-black mx-auto space-y-6 py-20   ">
        <h1 className="text-white text-center underline font-bold  font-Grotesk text-2xl">
          Les Fondements de Nos Services Web
        </h1>
        <div className="grid grid-cols-4  md:gap-y-10 gap-x-5 text-white  ">
          <div
            className="CardRefernc border-2 border-transparent rounded-[30px] w-[275px] h-[352px] 
             hover:bg-slate-200 hover:text-2xl hover:text-black   "
          >
            <section className="text-center flex flex-col justify-center  my-8 gap-y-8">
              <Image
                src="/planning1.png"
                alt="SEO Image"
                width={40}
                height={40}
                className=" m-auto"
              />
              <h2 className="text-[#416BFF]">Design premium :</h2>
              <p className="md:h-2/3 text-base">
                Nous nous engageons à aller au-delà de vos attentes en
                produisant un design moderne. Les connaissances approfondies de
                nos designers en matière de conception UX-UI confèrent à chaque
                livraison web une touche d’unicité.  spécial.  
              </p>
            </section>
          </div>
          <div
            className="CardRefernc border-2 border-transparent rounded-[30px] w-[275px] h-[352px] 
             hover:bg-slate-200 hover:text-2xl hover:text-black   "
          >
            <section className="text-center flex flex-col justify-center  my-8 gap-y-8">
              <Image
                src="/planning1.png"
                alt="SEO Image"
                width={40}
                height={40}
                className=" m-auto"
              />
              <h2 className="text-[#416BFF]">
                Optimisé pour le référencement : 
              </h2>
              <p className="md:h-2/3 text-base">
                Notre équipe accorde une importance particulière au respect des
                bonnes pratiques de référencement naturel, en nous concentrons 
                à la fois sur le référencement  technique et le référencement de
                contenu. 
              </p>
            </section>
          </div>
          <div
            className="CardRefernc border-2 border-transparent rounded-[30px] w-[275px] h-[352px] 
             hover:bg-slate-200 hover:text-2xl hover:text-black   "
          >
            <section className="text-center flex flex-col justify-center  my-8 gap-y-8">
              <Image
                src="/planning1.png"
                alt="SEO Image"
                width={40}
                height={40}
                className=" m-auto"
              />
              <h2 className="text-[#416BFF]">Animation sur-mesure : </h2>
              <p className="md:h-2/3 text-base">
                Les éléments visuels, graphiques et textuels sont essentiels à
                la mise à jour d’un site web. Cependant, l’animation est
                nécessaire pour lui donner la vitalité et du dynamisme !   
                Notre équipe a la capacité de créer des animations uniques sur
                mesure qui permettent d’illustrer un concept, un processus ou un
                produit technique{" "}
              </p>
            </section>
          </div>
          <div
            className="CardRefernc border-2 border-transparent rounded-[30px] w-[275px] h-[352px] 
             hover:bg-slate-200 hover:text-2xl hover:text-black   "
          >
            <section className="text-center flex flex-col justify-center  my-8 gap-y-8">
              <Image
                src="/planning1.png"
                alt="SEO Image"
                width={40}
                height={40}
                className=" m-auto"
              />
              <h2 className="text-[#416BFF]">Responsive :  </h2>
              <p className="md:h-2/3 text-base">
                L’interface et le design de votre site web sont optimisés pour
                les appareils mobiles par notre équipe de spécialistes en
                conception et développement web.  {" "}
              </p>
            </section>
          </div>
        </div>
      </div>

      <div className="container md:h-[100vh] bg-[#4A4A4A] mx-auto space-y-6 py-20   ">
        <h1 className="text-white text-center underline font-bold  font-Grotesk text-2xl">
          Une collaboration logique en 4 étapes :
        </h1>
        <div className="grid grid-cols-4  md:gap-y-10 gap-x-5 text-white  ">
          <div
            className="CardRefernc border-2 border-transparent rounded-[30px] w-[275px] h-[352px] 
             hover:bg-slate-200 hover:text-2xl hover:text-black   "
          >
            <section className="text-center flex flex-col justify-center  my-8 gap-y-8">
            
              <h2 className="text-[#416BFF]">Analyse de l’existant :  /h2>
              <p className="md:h-2/3 text-base">
                Notre équipe collabore avec vous pour cerner  pleinement vos
                besoins  ainsi que vos exigences en matière de développement de
                sites ou de pages de destination pour le commerce électronique. 
                Que vous souhaitiez partir de zéro ou améliorer un site
                existant, notre équipe est prête à répondre à vos besoins.{" "}
              </p>
            </section>
          </div>
          <div
            className="CardRefernc border-2 border-transparent rounded-[30px] w-[275px] h-[352px] 
             hover:bg-slate-200 hover:text-2xl hover:text-black   "
          >
            <section className="text-center flex flex-col justify-center  my-8 gap-y-8">
           
              <h2 className="text-[#416BFF]">
                Maquettage : 
              </h2>
              <p className="md:h-2/3 text-base">
               Nous concevons un prototype du site web ou de la page de destination à développer. Ce prototype permet à chacun de se mettre d’accord sur les éléments à mettre en place et donne une représentation visuelle rapide du projet.  
Nous collaborons étroitement pour parvenir à un consensus sur la fonctionnalité et la conception tout au long de cette phase de conception.. 
              </p>
            </section>
          </div>
          <div
            className="CardRefernc border-2 border-transparent rounded-[30px] w-[275px] h-[352px] 
             hover:bg-slate-200 hover:text-2xl hover:text-black   "
          >
            <section className="text-center flex flex-col justify-center  my-8 gap-y-8">
              <Image
                src="/planning1.png"
                alt="SEO Image"
                width={40}
                height={40}
                className=" m-auto"
              />
              <h2 className="text-[#416BFF]">Animation sur-mesure : </h2>
              <p className="md:h-2/3 text-base">
                Les éléments visuels, graphiques et textuels sont essentiels à
                la mise à jour d’un site web. Cependant, l’animation est
                nécessaire pour lui donner la vitalité et du dynamisme !   
                Notre équipe a la capacité de créer des animations uniques sur
                mesure qui permettent d’illustrer un concept, un processus ou un
                produit technique{" "}
              </p>
            </section>
          </div>
          <div
            className="CardRefernc border-2 border-transparent rounded-[30px] w-[275px] h-[352px] 
             hover:bg-slate-200 hover:text-2xl hover:text-black   "
          >
            <section className="text-center flex flex-col justify-center  my-8 gap-y-8">
              <Image
                src="/planning1.png"
                alt="SEO Image"
                width={40}
                height={40}
                className=" m-auto"
              />
              <h2 className="text-[#416BFF]">Responsive :  </h2>
              <p className="md:h-2/3 text-base">
                L’interface et le design de votre site web sont optimisés pour
                les appareils mobiles par notre équipe de spécialistes en
                conception et développement web.  {" "}
              </p>
            </section>
          </div>
        </div>
      </div>

      <section className="container mx-auto space-y-6 bg-[#EFEFEF] py-10 text-black">
        <div className="flex gap-x-4 justify-between flex-col md:flex-row items-center">
          <Image src="/path" alt="image1" width={400} height={400} />

          <div className="flex justify-center md:justify-between flex-col gap-y-10 items-start w-3/4">
            <h1 className="underline text-2xl text-center  capitalize">
              Développement d’application mobile sur-mesure : 
            </h1>
            <p className="font-bold text-base text-primary/80 text-center md:text-start">
              Notre équipe est à votre côtés depuis le début du processus de
              conseil jusqu’à la réalisation de votre application.   Nous
              mettons à profit notre expertise technologique pour développer des
              applications mobiles et des expériences utilisateur
              exceptionnelles, en vous orientant vers le choix technologique le
              plus approprié pour votre projet : que ce soit des applications
              hybrides ou natives, nous vous accompagnons vers la meilleure
              solution. 
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
            contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
}
