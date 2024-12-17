import { cn } from "@/lib/utils";
import { Facebook, Linkedin,Youtube, Twitter, ExternalLink } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";

const SocialLinks = () => {
  const links = [
    { name: "Facebook", link: "https://www.facebook.com/", icon: <Facebook /> },
    { name: "Youtube", link: "https://www.youtube.com/asidev7", icon: <Youtube /> },

    { name: "Twitter", link: "https://twitter.com/", icon: <Twitter /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/", icon: <Linkedin /> },
    { name: "External", link: "https://tinyurl.com/", icon: <ExternalLink /> },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125
        
        return (
          <FramerWrapper key={indx} delay={timing} y={50}>

          <Link  target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >{itm.icon}</Link>
            </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
