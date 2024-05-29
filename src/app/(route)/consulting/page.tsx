import Image from "next/image";
import React from "react";

const Consulting = () => {
  return (
    <div>
      <div
        className="text-white h-[100vh] bg-conver bg-center"
        style={{ backgroundImage: "url('/consulting/hero.jpg')" }}
      >
        <div className="flex flex-col gap-y-10 justify-center items-center w-3/4 h-full  mx-auto">
          <h1 className="text-7xl text-center">Consulting et Accompagnement</h1>
          <p className="text-center">
            Propulsez votre présence en ligne avec une stratégie Marketing sur
            mesure et un accompagnement exclusif : 
          </p>
        </div>
      </div>
      <div className="container flex justify-center flex-col gap-y-10 items-center py-10">
        <h1 className="underline md:text-2xl text-xl uppercase text-center md:w-2/4">
          Comment se déroule notre accompagnement ? 
        </h1>
        <p className="text-base md:w-2/3 md:text-start text-center ">
          Nous accompagnons les entrepreneurs, les dirigeants de petites et
          moyennes entreprises ainsi que les startups dans l'élaboration d'une
          stratégie digitale adaptée à leurs besoins spécifiques. Nous procédons
          à des audits approfondis pour identifier les canaux de communication
          numérique les plus pertinents, afin d'accroître leur visibilité et
          d'optimiser le positionnement de leur marque en ligne.  
        </p>
      </div>
      <div className="container flex justify-between flex-col md:flex-row items-center py-10">
        <div className="flex justify-center flex-col gap-y-10 items-start w-2/3">
          <h1 className="underline md:text-2xl text-xl  uppercase text-center md:w-3/4">
            Un Accompagnement Stratégique pour une Productivité Accrue :
          </h1>
          <p className="text-base md:w-2/3  md:text-start text-center ">
            À partir de ces diagnostics détaillés, nos experts élaborent un plan
            marketing numérique personnalisé, conçu pour les aider à atteindre
            leurs objectifs. En outre, nous facilitons le suivi et la gestion de
            l'efficacité de leur stratégie digitale en intégrant des solutions
            innovantes au sein de leur entreprise, visant à accroître leur
            productivité. Nos consultants évaluent le retour sur investissement
            des actions de communication en intégrant des outils marketing
            pratiques. Nous développons également des tableaux de bord pour
            leurs équipes afin qu’elles puissent garder un œil sur les
            performances de la stratégie digitale au fur à mesure qu’elle
            évolue.
          </p>
        </div>
        <Image
          src="https://i.ibb.co/Tw5Zyng/figure.jpg"
          alt=" Image"
          className="rounded-xl"
          width={350}
          height={350}
        />
      </div>
      <div className="container flex justify-between flex-col md:flex-row items-center py-10 bg-gray-400">
        <Image
          src="https://i.ibb.co/6RYy28n/figure.jpg"
          alt=" Image"
          className="rounded-xl"
          width={350}
          height={350}
        />
        <div className="flex justify-between flex-col gap-y-10 items-start w-2/3">
          <h1 className="underline md:text-2xl text-xl  uppercase text-center md:w-2/4">
            Des Résultats Tangibles et une Collaboration Efficace :
          </h1>
          <p className="text-base md:w-2/3  md:text-start text-center ">
            Votre entreprise mérite des résultats tangibles et une communication
            digitale efficace. Nos experts se déplacent dans vos locaux ou
            collaborent à distance avec vos équipes pour vous fournir des
            conseils avisés et concrétiser tous vos projets web, marketing et
            digitaux. N'hésitez pas à contacter notre agence dès maintenant pour
            dynamiser votre activité et faire prospérer votre entreprise.
          </p>
        </div>
      </div>
      <div className="container flex justify-between flex-col md:flex-row items-center py-10 bg-black text-white">
        <div className="flex justify-between flex-col gap-y-10 items-start w-2/3">
          <h1 className="underline md:text-2xl text-xl  uppercase text-center md:w-2/4">
            Des ateliers de co-création toute la durée de votre coaching
          </h1>
          <p className="text-base md:w-2/3  md:text-start text-center ">
            Ces ateliers vous permettent de réfléchir avec nos consultants et
            définir des stratégies digitales à mettre en place pour atteindre
            les objectifs fixés.   
          </p>
        </div>
        <Image
          src="https://i.ibb.co/L615TdP/figure.jpg"
          alt=" Image"
          className="rounded-xl"
          width={350}
          height={350}
        />
      </div>
      <div className="container flex justify-between flex-col md:flex-row items-center py-10 bg-black text-white">
        <Image
          src="https://i.ibb.co/6RYy28n/figure.jpg"
          alt=" Image"
          className="rounded-xl"
          width={350}
          height={350}
        />
        <div className="flex justify-between flex-col gap-y-10 items-start w-2/3">
          <h1 className="underline md:text-2xl text-xl  uppercase text-center md:w-2/4">
            Réservez vos séances d’accompagnement:    
          </h1>
          <p className="text-base md:w-2/3  md:text-start text-center ">
            En fonction de vos besoins et de votre disponibilité, nos
            consultants vous fourniront un accompagnement personnalisé.  
          </p>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
