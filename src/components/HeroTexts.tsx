import TextRotator from "./TextRotator";

const HeroTexts = () => {
  return (
    <>
      <h3 className="font-poppins text-2xl max-sm:text-xl">Je m'appelle</h3>
      <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl">
        Augustin Sandé <br /> Idohou
      </h1>
      <TextRotator />
    </>
  );
};

export default HeroTexts;
