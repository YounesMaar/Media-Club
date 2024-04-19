import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="relative w-full h-[100vh]">
      <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-20" />

      <video
        className="w-full h-full object-cover"
        controls={false}
        loop
        autoPlay
      >
        <source src="/creative_agency.mp4" type="video/mp4" />
      </video>

      <div className="absolute w-full flex justify-end h-full bg-transparent items-center flex-col top-0 left-0 py-48">
        <Button className="uppercase rounded-full bg-gray-500">
          commmencer l'aventure
        </Button>
      </div>
    </div>
  );
};

export default Hero;
