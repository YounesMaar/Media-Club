import SectionComponent from "@/components/SectionComponent";
import { Button } from "@/components/ui/button";
import { Services } from "@/constants";
import { CircleChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
        backgroundImage="url('/hero2.jpg')"
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
      <div className="border-t-[1px] border-secondary/60 py-6 space-y-10 bg-black text-white container text-2xl">
        <h1 className="text-3xl gs_reveal gs_reveal_fromLeft">Nos Valeur: </h1>

        <div className="flex justify-center gap-x-10 w-full flex-col items-center md:flex-row">
          <Image
            className="gs_reveal gs_reveal_fromLeft"
            src="/valeur/image1.jpg"
            alt="valeur-1"
            width={250}
            height={250}
            loading="lazy"
          />
          <div className="flex justify-evenly gap-y-4 flex-col items-center md:items-start md:w-1/5">
            <h1 className="gs_reveal">Mémorable: </h1>
            <p className="text-center md:text-left gs_reveal text-sm">
              Chez Media CAPITAL , nous nous efforçons de concevoir  des œuvres
              plus mémorables. Nous souhaitons également laisser une impression
              positive à nos clients afin que l’agence soit perçue comme une
              famille où chacun peut s’épanouir et s’exprimer. 
            </p>
            <Link
              href="/contact-us"
              className="text-base gs_reveal flex items-center gap-6"
            >
              <CircleChevronRight size={27} /> Contactez-Nous
            </Link>
          </div>
        </div>
        <div className="flex justify-center gap-x-10 w-full flex-col items-center md:flex-row">
          <div className="flex justify-evenly gap-y-4 flex-col items-center md:items-start md:w-1/5 order-2 md:order-1">
            <h1 className="gs_reveal">Unique : </h1>
            <p className="text-center md:text-left text-sm gs_reveal">
              Chaque création réalisée par l’agence s’efforce d’être unique. Les
              conceptions 100% sur-mesure sont la marque de fabrique de notre
              agence. 
            </p>
            <Link
              href="/contact-us"
              className="text-base flex items-center gap-6 gs_reveal"
            >
              <CircleChevronRight size={27} /> Contactez-Nous
            </Link>
          </div>
          <Image
            className="order-1 gs_reveal gs_reveal_fromRight"
            src="/valeur/image2.jpg"
            alt="valeur-1"
            width={250}
            height={250}
            loading="lazy"
          />
        </div>
        <div className="flex justify-center gap-x-10 w-full flex-col items-center md:flex-row">
          <Image
            className="gs_reveal gs_reveal_fromLeft"
            src="/valeur/image3.jpg"
            alt="valeur-12"
            width={250}
            height={250}
            loading="lazy"
          />
          <div className="flex justify-evenly gap-y-4 flex-col items-center md:items-start md:w-1/5">
            <h1 className="gs_reveal">Esprit d’équipe :</h1>
            <p className="text-center md:text-left gs_reveal text-sm">
              Le succès de notre agence est avant tout une réussite collective.
              Chez Media Capital, toutes les équipes travaillent  étroitement en
              collaboration pour produire les plus belles créations. 
            </p>
            <Link
              href="/contact-us"
              className="text-base gs_reveal flex items-center gap-6"
            >
              <CircleChevronRight size={27} /> Contactez-Nous
            </Link>
          </div>
        </div>
      </div>

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
