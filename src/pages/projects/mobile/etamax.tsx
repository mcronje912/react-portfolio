import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Link } from "react-router-dom";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import DefaultLayout from "@/layouts/default";

interface Screenshot {
  src: string;
  alt: string;
  caption: string;
}

interface CarouselProps {
  images: Screenshot[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onThumbnailClick: (index: number) => void;
}

export default function EtamaxProjectPage() {
  const userInterfaceScreenshots: Screenshot[] = [
    {
      src: "/images/projects/etamax/main-dashboard.png",
      alt: "Main Dashboard",
      caption: "Intuitive dashboard with real-time monitoring and controls"
    },
    {
      src: "/images/projects/etamax/scheduling.png",
      alt: "Scheduling Interface",
      caption: "Smart scheduling with drag-and-drop functionality"
    },
    {
      src: "/images/projects/etamax/gauges.png",
      alt: "Dynamic Gauges",
      caption: "Live temperature and energy consumption monitoring"
    },
    {
      src: "/images/projects/etamax/settings.png",
      alt: "User Settings",
      caption: "Customizable user preferences and system settings"
    }
  ];

  const adminScreenshots: Screenshot[] = [
    {
      src: "/images/projects/etamax/adminlogin.png",
      alt: "Admin Login Interface",
      caption: "Secure Admin Login - Controlled access to system management"
    },
    {
      src: "/images/projects/etamax/adminpanel.png",
      alt: "Admin Control Panel",
      caption: "Comprehensive Admin Dashboard - Complete system overview and control"
    },
    {
      src: "/images/projects/etamax/devicedetails.png",
      alt: "Device Details View",
      caption: "Detailed Device Information - In-depth device monitoring and settings"
    },
    {
      src: "/images/projects/etamax/devicehistory.png",
      alt: "Device History",
      caption: "Historical Device Data - Track and analyze device performance over time"
    },
    {
      src: "/images/projects/etamax/livedata.png",
      alt: "Live Data Monitoring",
      caption: "Real-time Data Monitoring - Live tracking of system performance"
    },
    {
      src: "/images/projects/etamax/pdfreport.png",
      alt: "PDF Report Generation",
      caption: "Automated PDF Reports - Detailed system analysis and reporting"
    },
    {
      src: "/images/projects/etamax/supportpage.png",
      alt: "Support Interface",
      caption: "Customer Support Portal - Streamlined support and troubleshooting"
    }
  ];

  const [userInterfaceIndex, setUserInterfaceIndex] = useState(0);
  const [adminIndex, setAdminIndex] = useState(0);

  const nextUserSlide = () => {
    setUserInterfaceIndex((prev) => (prev + 1) % userInterfaceScreenshots.length);
  };

  const prevUserSlide = () => {
    setUserInterfaceIndex((prev) =>
      prev === 0 ? userInterfaceScreenshots.length - 1 : prev - 1
    );
  };

  const nextAdminSlide = () => {
    setAdminIndex((prev) => (prev + 1) % adminScreenshots.length);
  };

  const prevAdminSlide = () => {
    setAdminIndex((prev) =>
      prev === 0 ? adminScreenshots.length - 1 : prev - 1
    );
  };

  const ImageCarousel: React.FC<CarouselProps> = ({ 
    images, 
    currentIndex, 
    onPrev, 
    onNext, 
    onThumbnailClick 
  }) => (
    <div className="relative w-full flex flex-col items-center">
      <div className="flex items-center gap-8">
        <Button
          isIconOnly
          className="bg-black/30 text-white hover:bg-black/50 backdrop-blur-lg"
          onClick={onPrev}
          size="lg"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </Button>

        <div className="relative w-[280px] h-[560px] overflow-hidden rounded-lg bg-default-100">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="h-full w-full object-contain p-2"
            removeWrapper
          />
          <div className="absolute bottom-0 w-full bg-black/30 text-white p-3 backdrop-blur-lg">
            <p className="text-center text-sm font-medium">
              {images[currentIndex].caption}
            </p>
          </div>
        </div>

        <Button
          isIconOnly
          className="bg-black/30 text-white hover:bg-black/50 backdrop-blur-lg"
          onClick={onNext}
          size="lg"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </Button>
      </div>

      <div className="mt-4 w-full max-w-[400px] mx-auto">
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar justify-center">
          {images.map((screenshot: Screenshot, index: number) => (
            <button
              key={index}
              onClick={() => onThumbnailClick(index)}
              className={`flex-shrink-0 snap-center transition-all duration-200 ${
                currentIndex === index
                  ? "ring-2 ring-primary scale-105"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={screenshot.src}
                alt={`Thumbnail ${index + 1}`}
                className="h-24 w-auto object-cover rounded-md"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <DefaultLayout>
      <div className="w-full max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs className="mb-12" size="sm" variant="bordered">
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/projects">Projects</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>etamax</BreadcrumbItem>
        </Breadcrumbs>

        <section className="flex flex-col items-center justify-center gap-8">
          {/* Title Section */}
          <div className="text-center">
            <h1
              className="font-silkscreen text-center text-5xl bg-gradient-to-r from-delft-blue to-turquoise bg-clip-text text-transparent dark:from-turquoise dark:to-magnolia"
              style={{ fontFamily: "Silkscreen" }}
            >
              etamax Intelligent Solar Geyser
            </h1>
            <h2 className="text-2xl text-cyan-500 mt-4">
              Cross-Platform Mobile Application
            </h2>
          </div>

          {/* Project Overview */}
          <Card className="max-w-4xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <h2 className="text-2xl font-bold">Project Overview</h2>
            </CardHeader>
            <CardBody>
              <p className="text-lg">
                Etamax is an innovative smart home product designed to
                revolutionize residential water heating. This cutting-edge
                device enables geysers to be powered dynamically by either solar
                or AC power, resulting in significant reductions in energy
                consumption for water heating. As an integral part of the Etamax
                system, I developed a comprehensive mobile application that
                communicates with the Etamax hardware via Bluetooth. This app
                provides users with real-time control and monitoring
                capabilities, allowing homeowners to optimize their water
                heating efficiency and manage energy usage conveniently from
                their smartphones. The project demonstrates the powerful
                combination of IoT technology and renewable energy solutions,
                offering users unprecedented control over their home&apos;s
                energy consumption and costs.
              </p>
            </CardBody>
          </Card>

          {/* User Interface Section */}
          <Card className="max-w-4xl w-full backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <h2 className="text-2xl font-bold">User Interface & Experience</h2>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Description Section */}
                <div className="flex flex-col space-y-4">
                  <h3 className="text-xl font-semibold text-primary">
                    Intuitive User Experience
                  </h3>
                  <p className="text-lg">
                    The user interface is thoughtfully designed to make solar geyser 
                    management accessible and efficient. Core features include:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Dynamic temperature gauge with real-time updates</li>
                    <li>Solar vs grid power consumption tracking</li>
                    <li>Smart scheduling with automatic solar optimization</li>
                    <li>Energy savings monitoring and reporting</li>
                    <li>Instant leak detection alerts</li>
                    <li>Offline functionality for critical features</li>
                  </ul>

                  <div className="mt-4 space-y-2">
                    <h4 className="text-lg font-semibold">Technical Implementation</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Material Design 3 with custom theming</li>
                      <li>Responsive layouts for all screen sizes</li>
                      <li>Interactive data visualizations</li>
                      <li>Smooth animations and transitions</li>
                      <li>Robust error handling and recovery</li>
                      <li>Context-aware help system</li>
                    </ul>
                  </div>
                </div>

                {/* User Interface Carousel */}
                <ImageCarousel
                  images={userInterfaceScreenshots}
                  currentIndex={userInterfaceIndex}
                  onPrev={prevUserSlide}
                  onNext={nextUserSlide}
                  onThumbnailClick={setUserInterfaceIndex}
                />
              </div>
            </CardBody>
          </Card>

          {/* Admin Interface Section */}
          <Card className="max-w-4xl w-full backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <h2 className="text-2xl font-bold">Admin Interface</h2>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Description Section */}
                <div className="flex flex-col space-y-4">
                  <h3 className="text-xl font-semibold text-primary">
                    Powerful Administrative Control
                  </h3>
                  <p className="text-lg">
                    The admin interface provides stakeholders comprehensive
                    monitoring and control over the entire Etamax ecosystem:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Secure admin authentication system</li>
                    <li>Real-time device monitoring dashboard</li>
                    <li>Historical data analysis and reporting</li>
                    <li>User management and access control</li>
                    <li>Maintenance scheduling and tracking</li>
                    <li>Automated PDF report generation</li>
                    <li>Customer support ticket management</li>
                  </ul>
                </div>

                {/* Admin Interface Carousel */}
                <ImageCarousel
                  images={adminScreenshots}
                  currentIndex={adminIndex}
                  onPrev={prevAdminSlide}
                  onNext={nextAdminSlide}
                  onThumbnailClick={setAdminIndex}
                />
              </div>
            </CardBody>
          </Card>

          {/* Technology Stack */}
          <Card className="max-w-4xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <h2 className="text-2xl font-bold">Technology Stack</h2>
            </CardHeader>
            <CardBody>
              <p className="text-lg">
                This project leverages a modern tech stack to ensure high
                performance, cross-platform compatibility, and seamless IoT
                integration:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Flutter and Dart for cross-platform mobile development</li>
                <li>Firebase for real-time database and cloud functions</li>
                <li>Google Cloud Platform for backend services</li>
                <li>BigQuery for data analytics and reporting</li>
                <li>Looker Studio for data visualization</li>
                <li>SendGrid API for instant email alerts</li>
                <li>Bluetooth Low Energy (BLE) for device communication</li>
              </ul>
            </CardBody>
          </Card>

          {/* Project Achievements */}
          <Card className="max-w-4xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <h2 className="text-2xl font-bold">Project Achievements</h2>
            </CardHeader>
            <CardBody>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Implemented secure BLE pairing and data synchronization
                  between the mobile app and etamax hardware (STM32/HM11 based)
                </li>
                <li>
                  Created a visually appealing and intuitive user interface with
                  dynamic gauges and controls for easy system management
                </li>
                <li>
                  Integrated automated database management and reporting via
                  Cloud Functions, BigQuery, and Looker Studio for advanced data
                  analytics
                </li>
                <li>
                  Developed a robust system for real-time monitoring and control
                  of solar geyser operations
                </li>
                <li>
                  Contributing to sustainable energy usage by optimizing solar
                  power utilization in residential water heating
                </li>
                <li>
                  Pioneering smart home technology in the renewable energy
                  sector, with ongoing discoveries of its impact on energy
                  consumption patterns and cost savings for users
                </li>
              </ul>
            </CardBody>
          </Card>
        </section>
      </div>
    </DefaultLayout>
  );
}