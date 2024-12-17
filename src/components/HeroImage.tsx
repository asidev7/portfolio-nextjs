import logo from "../../public/portfolioLogo.png";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative w-50 h-50 rounded-full overflow-hidden shadow-lg animate-3d">
      <Image
        src={logo}
        alt="logo"
        loading="eager"
        priority
        height={1000}
        width={1000}
        className="rounded-full object-cover"
      />
    </div>
  );
};

export default HeroImage;
