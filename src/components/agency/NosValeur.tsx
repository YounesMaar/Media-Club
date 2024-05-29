"use client";

import { gsap, ScrollTrigger } from "@/lib/gsap";
import { animateFrom, hide } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { CircleChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NosValeur = () => {
  useGSAP(() => {
    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
      hide(elem); // assure that the element is hidden when scrolled into view

      ScrollTrigger.create({
        trigger: elem as any,
        // markers: true,
        onEnter: function () {
          animateFrom(elem);
        },
        onEnterBack: function () {
          animateFrom(elem, -1);
        },
        onLeave: function () {
          hide(elem);
        }, // assure that the element is hidden when scrolled into view
      });
    });
  });
  return (
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
  );
};

export default NosValeur;
