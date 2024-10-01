import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Link } from "react-router-dom";

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
              <ul className="list-disc list-inside space-y-2">
                <li>Real-time scooter status monitoring</li>
                <li>Battery level and range estimation</li>
                <li>GPS tracking and route planning</li>
                <li>Secure user sign up/log in</li>
                <li>Remote locking and unlocking</li>
                <li>Maintenance schedules and notifications</li>
                <li>Ride history and statistics</li>
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
                This project is built using cutting-edge technologies to ensure
                high performance and cross-platform compatibility:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Flutter for cross-platform mobile development</li>
                <li>Dart programming language</li>
                <li>Firebase for backend services and real-time database</li>
                <li>Google Maps API for location services</li>
                <li>Bluetooth Low Energy (BLE) for scooter communication</li>
              </ul>
            </CardBody>
          </Card>
        </section>
      </div>
    </DefaultLayout>
  );
}
