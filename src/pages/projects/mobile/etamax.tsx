import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Link } from "react-router-dom";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import DefaultLayout from "@/layouts/default";

export default function EtamaxProjectPage() {
  const adminScreenshots = [
    {
      src: "/images/projects/etamax/adminlogin.png",
      alt: "Admin Login Interface",
      caption: "Secure Admin Login - Controlled access to system management",
    },
    {
      src: "/images/projects/etamax/adminpanel.png",
      alt: "Admin Control Panel",
      caption:
        "Comprehensive Admin Dashboard - Complete system overview and control",
    },
    {
      src: "/images/projects/etamax/devicedetails.png",
      alt: "Device Details View",
      caption:
        "Detailed Device Information - In-depth device monitoring and settings",
    },
    {
      src: "/images/projects/etamax/devicehistory.png",
      alt: "Device History",
      caption:
        "Historical Device Data - Track and analyze device performance over time",
    },
    {
      src: "/images/projects/etamax/livedata.png",
      alt: "Live Data Monitoring",
      caption:
        "Real-time Data Monitoring - Live tracking of system performance",
    },
    {
      src: "/images/projects/etamax/pdfreport.png",
      alt: "PDF Report Generation",
      caption: "Automated PDF Reports - Detailed system analysis and reporting",
    },
    {
      src: "/images/projects/etamax/supportpage.png",
      alt: "Support Interface",
      caption:
        "Customer Support Portal - Streamlined support and troubleshooting",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % adminScreenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? adminScreenshots.length - 1 : prev - 1,
    );
  };

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
              <h2 className="text-2xl font-bold">
                User Interface & Experience
              </h2>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                          {/* Key Features */}
          <div className="max-w-4xl w-full backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700">

              <h2 className="text-2xl font-bold">Key Features</h2>

              <ul className="list-disc list-inside space-y-2">
                <li>
                  Real-time monitoring of geyser temperature and energy
                  consumption
                </li>
                <li>Smart scheduling for optimal energy usage</li>
                <li>User-friendly interface for easy system control</li>
                <li>Energy savings calculations and usage statistics</li>
                <li>
                  Automated alerts for system maintenance and potential issues
                </li>
                <li>Multi-device support for household-wide access</li>
              </ul>

          </div>
                {/* Description Section */}
                <div className="flex flex-col space-y-4">
                  <h3 className="text-xl font-semibold text-primary">
                    Intuitive User Experience
                  </h3>
                  <p className="text-lg">
                    The user interface is thoughtfully designed to make solar
                    geyser management accessible to all users, regardless of
                    their technical expertise. Key UI/UX features include:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Dynamic temperature gauge with real-time updates</li>
                    <li>
                      Simple scheduling interface with drag-and-drop
                      functionality
                    </li>
                    <li>
                      Solar power generated versus grid power consumed (kWh)
                    </li>
                    <li>Convenient scheduling and timers to suppliment solar heating with grid when required</li>
                    <li>Offline functionality for core features</li>
                  </ul>

                  <div className="mt-4 space-y-2">
                    <h4 className="text-lg font-semibold">
                      User-Centric Design
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Material Design 3 implementation for modern, familiar UI
                        patterns
                      </li>
                      <li>
                        Responsive layouts adapting to different screen sizes
                      </li>
                      <li>Haptic feedback for important actions</li>
                      <li>Animated transitions for better visual feedback</li>
                      <li>Clear error states and recovery options</li>
                      <li>Contextual help and tooltips</li>
                    </ul>
                  </div>

                  <div className="mt-4 space-y-2">
                    <h4 className="text-lg font-semibold">Smart Features</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Energy-saving recommendations</li>
                      <li>Usage history visualization</li>
                      <li>Leak detection alert - notifies the user as well as maintenance staff in case a leak has been detected</li>
                    </ul>
                  </div>
                </div>

                {/* Screenshots Section - Similar structure to Admin Interface */}
                <div className="relative w-full flex flex-col items-center">
                  {/* Add your front-end screenshots carousel here, similar to the admin interface carousel */}
                  <div className="relative w-[280px] h-[560px] overflow-hidden rounded-lg bg-default-100">
                    <Image
                      src="/images/projects/etamax/main-dashboard.png"
                      alt="Main User Dashboard"
                      className="h-full w-full object-contain p-2"
                      removeWrapper
                    />
                    <div className="absolute bottom-0 w-full bg-black/30 text-white p-3 backdrop-blur-lg">
                      <p className="text-center text-sm font-medium">
                        Main user dashboard with key controls and statistics
                      </p>
                    </div>
                  </div>

                  {/* Note: You'll need to add your user interface screenshots similar to how adminScreenshots is implemented */}
                </div>
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
                    monitoring and control over the entire Etamax ecosystem. Key
                    administrative features include:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Secure admin authentication system</li>
                    <li>Real-time device monitoring dashboard</li>
                    <li>Historical data analysis and reporting</li>
                    <li>User management and access control</li>
                    <li>
                      Easily identify issues and schedule maintenance where
                      required
                    </li>
                    <li>Automated PDF report generation</li>
                    <li>Customer support ticket management</li>
                  </ul>
                  <p className="text-lg mt-4">
                    The interface is designed with a focus on efficiency and
                    ease of use, allowing administrators to manage multiple
                    devices and users effectively.
                  </p>
                </div>

                {/* Carousel Section */}
                <div className="relative w-full flex flex-col items-center">
                  <div className="flex items-center gap-8">
                    {/* Left Button */}
                    <Button
                      isIconOnly
                      className="bg-black/30 text-white hover:bg-black/50 backdrop-blur-lg"
                      onClick={prevSlide}
                      size="lg"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={24} />
                    </Button>

                    {/* Main Image Container */}
                    <div className="relative w-[280px] h-[560px] overflow-hidden rounded-lg bg-default-100">
                      <Image
                        src={adminScreenshots[currentIndex].src}
                        alt={adminScreenshots[currentIndex].alt}
                        className="h-full w-full object-contain p-2"
                        removeWrapper
                      />

                      {/* Caption */}
                      <div className="absolute bottom-0 w-full bg-black/30 text-white p-3 backdrop-blur-lg">
                        <p className="text-center text-sm font-medium">
                          {adminScreenshots[currentIndex].caption}
                        </p>
                      </div>
                    </div>

                    {/* Right Button */}
                    <Button
                      isIconOnly
                      className="bg-black/30 text-white hover:bg-black/50 backdrop-blur-lg"
                      onClick={nextSlide}
                      size="lg"
                      aria-label="Next image"
                    >
                      <ChevronRight size={24} />
                    </Button>
                  </div>

                  {/* Centered Thumbnails */}
                  <div className="mt-4 w-full max-w-[400px] mx-auto">
                    <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar justify-center">
                      {adminScreenshots.map((screenshot, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
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
              </div>
            </CardBody>
          </Card>

          {/* Key Features */}
          <Card className="max-w-4xl w-full backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <h2 className="text-2xl font-bold">Key Features</h2>
            </CardHeader>
            <CardBody>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Real-time monitoring of solar geyser temperature and energy
                  consumption
                </li>
                <li>Smart scheduling for optimal energy usage</li>
                <li>
                  Integration with weather forecasts for predictive heating
                </li>
                <li>User-friendly interface for easy system control</li>
                <li>Energy savings calculations and usage statistics</li>
                <li>
                  Automated alerts for system maintenance and potential issues
                </li>
                <li>Multi-device support for household-wide access</li>
              </ul>
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
