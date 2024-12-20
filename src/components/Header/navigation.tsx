"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../_ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { IconX } from "@tabler/icons-react";
import { ModeToggle } from "../_ui/theme-toggle";

const NavItem = ({ href, label, match, onClick }) => (
  <li
    className={cn(
      "border-b-4 border-b-transparent hover:border-b-4 hover:border-b-black hover:cursor-pointer mx-3",
      match && "border-b-4 border-b-black dark:border-b-white"
    )}
  >
    {href === "#" ? (
      label
    ) : (
      <Link href={href} onClick={onClick}>
        {label}
      </Link>
    )}
  </li>
);

const MobileNav = ({ navItems, onClose }) => (
  <div className="duration-500 min-h-full max-h-full left-0 top-0 w-full flex flex-row-reverse px-5 bg-white z-[1000] fixed">
    <Button variant="ghost" onClick={onClose} className="m-4">
      <IconX />
    </Button>
    <ul className="flex flex-col w-full h-[50vh] justify-evenly capitalize font-semibold">
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          href={item.href}
          label={item.label}
          match={item.match}
          onClick={onClose}
        />
      ))}
      <li>
        <button className="block w-[10rem] p-[10px] border-2 dark:border-white dark:bg-white border-black bg-black dark:text-black text-white hover:bg-accentDark hover:text-black shadow-[5px_5px_1px_1px_#000000]">
          <Link href="/contact" onClick={onClose}>
            work with me!
          </Link>
        </button>
      </li>
    </ul>
  </div>
);

const Navigation = () => {
  const [isOpen, setisOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/blogs", label: "writing", match: pathname.includes("/blogs") },
    {
      href: "/projects",
      label: "projects",
      match: pathname.includes("projects"),
    },
    { href: "/videos", label: "videos", match: pathname.includes("videos") },
    { href: "/about", label: "about", match: pathname === "/about" },
    { href: "/contact", label: "contact", match: pathname === "/contact" },
  ];

  return (
    <div className="flex flex-col items-center justify-between p-4 md:pb-8 lg:p-8 max-w-screen-2xl m-auto">
      <nav className="flex w-full justify-between items-center lg:p-2">
        <h1
          className={cn(
            "text-primary underlined block whitespace-nowrap text-[1.2rem] md:text-2xl font-medium transition focus:outline-none border-4 !border-black dark:!border-white p-2 hover:cursor-pointer",
            pathname === "/" &&
              "!border-4 p-2 border-black hover:bg-accentDark dark:!border-white dark:hover:text-black"
          )}
        >
          <Link href="/">MA</Link>
        </h1>
        <div className="flex w-full justify-between items-center lg:p-2">
          <ul className="hidden lg:flex lg:justify-around lg:capitalize lg:font-semibold">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                href={item.href}
                label={item.label}
                match={item.match}
              />
            ))}
          </ul>
          <div className="flex justify-items-center items-center">
            <ModeToggle />
            <button className="hidden lg:block lg:w-[10rem] lg:p-[10px] lg:border-2 dark:lg:border-white dark:lg:bg-white lg:border-black lg:bg-black dark:lg:text-black lg:text-white hover:bg-accentDark hover:text-black border-black shadow-[5px_5px_1px_1px_#000000]">
              <a href="/contact">work with me!</a>
            </button>
          </div>
        </div>
        <Button onClick={() => setisOpen(true)} className="lg:hidden">
          <HamburgerMenuIcon />
        </Button>
        {isOpen && (
          <MobileNav navItems={navItems} onClose={() => setisOpen(false)} />
        )}
      </nav>
    </div>
  );
};

export default Navigation;
