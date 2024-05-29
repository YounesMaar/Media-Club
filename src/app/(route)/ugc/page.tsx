import React from "react";
import Image from "next/image";
import { MdEmojiObjects } from "react-icons/md";
import Select from "./Components/select"
import Link from "next/link"

function urc() {
  return (
    <div>
      <div className=' bg-slate-300 h-[100vh]'>
      
        
      </div>
      <div className=' container  '>
        <div className='ShadowBox container bg-black mx-auto space-y-6  text-white py-10 '>
          <div className='grid md:grid-cols-2 grid-cols-1 place-items-center md:gap-x-32'>
            <div>
              <h1 className='underline text-2xl uppercase text-center '>
                Boostez Votre Marque avec Media Capital
              </h1>
              <p className='text-base md:w-2/2 my-2 text-center '>
                Media Capital  est une agence de conseil en communication
                offrant souhaitant distribuer du contenu généré par les
                utilisateurs (UGC) sur diverses plateformes de le faire avec
                talent et authenticité. <br /> <br />   Le contenu généré par
                les utilisateurs (UGC) consiste en des contenus originaux créés
                par les utilisateurs eux-mêmes, qu'il s'agisse de photos
                Instagram, de campagnes vidéos, de témoignages ou même de
                podcasts, dans le but exclusif de promouvoir votre marque. {" "}
                <br /> <br />  Nous collaborons avec des marques et des
                influenceurs qui nous accordent leur confiance. Nos services
                s'adressent à toutes les entreprises et marques présentes en
                ligne et désireuses d'accroître leur visibilité.    
              </p>
            </div>
            <div className=''>
           <img src="https://i.ibb.co/gz29j18/Rectangle-6.png" alt="Rectangle-6"/>
            </div>
          </div>
        </div>
      </div>
      <div className=' container  h-[100vh] bg-white mt-10'>
        <div className='container  ShadowBox md:py-20 py-5 border-2 border-black grid md:grid-cols-2 grid-cols-1 items-center'>
          <section className=' '>
        <img src="https://i.ibb.co/Lp9pmGb/Rectangle-6-1.png" alt="Rectangle-6-1"/>
          </section>
          <section className=''>
            <h1 className='underline  uppercase  w-2/3  font-mono md:text-2xl font-bold mx-auto '>
              Quelle approche adopter pour une stratégie de User Generated
              Content (UGC) ? 
            </h1>
            <p className='w-2/3 md:mt-10 mt-2 mx-auto'>
              Une stratégie UGC nécessite une planification, une gestion et une
              optimisation minutieuse , ainsi qu’un contenu bien pensé. 
            </p>
          </section>
        </div>
      </div>
      <div className=' container   mt-24 md:mt-2  '>
        <div className='container ShadowBox  py-10   border-2 border-black'>
          <h1 className='underline  uppercase   font-mono md:text-3xl font-bold'>
            Avant de mettre en place une stratégie efficace d’utilisation du
            contenu généré par les utilisateurs, il est essentiel de :
          </h1>
          <div className='flex justify-center  flex-wrap items-center mt-10 gap-y-4'>
            <section className='container  border-2 border-black  w-72 '>
              <div className='bg-[#F0FF46] p-2 inline-block mt-2'>
                <MdEmojiObjects className=' text-3xl ' />
              </div>
              <div>
                <h1 className='underline w-2/3  uppercase font-mono font-bold'>
                  Écouter votre communauté :
                </h1>
                <p className='py-5 text-[13px]'>
                  Étant donné que le contenu est créé par vos utilisateurs, il
                  est important de prêter attention à ce qu’ils ont à dire afin
                  d’éclairer votre stratégie. Tenez  compte à la fois des
                  retours positifs et des critiques constructives. N'oubliez
                  jamais que l’implication des utilisateurs joue un rôle majeur
                  dans la réputation de votre marque. 
                </p>
              </div>
            </section>
            <section className='container  border-2 border-black  w-72 '>
              <div className='bg-[#F0FF46] p-2 inline-block mt-2'>
                <MdEmojiObjects className=' text-3xl ' />
              </div>
              <div>
                <h1 className='underline   uppercase font-mono font-bold'>
                  Définir des objectifs prioritaires:
                </h1>
                <p className='py-10 text-[13px]'>
                  Il est difficile de produire des résultats significatifs en
                  l'absence d'objectifs définis. En fonction des besoins
                  particuliers de votre entreprise, vous devrez choisir entre
                  des objectifs d'engagement, de conversion ou de
                  sensibilisation. 
                </p>
              </div>
            </section>
            <section className='container  border-2 border-black  w-72 '>
              <div className='bg-[#F0FF46] p-2 inline-block mt-2'>
                <MdEmojiObjects className=' text-3xl ' />
              </div>
              <div>
                <h1 className='underline w-2/3  uppercase font-mono font-bold'>
                  Adopter une approche à 360 degrés:
                </h1>
                <p className='py-5 text-[13px]'>
                  Réfléchissez à la manière dont vous comptez utiliser les
                  contenus générés par vos utilisateurs. Il est judicieux de les
                  réutiliser dans différents contextes. L'UGC fonctionne bien
                  sur les réseaux sociaux, mais peut également être intégré dans
                  des supports imprimés ou des boutiques physiques.  
                </p>
              </div>
            </section>
          </div>
          <div className=' flex justify-center items-center mt-6'>
            <Link href='#'>
              <button className="relative border-2 border-gray-800 bg-transparent py-2 px-10 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#F0FF46] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100">
                Faire appel à Media <br /> Capital
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='md:h-[100vh]'>
        <Select />
      </div>
      <div className='container md:h-[100vh]  py-10  '>
        <div className='border-2 border-black md:py-16 px-5'>
          <h1 className='underline text-2xl uppercase font-mono font-bold md:w-2/3'>
            Notre objectif est de vous apporter le meilleur soutien possible.
          </h1>
          <div className='flex justify-between items-center flex-wrap'>
            <div className='md:w-2/4'>
              <p>
                Que vous ayez besoin d'une élaboration de stratégie UGC, d'un
                accompagnement complet ou simplement de la mise en place d'une
                ou plusieurs campagnes d'activation d'UGC.
              </p>
            </div>
            <div className='flex justify-center gap-x-8 py-10'>
              <Link href='#'>
                <button className="relative border-2 border-gray-800 bg-transparent px-4 py-2 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
                  Je veux une stratégie UGC
                </button>
              </Link>
              <Link href='#'>
                <button className='border-2 border-black px-4 py-2 bg-black text-white'>
                  En savoir plus
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default urc;
