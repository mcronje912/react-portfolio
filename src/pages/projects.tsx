import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Tabs, Tab, Chip } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";

import DefaultLayout from "@/layouts/default";

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
  inProgress: boolean;
}

const categoryNames = {
  web: "Web Development",
  design: "3D Design",
  mobile: "Mobile Apps",
};

const projects: Record<string, Project[]> = {
  web: [
    {
      id: 1,
      title: "Joint Ventures Electronic Services",
      description: "Complete revamp of the company website",
      link: "/projects/web/jves",
      image: "/placeholder.jpg",
      inProgress: true,
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React",
      link: "/projects/web/portfolio",
      image: "/placeholder.jpg",
      inProgress: true,
    },
  ],
  design: [
    {
      id: 1,
      title: "Mine Lamp Charging Rack",
      description: "3D Prototype of a Mine Cap Lamp charging rack",
      link: "/projects/design/mine-lamp",
      image: "/public/images/projects/smlamp.jpg",
      inProgress: false,
    },
    {
      id: 2,
      title: "Sheet",
      description: "Innovative mouse design for improved comfort",
      link: "/projects/design/sheet",
      image: "/placeholder.jpg",
      inProgress: true,
    },
  ],
  mobile: [
    {
      id: 1,
      title: "etamax Intelligent Solar Geyser",
      description: "App for managing home water heater energy usage",
      link: "/projects/mobile/etamax",
      image: "/public/images/projects/etamaxth.png",
      inProgress: false,
    },
    {
      id: 2,
      title: "Reev Electric Scooter",
      description: "Accompanying app to the Reev Electric Scooter",
      link: "/projects/mobile/reev",
      image: "/public/images/projects/reevth.png",
      inProgress: false,
    },
  ],
};

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("design");

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center gap-8 py-8 md:py-10 px-4">
        <h1
          className="font-silkscreen text-5xl bg-gradient-to-r from-delft-blue to-turquoise bg-clip-text text-transparent dark:from-turquoise dark:to-magnolia"
          style={{ fontFamily: "Silkscreen" }}
        >
          Projects
        </h1>

        {/* Category Selection */}
        <Tabs
          aria-label="Project categories"
          color="primary"
          selectedKey={selectedCategory}
          variant="solid"
          onSelectionChange={(key) => setSelectedCategory(key as string)}
        >
          {Object.keys(projects).map((category) => (
            <Tab
              key={category}
              title={categoryNames[category as keyof typeof categoryNames]}
            />
          ))}
        </Tabs>

        {/* Project Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            animate={{ opacity: 1, x: 0 }}
            className="grid grid-cols-1 gap-6 w-full max-w-4xl"
            exit={{ opacity: 0, x: 20 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {projects[selectedCategory].map((project) => (
              <div
                key={project.id}
                className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 rounded-lg p-6 flex items-start justify-between"
              >
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    {project.inProgress && (
                      <Chip color="primary" size="sm" variant="flat">
                        In Progress
                      </Chip>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <Button
                    as={Link}
                    color="primary"
                    isDisabled={project.inProgress}
                    size="sm"
                    to={project.link}
                    variant="bordered"
                  >
                    Learn More
                  </Button>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <img
                    alt={project.title}
                    className="w-28 h-28 object-cover rounded-lg shadow-md"
                    src={project.image}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Quick Navigation Links */}
        <div className="mt-12 p-6 backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 rounded-lg w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Quick Navigation
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button as={Link} color="primary" to="/about" variant="flat">
              About Page
            </Button>
            <Button
              as={Link}
              color="primary"
              to="/projects/mobile/reev"
              variant="flat"
            >
              Reev Project
            </Button>
            <Button as={Link} color="primary" to="/blog" variant="flat">
              Blog Page
            </Button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
