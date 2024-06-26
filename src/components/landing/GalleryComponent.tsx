import { Galery } from "@/constants";
import Image from "next/image";
import { Button } from "../ui/button";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GalleryComponent = () => {
  return (
    <div>
      <h2 className="bg-black/90 my-4 text-white md:font-bold uppercase py-2 text-center text-sm md:text-xl shadow-2xl">
        agence conseil en communication
      </h2>
      <div className="relative flex justify-center gap-3 bg-black px-10 my-5 flex-wrap overflow-hidden">
        <div className="lg:block hidden absolute z-[99999] -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[150px] bg-white rounded-[50%]" />
        <div className="absolute z-[99999] -bottom-24 left-1/2 -translate-x-1/2 w-[650px] h-[150px] bg-white lg:block hidden rounded-[50%]" />
        <div className="flex gap-10 flex-nowrap">
          {Galery.map((item, i) => (
            <Image
              loading="lazy"
              key={i}
              src={item.image}
              alt={item.label}
              width={200}
              height={200}
              className="object-center"
            />
          ))}
        </div>
      </div>
      <div className="py-20 md:p-6 bg-black text-white panel">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <p className="ms-6">
              Agence conseil en communication qui conjugue differents
              savoir-fair en matiere de strategie digitale, de direction
              artistique, d'UX design et d'UI design, de referencement naturel
              et payant, de social media management, de copywriting, de contenu
              UGC, de personal branding, de consulting et d'accompagnement
            </p>
            <br />
            <p className="ms-16">
              Nous assistons nos clients dans tous les secteurs d'activite pour
              leurs campagnes publicitaires, leurs strategies de marque et
              d'image, leurs compagnes de communication digitales et social
              media, brand content et lancement produit...
            </p>
          </div>
          <div className="mx-auto">
            <Image
              src="https://i.ibb.co/r5XKpVs/e-com-mobile.png"
              alt="e-commerce-mobile-phone"
              style={{
                width: "auto",
                height: "auto",
              }}
              width={200}
              height={200}
              loading="lazy"
            />
          </div>
        </div>
        <Button variant="outline" className="block text-black mx-auto mt-8">
          Decourvrir
        </Button>
      </div>
    </div>
  );
};

export default GalleryComponent;
