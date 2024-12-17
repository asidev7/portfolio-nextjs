import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // DONNÉES DES PROJETS
  const Projects = [
    {
      title: "Mon Portfolio - idohouaugustin.com",
      description:
        "Mon portfolio en ligne, présentant mes compétences en développement web, mobile, et en intelligence artificielle.",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      link: "https://idohouaugustin.com",
    },
    {
      title: "LaZone237 - E-commerce",
      description:
        "Un site e-commerce pour acheter et vendre des produits en ligne, adapté aux besoins des utilisateurs au Cameroun.",
      tags: ["Next.js", "React", "MongoDB", "Stripe"],
      link: "https://lazone237.com",
    },
    {
      title: "BTECH Academy - Site de présentation",
      description:
        "Un site vitrine pour BTECH Academy, offrant des formations en développement web et en technologie.",
      tags: ["WordPress", "HTML", "CSS"],
      link: "https://btechnacademy.com",
    },
    {
      title: "Diabetes Management - Projet de fin d'année 2023",
      description:
        "Un système de gestion de diabète conçu pour surveiller, analyser et optimiser la prise en charge des patients.",
      tags: ["Django", "Python", "SQLite", "API REST"],
      link: "https://github.com/taqui-786/diabetes-management",
    },
    {
      title: "Celtis Ariya - Gestion des événements et du tourisme au Bénin",
      description:
        "Une plateforme de gestion d'événements et de services touristiques pour promouvoir le tourisme au Bénin.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://celtisariya.com",
    },
    {
      title: "ASITECH - Plateforme en ligne",
      description:
        "Le site officiel de ASITECH, un service de développement web, mobile, et d'IA, ainsi que des solutions en marketing digital.",
      tags: ["Next.js", "React", "Django", "MongoDB"],
      link: "https://aasitech.online",
    },
    {
      title: "Devzone - Une application de chat communautaire pour développeurs",
      description:
        "DevZone est la plateforme de chat ultime pour les développeurs afin de se connecter, collaborer et coder ensemble.",
      tags: ["Next.js", "Zustand", "Supabase", "Shadcn Ui"],
      link: "https://devzone-ti.vercel.app/",
    },
    {
      title: "itZmyLink - Un seul lien pour tous vos profils sociaux",
      description:
        "itZmyLink permet aux utilisateurs de créer une page personnalisée pour afficher tous leurs profils sociaux en un seul endroit.",
      tags: ["Next.js", "TypeScript", "Shadcn Ui"],
      link: "https://github.com/taqui-786/itZmyLink",
    },
    {
      title: "GitEstimate - Estimation de la valeur de votre compte GitHub",
      description:
        "Un outil simple et amusant pour générer une carte d'estimation de la valeur de votre compte GitHub.",
      tags: ["Next.js", "TypeScript", "Shadcn Ui"],
      link: "https://github.com/taqui-786/GitEstimate",
    },
    {
      title: "Mixcn-ui - Composants réutilisables pour Next.js",
      description:
        "Une collection de composants Next.js réutilisables (actuellement en développement).",
      tags: ["Next.js", "Shadcn Ui", "Npx", "Library"],
      link: "https://mixcn-ui.vercel.app",
    },
  ];

  return (
    // PAGE DES PROJETS
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className="gap-2">
        <Layers className="h-5 w-5" />
        Projets
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>Mes Projets</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-lg w-full text-primary max-sm:text-base">
            J'aime créer des projets intéressants et innovants. Vous trouverez ici une sélection de mes projets techniques et créatifs. Chaque projet représente un chemin d'innovation, de résolution de problèmes et d'apprentissage continu. N'hésitez pas à explorer cette vitrine de mes passions et de mes compétences en action.
          </p>
        </FramerWrapper>
      </div>

      <div className="w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
