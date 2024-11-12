import { Link } from "react-router-dom";
import { Button, Tabs, Tab, Chip } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

import DefaultLayout from "@/layouts/default";

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
  inProgress: boolean;
}

const projects: Record<string, Project[]> = {
  mobile: [
    {
      id: 1,
      title: "Etamax Intelligent Solar Geyser",
      description: "App for managing home water heater energy usage",
      link: "/projects/mobile/etamax",
      image: "/images/projects/etamaxth.png", // Removed 'public' from path
      inProgress: false,
    },
    {
      id: 2,
      title: "Reev Electric Scooter",
      description: "Accompanying app to the Reev Electric Scooter",
      link: "/projects/mobile/reev",
      image: "/images/projects/reevth.png", // Removed 'public' from path
      inProgress: false,
    },
  ],
};

export default function ProjectsPage() {
  // Since we only have mobile projects now, we can simplify this
  const selectedCategory = "mobile";

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => null,
    onSwipedRight: () => null,
    trackMouse: true,
  });

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center gap-8 py-8 md:py-10 px-4">
        <h1
          className="font-silkscreen text-5xl bg-gradient-to-r from-delft-blue to-turquoise bg-clip-text text-transparent dark:from-turquoise dark:to-magnolia"
          style={{ fontFamily: "Silkscreen" }}
        >
          Projects
        </h1>

        <Tabs 
          aria-label="Project categories" 
          selectedKey="mobile"
          disabledKeys={["web", "3d"]}
        >
          <Tab key="mobile" title="Mobile Development" />
          <Tab
            key="web"
            title="Web Development"
          />
          <Tab
            key="3d"
            title="3D Design"
          />
        </Tabs>

        <div {...swipeHandlers}>
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
                  className="backdrop-blur-[2px] bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 rounded-lg p-6 flex items-start justify-between shadow-lg backdrop-filter bg-opacity-10"
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
        </div>
      </div>
    </DefaultLayout>
  );
}