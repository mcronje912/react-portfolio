import { Link } from "@nextui-org/link";
import { ReactNode } from "react";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";

import Navbar from "@/components/navbar";

interface LayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

export default function DefaultLayout({
  children,
  showSidebar = false,
}: LayoutProps) {
  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-light dark:bg-gradient-dark">
      <div className="absolute inset-0 bg-pattern-light dark:bg-pattern-dark opacity-80 bg-fixed" />
      <Navbar />
      <div className="flex flex-grow pt-16 relative z-10">
        {showSidebar && (
          <aside className="w-64 bg-gray-200 dark:bg-gray-800 p-6">
            <nav className="flex flex-col space-y-4">
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/profile">Profile</Link>
              <Link href="/settings">Settings</Link>
            </nav>
          </aside>
        )}
        <main
          className={`flex-grow container mx-auto max-w-7xl px-6 ${
            showSidebar ? "pl-6" : ""
          }`}
        >
          {children}
        </main>
      </div>
      <footer className="w-full flex items-center justify-center py-3 relative z-10">
        <div className="mt-20">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Contact me at <Code color="primary">marcocronje@gmail.com</Code>
            </span>
          </Snippet>
        </div>
      </footer>
    </div>
  );
}
