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
    <div className="relative min-h-screen flex flex-col">
      <div className="fixed inset-0 bg-gradient-light dark:bg-gradient-dark" />
      <div className="fixed inset-0 bg-pattern-light dark:bg-pattern-dark opacity-10" />
      <div className="relative flex flex-col flex-grow z-10">
        <Navbar />
        <div className="flex flex-grow pt-16">
          {showSidebar && (
            <aside className="w-64 bg-magnolia dark:bg-delft-blue p-6">
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
        <footer className="w-full flex items-center justify-center py-3 bg-magnolia dark:bg-delft-blue">
          <div className="mt-20">
            <Snippet hideCopyButton hideSymbol variant="bordered">
              <span>
                Get in touch <Code color="primary">marcocronje@gmail.com</Code>
              </span>
            </Snippet>
          </div>
        </footer>
      </div>
    </div>
  );
}