import { useState, useEffect } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Skeleton } from "@nextui-org/skeleton";
import { FaReact, FaCube, FaMobileAlt } from "react-icons/fa";
import DefaultLayout from "@/layouts/default";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ProjectGridProps {
  projects: Project[];
  isLoading: boolean;
}

interface ProjectCardProps {
  project: Project;
  isLoading: boolean;
}


export default function ProjectsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("web");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { key: "web", name: "React Web Apps", icon: FaReact },
    { key: "3d", name: "3D Product Design", icon: FaCube },
    { key: "mobile", name: "Mobile Apps", icon: FaMobileAlt },
  ];

  const projectsByCategory = {
    web: webProjects,
    "3d": designProjects,
    mobile: mobileProjects,
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1
          className="font-silkscreen text-5xl bg-gradient-to-r from-delft-blue to-turquoise bg-clip-text text-transparent dark:from-turquoise dark:to-magnolia"
          style={{ fontFamily: "Silkscreen" }}
        >
          Projects
        </h1>

        {/* Tabs for larger screens */}
        <div className="hidden md:block w-full max-w-3xl">
          <Tabs
            aria-label="Project categories"
            className="mt-6 flex justify-center"
            color="primary"
            selectedKey={selectedCategory}
            variant="solid"
            onSelectionChange={(key) => setSelectedCategory(key.toString())}
          >
            {categories.map((category) => (
              <Tab
                key={category.key}
                title={
                  <div className="flex items-center space-x-2">
                    <category.icon />
                    <span>{category.name}</span>
                  </div>
                }
              />
            ))}
          </Tabs>
        </div>

        {/* Dropdown for smaller screens */}
        <div className="md:hidden w-full max-w-xs mt-6">
          <Dropdown>
            <DropdownTrigger>
              <Button className="w-full" color="primary" variant="faded">
                {categories.find((c) => c.key === selectedCategory)?.name ||
                  "Select Category"}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Project categories"
              color="primary"
              selectedKeys={[selectedCategory]}
              selectionMode="single"
              onSelectionChange={(keys) => {
                const newKey = keys.currentKey;
                setSelectedCategory(typeof newKey === "string" ? newKey : "web");
              }}
            >
              {categories.map((category) => (
                <DropdownItem key={category.key}>
                  <div className="flex items-center space-x-2">
                    <category.icon />
                    <span>{category.name}</span>
                  </div>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>

        <ProjectGrid
          isLoading={isLoading}
          projects={projectsByCategory[selectedCategory as keyof typeof projectsByCategory]}
        />
      </section>
    </DefaultLayout>
  );
}

function ProjectGrid({ projects, isLoading }: ProjectGridProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="w-full sm:w-[calc(50%-0.5rem)] max-w-sm"
        >
          <ProjectCard isLoading={isLoading} project={project} />
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project, isLoading }: ProjectCardProps) {
  return (
    <Card className="h-full backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700">
      <CardBody>
        <Skeleton className="rounded-lg" isLoaded={!isLoading}>
          <div className="h-40 rounded-lg bg-default-300">
            {!isLoading && (
              <Image
                alt={project.title}
                className="object-cover rounded-xl w-full h-full"
                src={project.image}
              />
            )}
          </div>
        </Skeleton>
        <Skeleton className="mt-2" isLoaded={!isLoading}>
          <h4 className="font-bold text-large">{project.title}</h4>
        </Skeleton>
        <Skeleton className="mt-2" isLoaded={!isLoading}>
          <p className="text-small text-default-500">{project.description}</p>
        </Skeleton>
      </CardBody>
      <CardFooter>
        <Skeleton isLoaded={!isLoading}>
          <Button color="primary" size="sm">
            Learn More
          </Button>
        </Skeleton>
      </CardFooter>
    </Card>
  );
}

// Sample project data
const webProjects: Project[] = [
  {
    id: 1,
    title: "Joint Ventures Electronic Services",
    description: "Complete revamp of the company website",
    image: "/path/to/image1.jpg",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with Next.js",
    image: "/path/to/image2.jpg",
  },
  // Add more web projects...
];

const designProjects: Project[] = [
  {
    id: 1,
    title: "Mine Lamp Charging Rack",
    description:
      "3D Prototype of a Mine Cap Lamp charging rack.",
    image: "/path/to/image3.jpg",
  },
  {
    id: 2,
    title: "Sheet Metal Design",
    description:
      "Innovative mouse design for improved comfort and productivity",
    image: "/path/to/image4.jpg",
  },
  // Add more design projects...
];

const mobileProjects: Project[] = [
  {
    id: 1,
    title: "etamax Intelligent Solar Geyser",
    description:
      "Cross-platform mobile app for managing home water heater energy usage.",
    image: "/path/to/image5.jpg",
  },
  {
    id: 2,
    title: "Reev Electric Scooter",
    description: "Accompanying app to the Reev Electric Scooter, under development.",
    image: "/path/to/image6.jpg",
  },
  // Add more mobile projects...
];
