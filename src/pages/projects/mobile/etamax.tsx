import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Link } from "react-router-dom";

import DefaultLayout from "@/layouts/default";

export default function EtamaxProjectPage() {
  return (
    <DefaultLayout>
      <div className="w-full max-w-7xl mx-auto px-6 py-8">
        {/* Simple Breadcrumb */}
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
          <h1
            className="font-silkscreen text-center text-5xl bg-gradient-to-r from-delft-blue to-turquoise bg-clip-text text-transparent dark:from-turquoise dark:to-magnolia"
            style={{ fontFamily: "Silkscreen" }}
          >
            etamax Intelligent Solar Geyser
          </h1>
          <h2 className="text-2xl text-cyan-500 mt-4">
            Cross-Platform Mobile Application
          </h2>

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
                offering users unprecedented control over their home&apos;s energy
                consumption and costs.
              </p>
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
