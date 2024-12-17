"use client";
import { cn } from "@/lib/utils";

import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  HomeIcon,
  Mail,
  MoreHorizontal,
  User,
} from "lucide-react";

import { Dock, DockIcon, DockItem, DockLabel } from "@/components/animation/DockAnimation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const data = [
    {
      title: "Accueil",
      icon: <HomeIcon className="h-full w-full" />,
      href: "/",
    },
    {
      title: "À propos",
      icon: <User className="h-full w-full" />,
      href: "/about",
    },
    {
      title: "Compétences",
      icon: <Briefcase className="h-full w-full" />,
      href: "/skills",
    },
    {
      title: "Éducation",
      icon: <GraduationCap className="h-full w-full" />,
      href: "/education",
    },
    {
      title: "Projets",
      icon: <FolderGit2 className="h-full w-full" />,
      href: "/projects",
    },
    {
      title: "Contact",
      icon: <Mail className="h-full w-full" />,
      href: "/contact",
    },
    {
      title: "Plus",
      icon: <MoreHorizontal className="h-full w-full" />,
      href: "/more",
    },
  ];

  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  // Détection du défilement pour cacher la barre de navigation
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-5 right-0 left-0 px-0 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[9999999] ${
        scrolling ? "hidden" : "block"
      }`}
    >
      <Dock className="items-end pb-3 rounded-full">
        {data.map((item, idx) => (
          <Link href={item.href} key={idx}>
            <DockItem
              className={cn(
                "aspect-square rounded-full bg-gray-200 dark:bg-neutral-800",
                pathname === item.href && "bg-gray-100 border border-primary"
              )}
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon className={cn(pathname === item.href && "text-[#2f7df4]")}>
                {item.icon}
              </DockIcon>
            </DockItem>
          </Link>
        ))}
      </Dock>
    </div>
  );
};

export default Navbar;
