import GalleryComponent from "@/components/landing/GalleryComponent";
import Hero from "@/components/landing/Hero";
import NosVision from "@/components/landing/NosVision";
import Secteurs from "@/components/landing/Secteurs";

const HomePage = () => {
  return (
    <div className="">
      {/* section 1 */}
      <Hero />
      {/* section 2 */}
      <GalleryComponent />
      {/* section 3 */}
      <NosVision />
      {/* section 4 */}
      <div className="panel h-[100vh] bg-white text-black flex items-center justify-center text-center">
        <p className="underline text-xl md:text-4xl px-20">
          Notre marque de fabrique ? Un simplissime de sophistication au service
          des idess, une exigence de perfection esthetique et une simplicite
          raffinee.
        </p>
      </div>
      {/* section 5 */}
      <Secteurs />
    </div>
  );
};

export default HomePage;
