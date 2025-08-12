import DesktopHero from "./DesktopHero";
import MobileHero from "./MobileHero";
function Hero() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <MobileHero />
      </div>{" "}
      <div className=" hidden md:flex md:items-center md:justify-center md:w-full md:h-full">
        <DesktopHero />
      </div>
    </>
  );
}

export default Hero;
