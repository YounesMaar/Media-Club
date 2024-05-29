import NosValeur from "@/components/agency/NosValeur";
import SectionComponent from "@/components/SectionComponent";
import { Button } from "@/components/ui/button";
import { Services } from "@/constants";
import Image from "next/image";

const Agency = () => {
  return (
    <div className="">
      <SectionComponent
        title="Media Capital"
        body="l’agence conseil en communication orientée business centric. "
        button
        buttonLabel="Explorez plus!"
        backgroundImage="url('/hero.jpg')"
      />

      <div className="bg-black container mx-auto text-white">
        <div className="border-x-[1px] border-secondary/60 flex flex-col gap-10 items-center py-10">
          <h1 className="text-secondary/60 ">À propos de nous</h1>
          <p className="font-bold w-2/3 text-2xl text-center">
            Notre agence, regroupe tous les métiers à travers des talents
            jeunes, polyvalents et soucieux d’une parfaite satisfaction client. 
          </p>
          <p className="font-bold w-2/3 text-2xl text-center">
            Nous sommes une agence collective pluridisciplinaire basée à Rabat
            et connectée au monde. 
          </p>
        </div>
      </div>
      <SectionComponent
        title="L’objectif de l’agence Media capital ?"
        body="Développer le business des entreprises en exploitant pleinement le potentiel du digital dans une logique d’investissement optimisé pour atteindre des performances immédiates et durables. "
        button
        buttonLabel="Explorez plus!"
        backgroundImage="url('https://i.ibb.co/5rYYjcG/hero2.jpg')"
      />

      <div className="container py-6 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-2 bg-black">
        <div className="rounded-md bg-white flex justify-center items-center flex-col text-black py-5 gap-y-1 md:gap-y-4 w-auto">
          <h1 className="font-bold">Notre Services</h1>
          <p className="w-3/4 text-xs self-start px-6">
            Nous couvrons l’ensemble des métiers du webmarketing avec l’agilité
            et l’expertise d’un pure player :   
          </p>
          <Button size="customized" className="text-xs">
            view all
          </Button>
        </div>
        {Services.map(({ image, label }, i) => (
          <section key={i} className="preloadSection rounded-2xl w-fit">
            <div className="deferredImageContainer">
              <Image
                src={image}
                data-src={image}
                alt={label}
                width={270}
                height={200}
                loading="lazy"
                className="deferredImage rounded-md object-cover aspect-square grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </section>
        ))}
      </div>
      <NosValeur />

      <SectionComponent
        title="Collaboration"
        body="Envoyez-nous votre cahier de charge et nous vous enverrons une proposition détaillée !  
        Si vous n’en disposez pas, contactez-nous et nous vous enverrons une trame de cahier de charge afin de vous poser des questions précises sur votre projet. "
        button
        buttonLabel="Prenez RDV"
        backgroundImage="url('/wallpaper.jpg')"
      />
    </div>
  );
};

export default Agency;
