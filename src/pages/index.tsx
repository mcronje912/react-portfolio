import React from "react";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faFlutter,
  faAndroid,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

import DefaultLayout from "@/layouts/default";
import { GithubIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import GitHubActivity from "@/components/githubactivity";

const TechIcons: React.FC = () => (
  <div className="flex justify-center space-x-4 mt-8">
    {[faReact, faHtml5, faCss3Alt, faJs, faFlutter, faAndroid, faApple].map(
      (icon, index) => (
        <FontAwesomeIcon
          key={index}
          className="text-gray-500 dark:text-gray-400 text-2xl"
          icon={icon}
        />
      ),
    )}
  </div>
);

// Custom glassmorphism class
const glassmorphismClass = `
  bg-opacity-10 
  backdrop-filter 
  backdrop-blur-[2px] 
  bg-white/30 
  dark:bg-gray-800/30 
  border 
  border-gray-200/20 
  dark:border-gray-700/20 
  shadow-lg
`;

const IndexPage: React.FC = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="text-center">
          <h1
            className="font-silkscreen text-5xl bg-gradient-to-r from-delft-blue to-turquoise bg-clip-text text-transparent dark:from-turquoise dark:to-magnolia"
            style={{ fontFamily: "Silkscreen" }}
          >
            Bringing Innovation to Life
          </h1>
          <h2 className="text-2xl text-cyan-500 mt-4">
            Cross-Platform Apps, Web Solutions, and 3D Product Design
          </h2>
          <p className="mt-4 text-lg">
            I develop modern, efficient solutions for mobile, web, and hardware
            projects.
          </p>
          <div className="flex gap-8 mt-6 justify-center">
            <Button as={Link} color="primary" href="/projects" variant="shadow">
              View My Work
            </Button>
            <Button
              as={Link}
              color="primary"
              href="#contact"
              variant="bordered"
            >
              Get in Touch
            </Button>
          </div>
        </div>

        <TechIcons />


          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className={glassmorphismClass}>
              <CardHeader>
                <h3 className="font-bold text-large">3D Product Design</h3>
              </CardHeader>
              <CardBody>
                <p>
                  Crafting innovative product designs using Autodesk Fusion 360
                  and prototyping solutions.
                </p>
                <img
                  alt="3D Design Project"
                  className="mt-4 rounded-lg w-full h-48 object-cover"
                  src="/images/placeholder-3d-design.png"
                />
              </CardBody>
            </Card>

            <Card className={glassmorphismClass}>
              <CardHeader>
                <h3 className="font-bold text-large">Mobile App Development</h3>
              </CardHeader>
              <CardBody>
                <p>
                  Delivering cross-platform mobile apps using Flutter, BLE
                  integration, and IoT solutions.
                </p>
                <img
                  alt="Mobile App Project"
                  className="mt-4 rounded-lg w-full h-48 object-cover"
                  src="/images/placeholder-mobile-app.png"
                />
              </CardBody>
            </Card>

            <Card className={glassmorphismClass}>
              <CardHeader>
                <h3 className="font-bold text-large">Web Development</h3>
              </CardHeader>
              <CardBody>
                <p>
                  Building modern, responsive web applications with React,
                  Next.js, and Tailwind CSS.
                </p>
                <img
                  alt="Web Development Project"
                  className="mt-4 rounded-lg w-full h-48 object-cover"
                  src="/images/placeholder-web-dev.png"
                />
              </CardBody>
            </Card>
          </div>
       
        <div className="mt-9 w-full max-w-7xl">
          <Card className={glassmorphismClass}>
            <CardBody>
              <GitHubActivity />
            </CardBody>
          </Card>
          </div>

        <div className="flex gap-8 mt-12">
          <Button
            isExternal
            as={Link}
            color="primary"
            href={siteConfig.links.docs}
            variant="shadow"
          >
            Documentation
          </Button>
          <Button
            isExternal
            as={Link}
            color="primary"
            href={siteConfig.links.github}
            startContent={<GithubIcon size={20} />}
            variant="bordered"
          >
            GitHub
          </Button>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default IndexPage;