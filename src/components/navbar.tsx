import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { FaGithub, FaLinkedin, FaRocket } from 'react-icons/fa'; // Icon import
import { ThemeSwitch } from "@/components/theme-switch"; // Import your theme switch
import { Tooltip } from "@nextui-org/tooltip";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className="bg-primary-400/50 dark:bg-secondary-100/50 backdrop-blur-sm backdrop-brightness-90 border-b border-info-500/50 shadow-lg"
    >
      <NavbarBrand as={Link} to="/">
        {/* Replace with valid link */}
        <FaRocket size={30} className="mr-2" />
        <p className="font-bold text-xl">Marco Cronje</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              to={item.href}
              className={`${
                location.pathname === item.href
                  ? "text-primary"
                  : "text-foreground"
              } transition-colors hover:text-primary`}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Tooltip content="LinkedIn">
            {/* Corrected: Used "#" as href placeholder */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={25} className="text-foreground hover:text-primary" />
            </a>
          </Tooltip>
        </NavbarItem>
        <NavbarItem>
          <Tooltip content="GitHub">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub size={25} className="text-foreground hover:text-primary" />
            </a>
          </Tooltip>
        </NavbarItem>
        <NavbarItem>
          <Tooltip content="Switch Theme">
            {/* Fixed: Removed invalid size prop */}
            <ThemeSwitch className="text-foreground hover:text-primary" />
          </Tooltip>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle className="sm:hidden" />
      <NavbarMenu>
        {navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              to={item.href}
              className={`${
                location.pathname === item.href
                  ? "text-primary"
                  : "text-foreground"
              } w-full transition-colors hover:text-primary`}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};

export default Navbar;
