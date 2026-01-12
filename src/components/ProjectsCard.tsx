import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FramerWrapper from "./animation/FramerWrapper";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  value: {
    title: string;
    description: string;
    tags: string[];
    link: string;
    github?: string;
  };
  num: number;
}

// Tech stack icons mapping
const techIcons: { [key: string]: string } = {
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Nextjs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Nodejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'Mongodb': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'Tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
  'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  'Vue': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Zustand': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', // Using React icon as fallback
  'Shadcn Ui': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', // Using React icon as fallback
};

const ProjectCards: React.FC<ProjectCardProps> = ({ value, num }) => {
  return (
    <FramerWrapper
      className="max-w-[32%] max-lg:max-w-full"
      y={0}
      scale={0.8}
      delay={num/4}
      duration={0.15}
    >
      <Card className="w-full h-full flex flex-col hover:shadow-lg transition-all duration-300 border-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-primary">{value.title}</CardTitle>
        </CardHeader>

        <CardContent className="flex-grow flex flex-col gap-4">
          <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>

          <div className="flex flex-wrap gap-2">
            {value.tags.map((tag: string, index: number) => {
              const icon = techIcons[tag];

              return (
                <div
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors border border-border"
                  title={tag}
                >
                  {icon && (
                    <Image
                      src={icon}
                      alt={tag}
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  )}
                  <span className="text-xs font-medium text-foreground">{tag}</span>
                </div>
              );
            })}
          </div>
        </CardContent>

        <CardFooter className="pt-2 flex gap-2">
          <Link
            href={value.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({
                variant: "default",
                size: "sm"
              }),
              "flex-1 transition-all hover:translate-y-[-2px] hover:shadow-md group"
            )}
          >
            Visit Project
            <ArrowUpRight className="h-4 w-4 ml-1 hidden group-hover:block -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
          </Link>

          {value.github && (
            <Link
              href={value.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "sm"
                }),
                "transition-all hover:translate-y-[-2px] hover:shadow-md group"
              )}
              title="View on GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
          )}
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export default ProjectCards;
