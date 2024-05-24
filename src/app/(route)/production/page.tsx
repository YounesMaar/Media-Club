import React from "react";
import Image from "next/image";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

function production() {
  return (
    <div>
      <div className='h-[100vh] bg-white'></div>
      <div className='container bg-black mx-auto space-y-6  text-white py-20'>
        <div className='grid md:grid-cols-2 grid-cols-1 place-items-center md:gap-x-32 gap-y-8'>
          <div className='flex justify-center flex-col items-center '>
            <h1 className='underline text-2xl uppercase text-center md:w-2/3'>
              Media Capital : Votre partenaire vidéo, de la création à la
              diffusion.
            </h1>
            <p className='text-base md:w-2/2 my-2 text-center '>
              L'équipe de Media Capital est votre partenaire de confiance pour
              la production et la diffusion de vos vidéos. Nous vous guidons
              avec expertise sur les formats les plus pertinents, y compris le
              Snack Content, les captations live, les tutoriels, les publicités,
              et bien d'autres encore.     Notre objectif est de vous aider à
              toucher efficacement votre audience cible et à l'engager en ligne
              pour atteindre vos objectifs.    Nous sommes à votre écoute,
              mettons notre savoir-faire à votre service et travaillons en
              étroite collaboration avec vous pour concrétiser vos projets avec
              succès. 
            </p>
          </div>
          <div className=''>
            <Image
              src='/Content1.png'
              alt='SEO Image'
              width={300}
              height={300}
              className=' '
            />
          </div>
        </div>
        <h1 className='text-center font-Grotesk my-8 underline font-bold text-2xl'>
          Les étapes de la production de vidéos:
        </h1>
        <div className=''>
          <div className='flex justify-center flex-wrap items-center  gap-y-10   '>
            <div className='collum flex justify-center items-center'>
              <div className='CardRefernc rounded-[30px] w-[275px] h-[352px] hover:bg-slate-200 hover:text-[17px] hover:text-black'>
                <section className='text-center flex flex-col justify-center items-center my-8 gap-y-8'>
                  <h2 className='text-[#416BFF]'>Définition des objectifs:</h2>
                  <p className=' w-2/2 text-center text-[13px]'>
                    Avant d'élaborer le scénario, une question essentielle doit
                    guider tout projet de création vidéo : quelle est la raison
                    d'être de cette vidéo ? S’agit-il d’accroître la visibilité
                    de votre entreprise, d’améliorer sa réputation, d’encourager
                    les ventes, de divertir ou d’éduquer votre public à une
                    nouvelle offre.   En fonction de ces objectifs, nous
                    déterminerons le type de vidéo le plus approprié à créer ! 
                  </p>
                </section>
              </div>
              <div className='flex justify-center ml-3 '>
                <FaArrowRight
                  fontSize={20}
                  className='ArrowRight'
                />
                <FaArrowDown
                  fontSize={20}
                  className=' ArrowDown '
                />
              </div>
            </div>
            <div className='collum flex justify-center items-center'>
              <div className='CardRefernc rounded-[30px] w-[275px] h-[352px] hover:bg-slate-200 hover:text-2xl hover:text-black'>
                <section className='text-center flex flex-col justify-center items-center my-8 gap-y-8'>
                  <h2 className='text-[#416BFF]'>Choix des personas:  </h2>
                  <p className='md:w-2/2 text-[13px]'>
                    Afin qu'une vidéo soit considérée comme pertinente par les
                    internautes, il est crucial qu'elle s'adresse à la bonne
                    audience ! Avant que vous commenciez la création de votre
                    vidéo, notre équipe vous aidera à élaborer de vos
                    personas.  L'objectif ? Acquérir une compréhension
                    approfondie de votre cible y compris ses habitudes
                    quotidiennes, ses passions, ses motivations, ses besoins et
                    ses préoccupations !   
                  </p>
                </section>
              </div>
              <div className='flex justify-center '>
                <FaArrowRight fontSize={20} className='ArrowRight' />
                <FaArrowDown fontSize={20} className=' ArrowDown '
                />
              </div>
            </div>
            <div className='collum flex justify-center items-center'>
              <div className='CardRefernc rounded-[30px] w-[275px] h-[352px] hover:bg-slate-200 hover:text-2xl hover:text-black'>
                <section className='text-center flex flex-col justify-center items-center my-8 gap-y-8'>
                  <h2 className='text-[#416BFF]'>Scénario:  </h2>
                  <p className='md:w-2/2 text-[13px]'>
                    Pour captiver les spectateurs, le choix du scénario est
                    crucial ! Notre équipe de stratèges-concepteurs rédigera
                    pour vous un scénario qui rendra votre vidéo d'entreprise à
                    la fois percutante et pertinente. L'objectif ? Transmettre
                    avec succès votre message, susciter des émotions, divertir,
                    éduquer, inciter à l'action, et surtout, générer une
                    réaction positive ! 
                  </p>
                </section>
              </div>
              <div className='flex justify-center '>
                <FaArrowRight fontSize={20} className='ArrowRight'/>
                <FaArrowDown fontSize={20} className=' ArrowDown'  />
              </div>
            </div>
           
              <div className='CardRefernc rounded-[30px] w-[275px] h-[352px] hover:bg-slate-200 hover:text-xl hover:text-black'>
                <section className='text-center flex flex-col justify-center items-center my-8 gap-y-6'>
                  <h2 className='text-[#416BFF]'>Script :  </h2>
                  <p className='md:w-2/2 text-[13px]'>
                    L'improvisation n'a pas sa place dans les vidéos ! Chaque
                    mot prononcé doit être soigneusement sélectionné et préparé
                    à l'avance pour garantir la crédibilité. Le script joue un
                    rôle crucial en travaillant sur le contenu de la vidéo et en
                    structurant le discours.   Il garantit la fluidité des idées
                    et contribue à la création d’une histoire .  C'est un
                    élément indispensable pour maintenir l'intérêt du spectateur
                    tout au long de la vidéo !.
                  </p>
                </section>
     
            </div>
          </div>

          {/* ROW 2 */}

          <div className='flex justify-center flex-wrap  gap-y-10  '>
            <div className='collum flex justify-center items-center'>
              <div className='CardRefernc rounded-[30px] w-[275px] h-[352px] hover:bg-slate-200 hover:text-2xl hover:text-black'>
                <section className='text-center flex flex-col justify-center  my-8 gap-y-8'>
                  <h2 className='text-[#416BFF]'>Préparation du tournage :</h2>
                  <p className='md:h-2/3 text-[13px]'>
                    Une préparation minutieuse est essentielle pour tirer le
                    meilleur parti d’un tournage. Notre équipe prend en charge
                    tous les aspects, de A à Z : réservation des lieux,
                    coordination des acteurs, préparation du matériel et des
                    décors.   Pour que le tournage se déroule bien, rien n’est
                    laissé au hasard. 
                  </p>
                </section>
              </div>
              <div className='flex justify-center '>
                <FaArrowRight
                  fontSize={20}
                  className='ArrowRight'
                />
                <FaArrowDown
                  fontSize={20}
                  className=' ArrowDown '
                />
              </div>
            </div>
            <div className='collum flex justify-center items-center'>
              <div className='CardRefernc rounded-[30px] w-[275px]  md:h-[352px] hover:bg-slate-200 hover:text-[16px] hover:text-black'>
                <section className='text-center flex flex-col justify-center my-8  gap-y-8'>
                  <h2 className='text-[#416BFF]'>Tournage :  </h2>
                  <p className=' text-[13px]'>
                    La phase de tournage est cruciale pour garantir le
                    professionnalisme de ta vidéo. Chaque détail compte : du
                    choix du matériel , de l’exposition, des angles de prise de
                    vues ou des photos.   Chaque détail est soigneusement étudié
                    afin de s’assurer que les messages et les valeurs que vous
                    souhaitez mettre en avant sont bien transmis.  Notre équipe
                    s'engage à tout mettre en œuvre pour garantir un rendu
                    irréprochable, car rien n'est laissé au hasard dans la quête
                    de qualité.
                  </p>
                </section>
              </div>
              <div className='flex justify-center '>
                <FaArrowRight
                  fontSize={20}
                  className='ArrowRight'
                />
                <FaArrowDown
                  fontSize={20}
                  className=' ArrowDown '
                />
              </div>
            </div>
            <div className='collum flex justify-center items-center'>
              <div className='CardRefernc rounded-[30px] w-[275px]  md:h-[352px] hover:bg-slate-200 hover:text-xl hover:text-black'>
                <section className='text-center flex flex-col justify-center items-center my-8   gap-y-8'>
                  <h2 className='text-[#416BFF]'>Montage:  </h2>
                  <p className='md:w-58 text-[13px]'>
                    Durant cette phase, les séquences filmées sont découpées et
                    assemblées pour former un film cohérent. Pour atteindre
                    l'effet désiré, il est possible d'incorporer des photos, des
                    titres, de la musique, des effets sonores ou encore des voix
                    off.   Pour ajouter plus d’atmosphère à la vidéo, notre
                    équipe retouche l’étalonnage et la colorimétrie. Cette étape
                    a pour objectif de modifier la luminosité et le contraste
                    afin de retranscrire fidèlement le ton du scénario.   
                  </p>
                </section>
              </div>
              <div className='flex justify-center '>
                <FaArrowRight
                  fontSize={20}
                  className='ArrowRight'
                />
                <FaArrowDown
                  fontSize={20}
                  className=' ArrowDown '
                />
              </div>
            </div>
            <div className='collum flex justify-center items-center '>
              <div className='CardRefernc rounded-[30px] w-[275px] h-[352px] hover:bg-slate-200 hover:text-2xl hover:text-black'>
                <section className='text-center flex flex-col justify-center my-8 gap-y-8'>
                  <h2 className='text-[#416BFF]'>Musique :  </h2>
                  <p className=' text-[13px]'>
                    Lorsqu’il s’agit d’exprimer des émotions, le choix de la
                    musique est crucial.   En suscitant une sensation de plaisir
                    et en créant un lien émotionnel, elle renforce
                    l'engagement.   En outre, une musique appropriée favorise la
                    mémorisation des messages importants par le public. 
                  </p>
                </section>
              </div>
              <div className='flex justify-center '>
                <FaArrowRight
                  fontSize={20}
                  className='ArrowRight'
                />
                <FaArrowDown
                  fontSize={20}
                  className=' ArrowDown '
                />
              </div>
            </div>
          </div>
          <div className='flex justify-center flex-wrap  gap-y-10 gap-x-16  '>
            <div className='collum flex justify-center items-center'>
              <div className='CardRefernc rounded-[30px] w-[275px] h-[352px] hover:bg-slate-200 hover:text-2xl hover:text-black'>
                <section className='text-center flex flex-col justify-center my-8 gap-y-8'>
                  <h2 className='text-[#416BFF]'>Ajout des sous-titres :  </h2>
                  <p className='md:h-2/3 text-[13px]'>
                    Inclure des sous-titres dans vos vidéos est un élément
                    stratégique essentiel à l’ère des réseaux sociaux. Cela
                    répond avant tout à une nécessité d'accessibilité. De plus,
                    le texte la transcrit améliorera l'indexation de vos vidéos,
                    ce qui les rendra plus facile à découvrir et accessibles à
                    un public plus large. 
                  </p>
                </section>
              </div>
              <div className='flex justify-center '>
                <FaArrowRight
                  fontSize={20}
                  className='ArrowRight md:ml-8'
                />
                <FaArrowDown
                  fontSize={20}
                  className=' ArrowDown '
                />
              </div>
            </div>
            <div className='collum flex justify-center items-center'>
              <div className='CardRefernc rounded-[30px] w-[275px] h-[352px] hover:bg-slate-200 hover:text-2xl hover:text-black'>
                <section className='text-center flex flex-col justify-center my-8 gap-y-8'>
                  <h2 className='text-[#416BFF]'>Diffusion :  </h2>
                  <p className='md:h-2/3 text-base'>
                    Notre équipe est là pour vous aider à sélectionner les
                    meilleurs canaux de distribution, que ce soit sur Facebook,
                    Youtube, Instagram, Snapchat, LinkedIn ou la télévision.
                    Nous assurons la meilleure circulation possible de votre
                    matériel car nous savons quel canal fonctionne le mieux pour
                    certains types de vidéos et d'attentes. 
                  </p>
                </section>
              </div>
              <div className='flex justify-center '>
                <FaArrowRight
                  fontSize={20}
                  className='ArrowRight md:ml-8'
                />
                <FaArrowDown
                  fontSize={20}
                  className=' ArrowDown '
                />
              </div>
            </div>
            <div className='CardRefernc rounded-[30px] w-[275px] h-[352px] hover:bg-slate-200 hover:text-2xl hover:text-black'>
              <section className='text-center flex flex-col justify-center my-8 gap-y-8'>
                <h2 className='text-[#416BFF]'>Storyboard:</h2>
                <p className='md:h-2/3 text-base'>
                  Le storyboard est indispensable pour obtenir une vision claire
                  du résultat final et assurer une continuité narrative du début
                  à la fin du projet. Il permet d’établir le tempo de la vidéo,
                  son organisation et les transitions fluides entre les scènes. 
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default production;
