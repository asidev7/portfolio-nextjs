import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFooter";
import { Badge } from "@/components/ui/badge";
import {
  Lightbulb,
  FileCode,
  Braces,
  Server,
  Layers,
  Monitor,
  GitBranch,
  Feather,
} from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";

const SkillPage = () => {
  const skills = [
    {
      name: "HTML5",
      icon: <FileCode className="h-8 w-8 text-orange-500" />,
      description: "Structuration efficace du contenu web.",
    },
    {
      name: "CSS3",
      icon: <FileCode className="h-8 w-8 text-blue-500" />,
      description: "Stylisation précise des interfaces utilisateur.",
    },
    {
      name: "JavaScript",
      icon: <Braces className="h-8 w-8 text-yellow-500" />,
      description: "Création d'applications web interactives.",
    },
    {
      name: "TypeScript",
      icon: <Braces className="h-8 w-8 text-blue-600" />,
      description: "JavaScript avec typage statique amélioré.",
    },
    {
      name: "Python",
      icon: <Feather className="h-8 w-8 text-green-500" />,
      description: "Développement backend robuste et scripting.",
    },
    {
      name: "Django",
      icon: <Server className="h-8 w-8 text-green-700" />,
      description: "Framework pour un backend performant.",
    },
    {
      name: "React.js",
      icon: <Layers className="h-8 w-8 text-sky-500" />,
      description: "Construction de composants UI modernes.",
    },
    {
      name: "Next.js",
      icon: <Monitor className="h-8 w-8 text-black" />,
      description: "Rendu côté serveur et performance optimisée.",
    },
    {
      name: "Flutter",
      icon: <Feather className="h-8 w-8 text-blue-400" />,
      description: "Développement mobile multiplateforme.",
    },
    {
      name: "Docker",
      icon: <Server className="h-8 w-8 text-blue-500" />,
      description: "Conteneurisation pour des déploiements évolutifs.",
    },
    {
      name: "Linux",
      icon: <Monitor className="h-8 w-8 text-gray-700" />,
      description: "Administration des serveurs et systèmes Linux.",
    },
    {
      name: "Windows Server",
      icon: <Monitor className="h-8 w-8 text-blue-800" />,
      description: "Configuration de serveurs Windows professionnels.",
    },
    {
      name: "Git",
      icon: <GitBranch className="h-8 w-8 text-red-500" />,
      description: "Gestion des versions et collaboration efficace.",
    },
    {
      name: "Bootstrap",
      icon: <Layers className="h-8 w-8 text-purple-500" />,
      description: "Framework pour des interfaces réactives rapides.",
    },
    {
      name: "Tailwind CSS",
      icon: <Layers className="h-8 w-8 text-teal-400" />,
      description: "CSS utilitaire pour un design rapide et épuré.",
    },
    {
      name: "Vue.js",
      icon: <Braces className="h-8 w-8 text-emerald-500" />,
      description: "Framework progressif pour interfaces utilisateur.",
    },
    {
      name: "Angular",
      icon: <Braces className="h-8 w-8 text-red-600" />,
      description: "Framework complet pour applications frontend.",
    },
  ];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      {/* Badge */}
      <Badge className="gap-2">
        <Lightbulb className="h-5 w-5" />
        Mes Compétences
      </Badge>

      {/* Heading */}
      <div className="flex flex-col gap-3">
        <Heading>Mon Expérience Technique</Heading>

        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-xl text-primary max-sm:text-lg">
            Je possède une expertise variée allant du **développement frontend** au **backend**, avec une maîtrise des outils modernes pour le développement web et mobile ainsi que l'administration des serveurs.
          </p>
        </FramerWrapper>

        {/* Grille des compétences */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {skills.map((skill, index) => (
            <FramerWrapper
              key={index}
              y={50}
              delay={index * 0.1}
              className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div>{skill.icon}</div>
              <h3 className="text-lg font-poppins font-semibold text-gray-800">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {skill.description}
              </p>
            </FramerWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
