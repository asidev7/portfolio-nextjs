import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";

export const siteConfig = {
  name: "Augustin Sandé Idohou",
  description: "Je suis un développeur logiciel passionné",
  ogImage: "https://mdTaquiImam.vercel.app/og-image.png",
  url: "https://mdTaquiImam.vercel.app",
};

export default function Home() {
  return (
    <>
      {/* CÔTÉ GAUCHE */}
      <FramerWrapper className="h-full w-auto flex flex-col justify-start gap-4" y={0} x={-100}>
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-4">
          <SocialLinks />
        </div>
        <DownLoadResumeBtn />
      </FramerWrapper>
      
      {/* CÔTÉ DROIT - IMAGE */}
      <FramerWrapper className="h-full w-[47%] relative block max-lg:hidden" y={0} x={100}>
        {/* IMAGE */}
        <HeroImage />
      </FramerWrapper>
      
      {/* BOUTON GITHUB */}
      <GithubBtn />
    </>
  );
}
