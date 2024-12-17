import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const EducationPage = () => {
  const educationData = [
    {
      period: "2019",
      title: "Baccalauréat Série C",
      description: "Collège d'Enseignement Général 1 (CEG 1) Ketou.",
      skills: [],
    },
    {
      period: "Février 2022 - Août 2022",
      title: "Formation Linux Administrator",
      description: "Formation approfondie sur l'administration des systèmes Linux.",
      skills: [
        "Gestion des utilisateurs et groupes",
        "Configuration des permissions et ACL",
        "Installation et configuration des services Linux",
        "Sécurité et surveillance des systèmes",
      ],
    },
    {
      period: "Mai 2023 - Septembre 2023",
      title: "Formation Avancée en Linux",
      description: "Approfondissement des compétences en systèmes Linux.",
      skills: [
        "Automatisation avec Bash",
        "Optimisation des performances du système",
        "Virtualisation avec KVM",
        "Gestion avancée des processus et services",
      ],
    },
    {
      period: "2023",
      title: "Licence Professionnelle en Informatique de Gestion",
      description:
        "Institut Universitaire de Technologie (IUT), Université de Parakou.",
      skills: [
        "Développement Web : HTML, CSS, JavaScript, Django",
        "Analyse et conception des systèmes d'information",
        "Gestion de base de données : MySQL, PostgreSQL",
        "Administration des systèmes et réseaux",
      ],
    },
    {
      period: "Janvier 2024 - Mars 2024",
      title: "Formation Microsoft Administrator",
      description: "Compétences en administration des systèmes Microsoft.",
      skills: [
        "Gestion des services Active Directory",
        "Configuration des politiques de groupe (GPO)",
        "Virtualisation Hyper-V",
        "Déploiement et gestion des mises à jour",
      ],
    },
    {
      period: "Mars 2024 - Présent",
      title: "Formation DevOps",
      description:
        "Technologies couvertes : Ansible, Docker, Terraform, et bien plus.",
      skills: [
        "Orchestration avec Ansible",
        "Conteneurisation avec Docker",
        "Infrastructure as Code avec Terraform",
        "CI/CD avec Jenkins et GitLab",
      ],
    },
  ];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden p-4">
      {/* En-tête */}
      <Badge className="gap-2">
        <GraduationCap className="h-5 w-5" />
        Éducation
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>Mon Parcours Éducatif</Heading>
      </div>

      {/* Liste des formations */}
      <div className="w-full h-fit flex flex-col gap-6">
        {educationData.map((item, index) => (
          <div key={index} className="w-full flex flex-col sm:flex-row gap-4">
            {/* Période */}
            <FramerWrapper
              y={0}
              x={-100}
              delay={0.3 + index * 0.1}
              className="w-full sm:w-1/4 font-rubik text-lg text-gray-700 max-sm:text-base"
            >
              {item.period}
            </FramerWrapper>

            {/* Détails */}
            <FramerWrapper
              y={0}
              x={100}
              delay={0.3 + index * 0.1}
              className="relative w-full sm:w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point bg-gray-50 rounded-lg shadow-md"
            >
              <div className="text-2xl font-rubik text-gray-800 max-sm:text-xl">
                {item.title}
              </div>
              <p className="font-poppins text-base text-gray-600 max-sm:text-sm">
                {item.description}
              </p>

              {/* Liste des compétences */}
              {item.skills.length > 0 && (
                <ul className="list-disc ml-6 mt-2 text-sm text-gray-700">
                  {item.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="mt-1">
                      {skill}
                    </li>
                  ))}
                </ul>
              )}
            </FramerWrapper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
