import React from "react";
import Image from "next/image";

function copywriting() {
  return (
    <div>
      <div className='h-[100vh] bg-[url(/Rectangle.png)] bg-cover bg-center'>
        <h1 className='text-white font-bold flex justify-center items-center h-[100vh] text-4xl '>
          CopyWriting
        </h1>
      </div>
      <div className='  container mx-auto space-y-6  py-10 bg-white  text-black'>
        <div className='flex  justify-between flex-col md:flex-row items-center'>
          <Image
            src=''
            alt=' Image'
            width={250}
            height={250}
          />
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
        </div>
      </div>
      
    </div>
  );
}

export default copywriting;
