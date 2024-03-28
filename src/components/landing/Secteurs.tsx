import { Secteurs } from "@/constants";
import Image from "next/image";
import { Button } from "../ui/button";

const SecteursPage = () => {
  return (
    <div className="panel bg-black text-white container flex flex-col py-20 gap-y-10 items-center">
      <h1 className="text-xl font-bold uppercase">ambition:</h1>
      <p className="font-bold md:w-1/2">
        Veritable agence de communication globale entouree de profils
        talentuexu! A l'image des besoins des marque dans une variete de
        domaines specialises : conseille stategie, image de marque,
        photographie, montage video...
      </p>
      <h1 className="text-xl font-bold uppercase">nos secteurs:</h1>
      <div className="grid grid-cols-3 gap-2 md:gap-10">
        {Secteurs.map((secteur, i) => (
          <div key={i} className="object-center rounded-2xl">
            <Image
              src={secteur.image}
              alt={secteur.label}
              width={250}
              height={250}
              className="rounded-md object-cover aspect-square grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </div>
      <Button className="uppercase text-black px-10" variant="outline">
        {" "}
        s'avoir plus
      </Button>
    </div>
  );
};

export default SecteursPage;
