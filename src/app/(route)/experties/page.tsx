import Marquee from "@/components/Marque/Marque";
import { Button, buttonVariants } from "@/components/ui/button";
import { experties_services } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import CountupSection from "./components/CountupSection";
import { Badge } from "@/components/ui/badge";

function Expertises() {
  return (
    <div className="experties pt-20">
      <div className="flex gap-0 py-2 flex-col text-center md:flex-row items-center justify-evenly text-black">
        <CountupSection />
        <p className="font-bold text-sm w-2/3 md:w-1/3">
          Nos partenaires à travers le monde nous ont choisis comme la solution
          de confiance pour résoudre tous les problèmes auxquels ils sont
          confrontés dans les industries.
        </p>
      </div>
      <div className="bg-black">
        <Marquee />
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-28 py-10 md:justify-evenly">
            <Image
              src="/experties/experties.svg"
              alt="experties"
              width={500}
              height={500}
              loading="lazy"
            />
            <div className="flex flex-col gap-y-4 text-white items-start">
              <h1 className="text-3xl font-bold">Pourquoi nous?</h1>
              <p className="text-sm text-secondary/50">
                Nous sommes le choix idéal pour plusieurs raisons. Tout d'abord,
                notre engagement envers l'excellence nous pousse à fournir des
                solutions de haute qualité,450 450 adaptées à vos besoins
                spécifiques. De plus, notre équipe expérimentée et hautement
                qualifiée est toujours prête à relever les défis et à trouver
                des solutions innovantes pour résoudre les problèmes les plus
                complexes. En outre, nous mettons un fort accent sur le service
                à la clientèle, garantissant une expérience fluide et
                satisfaisante à chaque étape de notre collaboration. Enfin,
                notre historique éprouvé de succès et de satisfaction client
                témoigne de notre capacité à fournir des résultats tangibles et
                durables. En choisissant notre service, vous faites le choix de
                la fiabilité, de l'expertise et de l'engagement envers votre
                succès.
              </p>
              <Button
                variant="outline"
                size="customized"
                className="bg-transparent rounded-full"
              >
                Let’s connect{" "}
              </Button>
            </div>
          </div>

          <div className="text-center py-10 space-y-4 font-grotesk text-white">
            <h1 className="font-base text-2xl">NOS SERVICES</h1>
            <p className="text-secondary/50 text-sm">
              Une gamme de 14 services répondant à tous vos besoins
              professionnels
            </p>
          </div>
        </div>
        <div
          className="py-10 container mx-auto font-grotesk grid grid-cols-2 md:grid-cols-4 gap-10 flex-wrap bg-cover bg-center"
          style={{
            backgroundImage: 'url("/experties/wallpaper.png")',
          }}
        >
          {experties_services.map(({ Icon, body, href }, i) => (
            <div
              key={i}
              className="border-[1px] border-secondary p-4 h-[300px] flex flex-col gap-10 text-white items-start justify-between"
            >
              <div className="space-y-8">
                <Icon size={40} className="font-light text-secondary/50" />
                <h1 className="text-center text-xl">{body}</h1>
              </div>
              <Link
                href={href}
                className={buttonVariants({
                  size: "customized",
                  variant: "outline",
                  className: "rounded-full bg-transparent self-center",
                })}
              >
                Découvrir
              </Link>
            </div>
          ))}
        </div>
        <div className="container py-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-white bg-[#131010]">
          <div className="flex flex-col gap-10 items-center md:items-start">
            <h1 className="text-2xl font-bold font-quicksand text-center md:text-left">
              Quelques morceaux de notre travail
            </h1>
            <Link
              href=""
              className={buttonVariants({
                className: "rounded-full bg-transparent md:self-start",
                variant: "outline",
                size: "customized",
              })}
            >
              Voir Plus
            </Link>
            <Image
              src="/experties/statics.png"
              alt="statics"
              width={300}
              height={300}
              loading="lazy"
              className="self"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="border-[1px] border-secondary/60 p-4 flex flex-col gap-2 rounded-md">
              <Badge
                className="self-start bg-blue-200/80 rounded-md"
                variant="secondary"
              >
                Website
              </Badge>
              <h1 className="text-xl font-bold">Creative landing page</h1>
              <Link
                href=""
                className={buttonVariants({
                  className:
                    "self-start text-secondary/40 hover:text-secondary/80 p-0",
                  variant: "link",
                  size: "sm",
                })}
              >
                Read More
              </Link>
            </div>{" "}
            <div className="border-[1px] border-secondary/60 p-4 flex flex-col gap-2 rounded-md">
              <Badge
                className="self-start bg-blue-200/80 rounded-md"
                variant="secondary"
              >
                Branding
              </Badge>
              <h1 className="text-xl font-bold">Creative Branding</h1>
              <Link
                href=""
                className={buttonVariants({
                  className:
                    "self-start text-secondary/40 hover:text-secondary/80 p-0",
                  variant: "link",
                  size: "sm",
                })}
              >
                Read More
              </Link>
            </div>{" "}
            <div className="border-[1px] border-secondary/60 p-4 flex flex-col gap-2 rounded-md">
              <Badge
                className="self-start bg-blue-200/80 rounded-md"
                variant="secondary"
              >
                Development
              </Badge>
              <h1 className="text-xl font-bold">Automation. Advanced Level</h1>
              <Link
                href=""
                className={buttonVariants({
                  className:
                    "self-start text-secondary/40 hover:text-secondary/80 p-0",
                  variant: "link",
                  size: "sm",
                })}
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="border-[1px] border-secondary/60 p-4 flex flex-col gap-2 rounded-md">
              <Badge
                className="self-start bg-blue-200/80 rounded-md"
                variant="secondary"
              >
                Digital Marketing
              </Badge>
              <h1 className="text-xl font-bold">Why We Collect User's Data</h1>
              <Link
                href=""
                className={buttonVariants({
                  className:
                    "self-start text-secondary/40 hover:text-secondary/80 p-0",
                  variant: "link",
                  size: "sm",
                })}
              >
                Read More
              </Link>
            </div>{" "}
            <div className="border-[1px] border-secondary/60 p-4 flex flex-col gap-2 rounded-md">
              <Badge
                className="self-start bg-blue-200/80 rounded-md"
                variant="secondary"
              >
                User Testing
              </Badge>
              <h1 className="text-xl font-bold">Creating Landing Page</h1>
              <Link
                href=""
                className={buttonVariants({
                  className:
                    "self-start text-secondary/40 hover:text-secondary/80 p-0",
                  variant: "link",
                  size: "sm",
                })}
              >
                Read More
              </Link>
            </div>{" "}
            <div className="border-[1px] border-secondary/60 p-4 flex flex-col gap-2 rounded-md">
              <Badge
                className="self-start bg-blue-200/80 rounded-md"
                variant="secondary"
              >
                SEO
              </Badge>
              <h1 className="text-xl font-bold">How We Optimized Our SEO</h1>
              <Link
                href=""
                className={buttonVariants({
                  className:
                    "self-start text-secondary/40 hover:text-secondary/80 p-0",
                  variant: "link",
                  size: "sm",
                })}
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        {/* TODO: CAROSEL */}
        <div className="container py-10 space-y-8 text-white text-sm font-light">
          <div>
            <h3 className="text-white">Ecoutez ce que disent nos clients:</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 flex-wrap">
            <div className="flex flex-col py-5 px-4 gap-4 border-2 border-secondary/60 rounded-sm font-poppins">
              <div className="flex gap-2">
                {/* TODO: Image */} <h3>Hind Nouri</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reiciendis, hic sint odio qui nobis pariatur. Nulla, autem?
                Obcaecati perspiciatis omnis commodi, at cum magni sit illum
                libero laudantium architecto magnam!
              </p>
            </div>
          </div>
        </div>
        <div className="container bg-white flex flex-col justify-center items-center gap-y-4 py-10">
          <h1 className="text-cyan-400 font-bold text-4xl">What's Next</h1>
          <h1 className="font-bold text-4xl">Let's work together</h1>
          <Link
            href="/contact"
            className={buttonVariants({
              variant: "default",
              size: "customized",
              className:
                "px-36 rounded-full py-4 mt-20 text-lg bg-zinc-400 text-black",
            })}
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Expertises;
