import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";

const page = () => {
  const items = [
    { hobby: "Coder" },
    { hobby: "Jouer aux jeux vidéo" },
    { hobby: "Regarder des animés" },
    { hobby: "Écrire des blogs sur la technologie" },
    { hobby: "Créer des projets innovants" },
  ];

  return (
    // PAGE À PROPOS
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <User2 className="h-5 w-5" />
        À propos de moi
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>
          Ingénieur Logiciel et Développeur Web <br /> Basé au Bénin.
        </Heading>
        <FramerWrapper y={0} x={100}>
          <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
            Je suis Augustin Sandé Idohou, un passionné développeur Full Stack originaire de la belle ville de Parakou, en République du Bénin. 
            Je me considère comme un artisan du code, toujours à la recherche de solutions élégantes et efficaces pour résoudre des défis techniques.
            Mon amour pour le développement web s'étend à la création d'expériences utilisateurs captivantes, et je suis particulièrement 
            fasciné par l'art de concevoir des interfaces non seulement fonctionnelles, mais aussi esthétiques et intuitives.

            Avec une expertise pointue en **JavaScript** et **CSS**, je façonne des applications fluides et réactives qui se distinguent par leur élégance et leur robustesse.
            J'ai une approche pragmatique et orientée vers les résultats, alliant créativité et rigueur pour garantir une qualité de code exceptionnelle. 
            Mon sens du détail et mon souci constant d'améliorer les performances me poussent à me challenger chaque jour pour livrer des projets à la fois 
            modernes, performants et adaptés aux besoins des utilisateurs.

            En plus de mes réalisations professionnelles, je suis un fervent contributeur à des projets open-source, où je partage mes connaissances et collabore avec une communauté de développeurs passionnés. 
            Au-delà du code, je cherche à laisser une empreinte positive en créant des produits qui répondent à un véritable besoin et qui apportent de la valeur à ceux qui les utilisent.
          </p>
        </FramerWrapper>
      </div>
      <FramerWrapper className="w-full flex flex-row justify-between max-lg:flex-col" y={100} delay={0.3}>
        <Aboutfooter />
      </FramerWrapper>
      <FramerWrapper className="block" y={100} delay={0.31}>
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          <Heart className="h-8 w-8" /> Mes Passions
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
          {items.map((val, indx) => {
            return (
              <div
                key={indx}
                className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start"
              >
                <Circle className="h-3 w-3" /> {val.hobby}
              </div>
            );
          })}
        </div>
      </FramerWrapper>
    </div>
  );
};

export default page;
