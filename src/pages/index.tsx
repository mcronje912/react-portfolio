// index.tsx

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faFlutter,
  faAndroid, // Import Android icon
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import DefaultLayout from "@/layouts/default";
import { GithubIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

const IconCarousel = () => {
  const icons = [
    { name: "React", icon: faReact },
    { name: "HTML5", icon: faHtml5 },
    { name: "CSS3", icon: faCss3Alt },
    { name: "JavaScript", icon: faJs },
    { name: "Flutter", icon: faFlutter },
    { name: "Android", icon: faAndroid },
    { name: "iOS", icon: faApple },
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <Carousel
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={4000}
      containerClass="carousel-container"
      infinite={true}
      itemClass="carousel-item"
      keyBoardControl={false}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      responsive={responsive}
    >
      {icons.map((icon, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* Changed to rounded rectangle */}
          <div className="rounded-lg p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
            <FontAwesomeIcon icon={icon.icon} size="3x" />
          </div>
          <p className="mt-2 text-cyan-500">{icon.name}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default function IndexPage() {
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
            Cross-Platform Apps, Web Solutions, and 3D Product Design.
          </h2>
          <p className="mt-4 text-lg">
            I develop modern, efficient solutions for mobile, web, and hardware
            projects.
          </p>
          <div className="flex gap-8 mt-6 justify-center">
            <Link
              className={buttonStyles({ variant: "shadow" })}
              href="/projects"
            >
              View My Work
            </Link>
            <Link
              className={buttonStyles({ variant: "bordered" })}
              href="#contact"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-opacity-20 backdrop-blur-sm bg-red/10">
            <CardHeader>
              <h3 className="font-bold text-large">React Web Applications</h3>
            </CardHeader>
            <CardBody>
              <p>
                Building modern, responsive, and fast web applications with
                React, Next.js, and Tailwind CSS.
              </p>
              <img
                alt="React Project"
                src="https://via.placeholder.com/300x200.png?text=React+Project"
              />
            </CardBody>
          </Card>

          <Card className="bg-opacity-20 backdrop-blur-sm bg-red/10">
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
                src="https://via.placeholder.com/300x200.png?text=3D+Design+Project"
              />
            </CardBody>
          </Card>

          <Card className="bg-opacity-20 backdrop-blur-sm bg-red/10">
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
                src="https://via.placeholder.com/300x200.png?text=Mobile+App+Project"
              />
            </CardBody>
          </Card>
        </div>

        {/* Icon Carousel Section */}
        <div className="mt-12 w-full">
          <IconCarousel />
        </div>

        {/* Documentation and GitHub Links */}
        <div className="flex gap-8 mt-12">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={40} />
            GitHub
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
