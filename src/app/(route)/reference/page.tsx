import React from "react";
import Image from "next/image";
import StrategieCrad from "./components/StrategieCrad";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className='h-[100vh]'></div>
      <div className='  container mx-auto space-y-6  py-10 bg-[#B0B0B0]  text-black'>
        <div className='flex gap-x-10 justify-center flex-col md:flex-row items-center'>
          <div className='flex justify-center flex-col gap-y-10 items-start w-2/3'>
            <h1 className='underline md:text-2xl text-xl  uppercase text-center md:w-2/4'>
              SEO et SEA : Les Piliers du Marketing en Ligne
            </h1>
            <p className='text-base md:w-2/3  md:text-start text-center '>
              Nous déployons des stratégies sur-mesure pour améliorer votre
              visibilité dans les résultats de moteurs de recherche.  Lorsqu'il
              s'agit d'élever l'impact de votre présence en ligne, un mélange
              harmonieux entre SEO et SEA doit être considéré comme le véritable
              pilier d’une bonne stratégie de marketing en ligne Comme le  yin
              et le yang, ces deux éléments s’associent avec élégance pour
              propulser votre site vers de nouveaux sommets d'excellence
              numérique. 
            </p>
          </div>
          <Image
            src=''
            alt='SEO Image'
            width={250}
            height={250}
          />
        </div>
      </div>
      <div className='container bg-black mx-auto space-y-6  text-white py-20'>
        <div className='grid md:grid-cols-2 grid-cols-1 place-items-center md:gap-x-32 gap-y-8'>
          <div className=''>
            <Image
              src='/Content1.png'
              alt='SEO Image'
              width={300}
              height={300}
            />
          </div>
          <div className='flex justify-center flex-col items-center '>
            <h1 className='underline text-2xl uppercase text-center md:w-2/3'>
              SEO et SEA : Amplifiez Votre Présence en Ligne
            </h1>
            <p className='text-base md:w-2/2 my-2 text-center '>
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
        </div>
        <h1 className='text-center font-Grotesk my-8 underline font-bold text-2xl'>
          Les étapes d’une stratégie SEO :
        </h1>
        <div className='flex flex-col'>
          <StrategieCrad />
        </div>
      </div>
      <div className='container mx-auto space-y-18  py-10 bg-[#B0B0B0]  text-black'>
        <h1 className=' underline text-2xl uppercase text-center font-bold '>
          Le SEA : La stratégie de référencement payant 
        </h1>
        <div className='my-20 flex md:justify-center flex-col md:flex-row  gap-y-20  gap-x-52 items-center '>
          <p className='md:w-1/3 text-bas font-bold font-Grotesk text-center text-xl '>
            Le SEA, ou la publicité sur les moteurs de recherche, offre une
            opportunité unique de référencer rapidement votre site grâce à des
            campagnes publicitaires ciblées. 
            <br />
            <br />   Il fait partie intégrante de votre stratégie marketing,
            vous permettant d'intégrer immédiatement votre site avec des
            mots-clés spécifiques et ainsi promouvoir votre succès incontesté.
          </p>
          <div>
            <Image
              src=''
              alt='Image'
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className='container flex flex-col justify-center items-center '>
          <Link
            href='/contact'
            className={buttonVariants({
              variant: "default",
              size: "icon",
              className: "px-36 rounded-full py-8 mt-5 text-lg bg-black",
            })}>
            voir la stratégie SEA
          </Link>
        </div>
      </div>
      <div className='container md:h-[1098px] bg-black mx-auto space-y-6 py-20   '>
        <h1 className='text-white text-center underline font-bold  font-Grotesk text-2xl'>
          Les étapes d’une bonne stratégie SEA :
        </h1>
        <div className='flex justify-evenly flex-wrap gap-x-20 md:gap-y-10 text-white  '>
          <div
            className='CardRefernc border-2 border-transparent rounded-[30px] w-[275px] h-[352px] 
             hover:bg-slate-200 hover:text-2xl hover:text-black   '>
            <section className='text-center flex flex-col justify-center  my-8 gap-y-8'>
              <Image
                src='/planning1.png'
                alt='SEO Image'
                width={40}
                height={40}
                className=' m-auto'
              />
              <h2 className='text-[#416BFF]'>Découverte des besoins:</h2>
              <p className='md:h-2/3 text-base'>
                Nos experts en SEA effectuent une analyse d'AdWords approfondie,
                en examinant  soigneusement vos objectifs, vos spécifications et
                les attentes de votre public afin d’obtenir une  compréhension
                approfondie de votre projet.
              </p>
            </section>
          </div>
          <div
            className='CardRefernc border-2 border-transparent rounded-[30px] w-[275px] h-[352px] 
             hover:bg-slate-200 hover:text-2xl hover:text-black   '>
            <section className='text-center flex flex-col justify-center  my-8 gap-y-8'>
              <Image
                src='/planning1.png'
                alt='SEO Image'
                width={40}
                height={40}
                className=' m-auto'
              />
              <h2 className='text-[#416BFF]'>Établir un budget:</h2>
              <p className='md:h-2/3 text-base'>
                Nous élaborons élaborons un plan spécifiquement adapté à votre
                limite de dépenses.
              </p>
            </section>
          </div>
          <div
            className='CardRefernc border-2 border-transparent rounded-[30px] w-[275px] h-[352px] 
             hover:bg-slate-200 hover:text-2xl hover:text-black   '>
            <section className='text-center flex flex-col justify-center  my-8 gap-y-8'>
              <Image
                src='/planning1.png'
                alt='SEO Image'
                width={40}
                height={40}
                className=' m-auto'
              />
              <h2 className='text-[#416BFF]'>Création des campagnes:</h2>
              <p className='md:h-2/3 text-base'>
                Nous composons l’annonce, choisissons le lieu, le public cible,
                créons la page d’atterrissage et la liste des mots-clés. 
              </p>
            </section>
          </div>
        </div>
        <div className='flex justify-center flex-wrap gap-x-20 gap-y-16 text-white  '>
          <div
            className='CardRefernc border-2 border-transparent rounded-[30px] w-[275px] h-[352px] 
             hover:bg-slate-200 hover:text-2xl hover:text-black   '>
            <section className='text-center flex flex-col justify-center  my-8 gap-y-6'>
              <Image
                src='/planning1.png'
                alt='SEO Image'
                width={40}
                height={40}
                className=' m-auto'
              />
              <h2 className='text-[#416BFF]'>
                Lancement et suivi des campagnes : 
              </h2>
              <p className='md:h-2/3 text-base'>
                Nos experts analysent en profondeur le succès de chaque
                campagne, en accordons une attention particulière aux
                indicateurs de performance clés, notamment le taux de clics, le
                coût moyen par clic, le taux de conversion et le nombre de
                clics 
              </p>
            </section>
          </div>
          <div
            className='CardRefernc border-2 border-transparent rounded-[30px] w-[275px] h-[352px] 
             hover:bg-slate-200 hover:text-2xl hover:text-black   '>
            <section className='text-center flex flex-col justify-center  my-8 gap-y-8'>
              <Image
                src='/planning1.png'
                alt='SEO Image'
                width={40}
                height={40}
                className=' m-auto'
              />
              <h2 className='text-[#416BFF]'>Optimisation et reporting:</h2>
              <p className='md:h-2/3 text-base'>
                Si besoin, nous apportons des modifications à la campagne afin
                d'en optimiser l'efficacité. 
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
