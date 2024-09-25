import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  SearchIcon,
} from "@/components/icons";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100 dark:bg-default-50 rounded-md",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className="bg-background/70 dark:bg-background/70 backdrop-blur-md backdrop-saturate-150 z-10"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1 text-lg font-semibold text-primary"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit tracking-wide">ACME</p>
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-6 ml-4">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium hover:text-primary transition-colors"
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-4">
          <Link
            isExternal
            href={siteConfig.links.twitter}
            title="Twitter"
            className="hover:text-primary transition-colors"
          >
            <TwitterIcon className="text-default-500 hover:scale-110 transition-transform" />
          </Link>
          <Link
            isExternal
            href={siteConfig.links.discord}
            title="Discord"
            className="hover:text-primary transition-colors"
          >
            <DiscordIcon className="text-default-500 hover:scale-110 transition-transform" />
          </Link>
          <Link
            isExternal
            href={siteConfig.links.github}
            title="GitHub"
            className="hover:text-primary transition-colors"
          >
            <GithubIcon className="text-default-500 hover:scale-110 transition-transform" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link
          isExternal
          href={siteConfig.links.github}
          className="hover:text-primary transition-colors"
        >
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-background/70 dark:bg-background/70 backdrop-blur-md backdrop-saturate-150">
        <div className="p-4">{searchInput}</div>
        <div className="px-6 py-2 flex flex-col gap-4">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};