import React from "react";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { FaTiktok } from "react-icons/fa";
import { TfiPinterest } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import Link from "next/link";

export default function Ads() {
  return (
    <div>
      <div className='h-[100vh]  bg-gray-500'></div>
      <div className="h-[100vh]  bg-[url('/Group.png')]  bg-cover bg-center  ">
        <h1 className=' md:text-3xl py-16 text-2xl uppercase text-black md:w-2/3 underline  font-mono   text-center font-bold'>
          Vous bénéficiez de l’assistance de deux membres dévoués de l’équipe
          lorsque vous nous confiez le contrôle de vos campagnes de publicité
          sur les médias sociaux 
        </h1>
      </div>
      <div className='bg-black py-16 '>
        <div className='flex flex-col md:flex-row justify-between  md:gap-x-20 text-3xl'>
          <div className='mb-6 md:mb-0'>
            <h1 className='text-white text-center md:text-left w-full'>
              <span className='text-[#00CCF5]'>L’account Manager : </span> Plus
              qu’une simple aide à la résolution des problèmes liés aux
              campagnes de Social Ads, l’Account Manager est le véritable
              partenaire stratégique de votre entreprise. Elle vous conseille
              sur la stratégie générale d’acquisition et gère le bon déroulement
              de vos campagnes.
            </h1>
          </div>
          <div>
            <h1 className='text-white text-center md:text-left w-full'>
              <span className='text-[#00CCF5]'>L’account Manager : </span> Plus
              qu’une simple aide à la résolution des problèmes liés aux
              campagnes de Social Ads, l’Account Manager est le véritable
              partenaire stratégique de votre entreprise. Elle vous conseille
              sur la stratégie générale d’acquisition et gère le bon déroulement
              de vos campagnes.
            </h1>
          </div>
        </div>
        <div className='container flex justify-center items-center gap-y-1'>
          <a
            href=''
            className={buttonVariants({
              variant: "default",
              size: "icon",
              className:
                "px-36 rounded-full py-6 mt-20 text-lg bg-gray-500 text-black",
            })}>
            GET IN TOUCH
          </a>
        </div>
      </div>
      <div className="h-[110vh] bg-[url('/Cover.png')] bg-center  bg-cover py-10">
        <h1 className=' text-4xl uppercase text-white md:w-2/4 m-4 md:text-start text-center font-bold'>
          Les réseaux sociaux maitrisées par notre agence
        </h1>
      </div>
      <div className="h-[90vh] bg-[url('/Meta.png')] bg-center bg-cover ">
        <div className='flex flex-col justify-center  items-end h-[100vh]'>
          <h1 className='text-black  underline text-2xl uppercase text-center md:w-2/3 font-bold'>
            Nous vous assistons dans la planification et la gestion des
            campagnes sur toutes les plateformes Meta, notamment Facebook,
            Instagram et whatsApp.
          </h1>
        </div>
      </div>
      <div className='bg-black  h-[80vh]'>
        <div className=' p-10 md:flex md:justify-between items-center '>
          <div className='flex justify-center items-center text-white text-3xl font-bold'>
            <FaTiktok className='text-white text-[6rem]' />
            <h1>TikTok</h1>
          </div>
          <div className=' flex justify-center mt-3'>
            <Image
              src='/icons.png'
              alt='icons Ads'
              width={200}
              height={200}
              loading='lazy'
            />
          </div>
        </div>
        <h1 className='text-white  underline text-xl md:text-2xl uppercase text-center m-auto md:w-2/3 font-bold'>
          Pour capter votre public cible, nous combinons notre compétence
          établie sur TikTok avec une expertise créative de premier ordre. Grâce
          à notre studio UGC, nous produisons des contenus viraux sur TikTok qui
          augmenteront considérablement vos ventes.
        </h1>
      </div>
      <div className='bg-white h-[80vh] p-10'>
        <div className='flex items-center text-black text-3xl font-bold'>
          <TfiPinterest className=' text-[6rem]' />
          <h1>PINTREST</h1>
        </div>
        <h1 className='text-black  underline text-xl md:text-2xl uppercase text-center m-auto md:w-2/3 font-bold'>
          Pour capter votre public cible, nous combinons notre compétence
          établie sur TikTok avec une expertise créative de premier ordre. Grâce
          à notre studio UGC, nous produisons des contenus viraux sur TikTok qui
          augmenteront considérablement vos ventes.
        </h1>
      </div>
      <div className='bg-black h-[80vh] p-10'>
        <div className='flex items-center text-white text-3xl font-bold'>
          <FaLinkedinIn className=' text-[6rem]' />
          <h1>Linkedin</h1>
        </div>
        <h1 className='text-white  underline text-xl md:text-2xl uppercase text-center m-auto md:w-2/3 font-bold'>
          Pour capter votre public cible, nous combinons notre compétence
          établie sur TikTok avec une expertise créative de premier ordre. Grâce
          à notre studio UGC, nous produisons des contenus viraux sur TikTok qui
          augmenteront considérablement vos ventes.
        </h1>
      </div>
      <div className='bg-white h-[80vh] p-10'>
        <div className='flex items-center text-black text-3xl font-bold'>
          <FaXTwitter className=' text-[6rem]' />
          <h1>Twitter</h1>
        </div>
        <h1 className='text-black  underline text-xl md:text-2xl uppercase text-center m-auto md:w-2/3 font-bold'>
          Pour capter votre public cible, nous combinons notre compétence
          établie sur TikTok avec une expertise créative de premier ordre. Grâce
          à notre studio UGC, nous produisons des contenus viraux sur TikTok qui
          augmenteront considérablement vos ventes.
        </h1>
      </div>
      <div className='bg-black h-[100vh] p-10  '>
        <div className='flex items-center text-white text-3xl font-bold md:py-0 py-5'>
          <FaSnapchatGhost className=' text-[6rem]' />
          <h1>Snapchat</h1>
        </div>
        <h1 className='text-white  underline text-xl md:text-2xl uppercase text-center m-auto md:w-2/3 font-bold'>
          Nos experts de publicité sont là pour s’assurer que vous recevez le
          meilleur retour sur investissement si vous ciblez un public plus jeune
          et intéressé. Faites nous confiance pour rendre vos campagnes aussi
          efficaces que possible. <br /> <br /> Si vous manquez de ressources en
          interne pour la création de visuels publicitaires, laissez Media
          Capital s'occuper de tout pour vous.
        </h1>
      </div>
      <div className=''>
        <h1 className='text-black  font-mono font-bold text-3xl text-center py-2  '>
          Ce que notre agence de conseil en communication <br /> peut vous
          offrir{" "}
        </h1>
        <div className='bg-black grid lg:grid-cols-2 sm:grid-cols-1 w-full mt-14'>
          <div className='md:w-full md:h-[730px] bg-black text-center py-7 mx-auto'>
            <h1 className='text-gray-400 text-5xl font-bold text-center'>
              Variation des annonces
            </h1>
            <h1 className='text-white md:text-2xl text-lg underline mt-36 md:mx-14 mx-6 leading-[50px]'>
              Nous utilisons différents types d’annonces, tels que des
              carrousels, des photos uniques et des vidéos. Notre objectif est
              de tester plusieurs approches et de voir lesquelles suscitent le
              plus d’intérêt et d’attention de la part de votre public cible.
            </h1>
          </div>
          <div className='md:w-full w-full md:h-[730px] bg-white text-center py-7 mx-auto'>
            <h1 className='text-black md:text-4xl text-3xl mx-6 font-bold'>
              Annonces dynamiques (e-commerce)
            </h1>
            <h1 className='text-black md:text-2xl text-xl underline mt-24 md:mx-14 mx-6 leading-[40px]'>
              Nous sommes en mesure de télécharger votre catalogue directement
              sur les plateformes publicitaires si votre entreprise est active
              dans le secteur de l’e-commerce. Cela nous permet de présenter
              dynamiquement vos produits à un public ciblé. Lorsqu’il voit les
              produits qui répondent le mieux à ses besoins, votre marché cible
              est plus susceptible d’effectuer un achat.
            </h1>
          </div>
          <div className='md:w-full w-full md:h-[730px] md:bg-white bg-black md:text-black text-white text-center py-7 mx-auto'>
            <h1 className='text-5xl'>Placements publicitaires</h1>
            <h1 className='md:text-2xl text-xl underline mt-24 md:mx-24 mx-6 leading-[50px]'>
              Vos publicités peuvent apparaître à différents endroits sur les
              réseaux sociaux. Nous plaçons vos publicités là où elles ont le
              plus de chances d’aboutir à des conversions en utilisant les
              techniques les plus efficaces.
            </h1>
          </div>
          <div className='md:w-full md:h-[730px] md:bg-black bg-white text-center py-7 mx-auto'>
            <h1 className='text-gray-400 text-5xl font-bold text-center'>
              Variation des annonces
            </h1>
            <h1 className='md:text-white md:text-2xl text-lg underline mt-36 md:mx-14 mx-6 leading-[50px]'>
              Nous utilisons différents types d’annonces, tels que des
              carrousels, des photos uniques et des vidéos. Notre objectif est
              de tester plusieurs approches et de voir lesquelles suscitent le
              plus d’intérêt et d’attention de la part de votre public cible.
            </h1>
          </div>
        </div>

        <div className=' md:h-[90vh] h-[60vh] bg-white flex justify-between md:mt-[-6rem]  '>
          <div className=''>
            <Image
              src='/VectorLeft.png'
              alt='Social Ads'
              width={500}
              height={300}
              loading='lazy'
              className=''
            />
          </div>
          <Link
            href=''
            className={buttonVariants({
              variant: "default",
              size: "icon",
              className:
                "px-36 rounded-full py-6 md:mt-[22rem] mt-[10rem] text-lg bg-gray-500 text-black",
            })}>
            GET IN TOUCH
          </Link>
          <div className=''>
            <Image
              src='/VectorRight.png'
              alt='Social Ads'
              width={500}
              height={200}
              loading='lazy'
              className=' '
            />
          </div>
        </div>
      </div>
    </div>
  );
}
