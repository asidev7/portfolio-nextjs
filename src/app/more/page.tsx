import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, PackagePlus, Youtube } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import FramerWrapper from "@/components/animation/FramerWrapper";

const morePage = () => {
  const morelink = [
    {
      title: "Dev.to",
      description:
        "I write blogs on web development, trending tech stacks or javascript guide or tips in Dev.to",
      link: "https://dev.to/asidev7",
    },
    {
      title: "Hashnode",
      description:
        "I write blogs on web development, trending tech stacks or javascript guide or tips in Hashnode",
      link: "https://asidev.hashnode.dev/",
    },
    {
      title: "Medium",
      description:
        "I write blogs on web development, trending tech stacks or javascript guide or tips in Medium",
      link: "https://medium.com/@asidev7",
    },
    
    {
      title: "Gumroad",
      description:
        "I also sell digital products on Gumroad like Notion Templates and web projects etc.",
      link: "/",
    },
    {
      title: "Buy Me a Coffee",
      description:
        "Your support goes a long way in helping me maintain the quality of content, explore new topics, and dedicate more time to creating valuable projects.",
      link: "",
    },
    // Example YouTube videos
    {
      title: "My YouTube Channel",
      description: "Check out my tutorials and other tech-related videos on my YouTube channel.",
      link: "https://www.youtube.com/asidev",
      isVideo: true, // Flag to indicate this is a YouTube link
    },
    {
      title: "JavaScript Tutorial",
      description: "A deep dive into JavaScript fundamentals. Perfect for beginners!",
      link: "https://www.youtube.com/",
      isVideo: true,
    },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <PackagePlus className="h-5 w-5" />
        More
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>More</Heading>
      </div>
      <div className="h-auto w-full flex flex-wrap gap-3 p-2">
        {morelink.map((value, indx) => {
          return (
            <FramerWrapper key={indx} className="max-w-[32%] max-lg:max-w-full" y={0} scale={0.8} delay={indx/4} duration={0.15}>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base font-poppins">{value.description}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={value.link}
                    target="blank"
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" }),
                      "w-full gap-3"
                    )}
                  >
                    {value.isVideo ? (
                      <Youtube className="h-5 w-5" />
                    ) : (
                      <ExternalLink className="h-5 w-5" />
                    )}
                    {value.isVideo ? "Watch Video" : "Visit here"}
                  </Link>
                </CardFooter>
              </Card>
            </FramerWrapper>
          );
        })}
      </div>
    </div>
  );
};

export default morePage;
