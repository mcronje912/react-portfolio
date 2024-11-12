import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import {
  FaMobile,
  FaCode,
  FaMicrochip,
  FaChartBar,
  FaCloud,
  FaPaintBrush,
  FaServer,
} from "react-icons/fa";

import DefaultLayout from "@/layouts/default";

// Easily customizable props for skill chips
const skillChipProps = {
  color: "secondary" as
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger",
  variant: "flat" as
    | "flat"
    | "solid"
    | "bordered"
    | "light"
    | "faded"
    | "shadow",
};

// Centralized icon styling
const iconStyle = {
  "--icon-size": "30px",
  "--icon-opacity": "0.20",
  "--icon-padding": "10px",
  "--icon-gradient-from": "#42a5f5",
  "--icon-gradient-to": "#42d5f5",
};

interface Skill {
  name: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
  icon: React.ElementType;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Mobile Development",
    skills: [
      { name: "Flutter/Dart" },
      { name: "React Native" },
      { name: "Android/iOS" },
    ],
    icon: FaMobile,
  },
  {
    name: "Web Development",
    skills: [
      { name: "React/Next.js" },
      { name: "JavaScript/TypeScript" },
      { name: "HTML/CSS" },
      { name: "Digital Marketing & E-commerce" },
    ],
    icon: FaCode,
  },
  {
    name: "IoT & Hardware",
    skills: [
      { name: "IoT Development" },
      { name: "3D Product Design" },
      { name: "Bluetooth Integration" },
      { name: "ESP32/Arduino" },
      { name: "STM32" },
      { name: "Prototype Development" },
      { name: "Electronics Manufacturing" },
    ],
    icon: FaMicrochip,
  },
  {
    name: "Data Science",
    skills: [
      { name: "Data Analytics" },
      { name: "Interactive Reports" },
      { name: "Database Management" },
      { name: "Automated Reporting" },
      { name: "Python & SQL" },
    ],
    icon: FaChartBar,
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "Cloud Integration" },
      { name: "Git Version Control" },
      { name: "Serverless Functions" },
    ],
    icon: FaCloud,
  },
  {
    name: "UI/UX & Graphic Design",
    skills: [{ name: "Figma" }, { name: "Photoshop" }, { name: "Illustrator" }],
    icon: FaPaintBrush,
  },
  {
    name: "Backend Services",
    skills: [
      { name: "Firebase" },
      { name: "SendGrid API" },
      { name: "QuickChart.io" },
    ],
    icon: FaServer,
  },
];

const interests = [
  "Mobile App Development",
  "IoT Innovation",
  "3D Modeling",
  "Sustainable Technology",
  "Continuous Learning",
  "Data-Driven Solutions",
];

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
        <h1
          className="font-silkscreen text-5xl bg-gradient-to-r from-delft-blue to-turquoise bg-clip-text text-transparent dark:from-turquoise dark:to-magnolia"
          style={{ fontFamily: "Silkscreen" }}
        >
          About Me
        </h1>

        {/* Introduction */}
        <Card className="max-w-4xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700">
          <CardBody>
            <p className="text-lg">
              I&apos;m Marco Cronje, a Director of Mobile App Development and
              IoT Integration based in Johannesburg, South Africa. With over 14
              years of experience in graphics, branding and electronics
              manufacturing, I&apos;ve successfully transitioned into leading
              cross-platform mobile development projects, showcasing my
              adaptability and passion for software-hardware communication.
            </p>
          </CardBody>
        </Card>

        {/* Skills Showcase */}
        <Card className="max-w-4xl w-full backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700">
          <CardHeader>
            <h2 className="text-2xl font-bold">Skills</h2>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillCategories.map((category, index) => (
                <Card
                  key={index}
                  className="bg-white/50 dark:bg-gray-800/50 overflow-hidden"
                >
                  <CardHeader className="relative z-10">
                    <h3 className="text-lg font-semibold">{category.name}</h3>
                  </CardHeader>
                  <CardBody className="relative z-10">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Chip key={skillIndex} {...skillChipProps}>
                          {skill.name}
                        </Chip>
                      ))}
                    </div>
                  </CardBody>
                  <div
                    className="absolute top-0 right-0 h-full flex items-top"
                    style={{
                      ...iconStyle,
                      padding: "var(--icon-padding)",
                    }}
                  >
                    <category.icon
                      style={{
                        width: "var(--icon-size)",
                        height: "var(--icon-size)",
                        opacity: "var(--icon-opacity)",
                        fill: "url(#gradient)",
                      }}
                    />
                    <svg height="0" width="0">
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          x2="100%"
                          y1="0%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="var(--icon-gradient-from)"
                          />
                          <stop
                            offset="100%"
                            stopColor="var(--icon-gradient-to)"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </Card>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Personal Touch */}
        <Card className="max-w-4xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700">
          <CardHeader>
            <h2 className="text-2xl font-bold">What Drives Me</h2>
          </CardHeader>
          <CardBody>
            <p className="mb-4">
              I&apos;m passionate about bridging the gap between hardware and
              software, delivering efficient and cost-saving solutions for IoT
              systems. My drive for innovation and continuous learning keeps me
              at the forefront of technological advancements, especially in
              data-driven solutions and automated processes.
            </p>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <Chip key={index} color="primary" variant="faded">
                  {interest}
                </Chip>
              ))}
            </div>
          </CardBody>
        </Card>
      </section>
    </DefaultLayout>
  );
}