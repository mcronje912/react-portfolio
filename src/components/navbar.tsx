import { Link, useLocation } from "react-router-dom";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { FaGithub, FaLinkedin, FaLaptopCode } from "react-icons/fa";
import { Tooltip } from "@nextui-org/tooltip";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown"; // For dropdown

import { ThemeSwitch } from "@/components/theme-switch";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/About", label: "About" },
  { href: "/blog", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <NextUINavbar
      className="bg-white/80 dark:bg-blue-800/55 backdrop-blur-sm backdrop-contrast-50 border-b border-info-500/50 shadow-xl"
      maxWidth="xl"
      position="sticky"
    >
      {/* Logo and Brand Name */}
      <NavbarBrand as={Link} className="flex items-center space-x-3" to="/">
        <FaLaptopCode className="text-delft-blue-500 shadow-sm" size={25} />
        <p className="text-primary-600" style={{ fontFamily: "Silkscreen" }}>
          Marco Cronje
        </p>
      </NavbarBrand>

      {/* Main Nav Items */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              className={`${
                location.pathname === item.href
                  ? "text-primary font-bold"
                  : "text-foreground font-normal"
              } transition-colors hover:text-primary`}
              to={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}

        {/* Dropdown Example */}
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <button className="text-foreground hover:text-primary/5">
                More
              </button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="testimonials">
                <Link to="/testimonials">Testimonials</Link>
              </DropdownItem>
              <DropdownItem key="contact">
                <Link to="/contact">Contact</Link>
              </DropdownItem>
              <DropdownItem key="about">
                <Link to="/about">About</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      {/* Icons and Theme Switch */}
      <NavbarContent className="flex items-center space-x-1" justify="end">
        <NavbarItem>
          <Tooltip content="LinkedIn">
            <a
              href="https://linkedin.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin
                className="text-foreground hover:text-primary"
                size={20}
              />
            </a>
          </Tooltip>
        </NavbarItem>

        <NavbarItem>
          <Tooltip content="GitHub">
            <a
              href="https://github.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub
                className="text-foreground hover:text-primary"
                size={20}
              />
            </a>
          </Tooltip>
        </NavbarItem>
        <NavbarItem className="flex items-center">
          <Tooltip content="Switch Theme">
            <ThemeSwitch className="text-foreground hover:text-primary" />
          </Tooltip>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu Toggle */}
      <NavbarMenuToggle className="sm:hidden" />

      {/* Mobile Menu */}
      <NavbarMenu>
        {navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              className={`${
                location.pathname === item.href
                  ? "text-primary font-bold"
                  : "text-foreground font-semibold"
              } w-full transition-colors hover:text-primary`}
              to={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Dropdown>
            <DropdownTrigger>
              <button className="text-foreground hover:text-primary">
                More
              </button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="testimonials">
                <Link to="/testimonials">Testimonials</Link>
              </DropdownItem>
              <DropdownItem key="contact">
                <Link to="/contact">Contact</Link>
              </DropdownItem>
              <DropdownItem key="about">
                <Link to="/about">About</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};

export default Navbar;
