import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Link } from "react-router-dom";
import { Image } from "@nextui-org/image";
import { Smartphone, Database, Bluetooth } from "lucide-react";

import DefaultLayout from "@/layouts/default";

export default function ReevProjectPage() {
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
          <BreadcrumbItem>Reev Electric Scooter</BreadcrumbItem>
        </Breadcrumbs>

        <section className="flex flex-col items-center justify-center gap-8">
          <h1
            className="font-silkscreen text-center text-5xl bg-gradient-to-r from-delft-blue to-turquoise bg-clip-text text-transparent dark:from-turquoise dark:to-magnolia"
            style={{ fontFamily: "Silkscreen" }}
          >
            Reev Electric Scooter
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
                The Reev Electric Scooter App is a companion application
                designed to enhance the user experience of Reev electric scooter
                owners. This app provides real-time information, control
                features, and maintenance insights for the scooter.
              </p>
            </CardBody>
          </Card>

          {/* Key Features */}
          <Card className="max-w-4xl w-full backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <h2 className="text-2xl font-bold">Key Features</h2>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Features List */}
                <div>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Real-time scooter status monitoring</li>
                    <li>Battery level and range estimation</li>
                    <li>GPS tracking and route planning</li>
                    <li>Secure user sign up/log in</li>
                    <li>Remote locking and unlocking</li>
                    <li>Maintenance schedules and notifications</li>
                    <li>Ride history and statistics</li>
                  </ul>
                </div>

                {/* Screenshot */}
                <div className="flex justify-center items-center">
                  <div className="relative w-[280px] h-[560px] overflow-hidden rounded-lg bg-default-100">
                    <Image
                      src="/images/projects/reev/reevhome.png"
                      alt="Reev App Home Screen"
                      className="h-full w-full object-contain p-2"
                      removeWrapper
                    />
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Technology Stack */}
          <Card className="max-w-4xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <h2 className="text-2xl font-bold">Technology Stack</h2>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col gap-6">
                <p className="text-lg">
                  This project is built using cutting-edge technologies to
                  ensure high performance and cross-platform compatibility:
                </p>

                {/* Core Technologies with Icons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-4 rounded-lg bg-default-100 dark:bg-default-50">
                    <div className="w-16 h-16 flex items-center justify-center text-primary mb-3">
                      <Smartphone size={40} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Flutter & Dart
                    </h3>
                    <p className="text-center text-sm text-default-600">
                      Cross-platform mobile development framework
                    </p>
                  </div>

                  <div className="flex flex-col items-center p-4 rounded-lg bg-default-100 dark:bg-default-50">
                    <div className="w-16 h-16 flex items-center justify-center text-primary mb-3">
                      <Database size={40} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Firebase</h3>
                    <p className="text-center text-sm text-default-600">
                      Backend services and real-time database
                    </p>
                  </div>

                  <div className="flex flex-col items-center p-4 rounded-lg bg-default-100 dark:bg-default-50">
                    <div className="w-16 h-16 flex items-center justify-center text-primary mb-3">
                      <Bluetooth size={40} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">BLE</h3>
                    <p className="text-center text-sm text-default-600">
                      Bluetooth Low Energy communication
                    </p>
                  </div>
                </div>

                {/* Additional Technologies */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-3">
                    Additional Technologies
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Google Maps API for location services</li>
                    <li>Secure authentication and user management</li>
                    <li>Real-time GPS tracking integration</li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>
      </div>
    </DefaultLayout>
  );
}
