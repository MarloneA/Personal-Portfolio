"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/__ui__/alert-dialog";
import { Button } from "../__ui__/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { IconX } from "@tabler/icons-react";

const Navigation = () => {
  const [isOpen, setisOpen] = useState(false);

  const pathname = usePathname();

  const navItems = [
    { href: "/blogs", label: "writing", match: pathname.includes("/blogs") },
    // { href: "#", label: "courses", match: pathname === "/courses" },
    // { href: "#", label: "community", match: false },
    {
      href: "/projects",
      label: "projects",
      match: pathname.includes("projects"),
    },
    // {
    //   href: "/videos",
    //   label: "videos",
    //   match: pathname.includes("videos"),
    // },
    // { href: "/events", label: "ccommunity-events", match: pathname.includes("events") },
    { href: "/about", label: "about", match: pathname === "/about" },
    { href: "/contact", label: "contact", match: pathname === "/contact" },
  ];

  const getClassName = (match) =>
    cn(
      "border-b-4 border-opacity-0 hover:border-b-4 hover:border-b-black hover:cursor-pointer mx-3",
      match && "!border-b-4 !border-b-black"
    );
  return (
    <div className="flex flex-col justify-between items-center m-auto p-4 lg:p-8 md:pb-8 max-w-screen-2xl">
      <nav className="flex justify-between items-center lg:p-2 pr-[2.1rem] w-full">
        <h1
          className={cn(
            "text-primary underlined block whitespace-nowrap text-[1.2rem] md:text-2xl font-medium transition focus:outline-none border-b-4 border-opacity-0 hover:border-b-4 hover:border-b-black hover:cursor-pointer",
            pathname === "/" && "!border-b-4 !border-b-black"
          )}
        >
          <Link href="/">Port:3000 </Link>
        </h1>

        <ul className="lg:flex lg:justify-around hidden lg:font-semibold lg:capitalize">
          {navItems.map((item, index) => (
            <li key={index} className={getClassName(item.match)}>
              {item.href === "#" ? (
                item.label
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>

        <div className="">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="lg:block lg:border-2 dark:lg:border-white hidden dark:lg:bg-white lg:bg-black hover:bg-accentDark lg:p-[10px] lg:border-black lg:w-[10rem] dark:lg:text-black lg:text-white hover:text-black">
                Hire me!
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Let's work together?</AlertDialogTitle>
                <AlertDialogDescription>
                  You will be redirected to my upwork profile where you can hire
                  me directly on upwork.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="hover:bg-accentDark text-black hover:text-black">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction>
                  <Link
                    target="_blank"
                    href="https://www.upwork.com/freelancers/~01d7d7e3573487f567?s=1110580755057594368"
                  >
                    Continue
                  </Link>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <Button onClick={() => setisOpen(true)} className="lg:hidden">
          <HamburgerMenuIcon />
        </Button>
        {isOpen && (
          <div
            className="top-0 left-0 z-[10000000] absolute flex flex-row-reverse bg-white px-5 w-full min-h-full duration-500"
          >
            <Button
              variant="ghost"
              onClick={() => setisOpen(false)}
              className="m-4"
            >
              <IconX />
            </Button>
            <ul className="flex flex-col justify-evenly w-full h-[50vh] font-semibold capitalize">
              <li
                className={cn(
                  "border-b-4 border-opacity-0 hover:border-b-4 hover:border-b-black hover:cursor-pointer",
                  pathname.includes("/blogs") && "!border-b-4 !border-b-black"
                )}
              >
                <Link
                  className="block"
                  onClick={() => setisOpen(false)}
                  href="/blogs"
                >
                  writing
                </Link>
              </li>
              <li
                className={cn(
                  "border-b-4 border-opacity-0 hover:border-b-4 hover:border-b-black hover:cursor-pointer",
                  pathname === "/courses" && "!border-b-4 !border-b-black"
                )}
              >
                courses
              </li>
              <li className="border-b-4 hover:border-b-4 hover:border-b-black border-opacity-0 hover:cursor-pointer">
                discord
              </li>
              <li
                className={cn(
                  "border-b-4 border-opacity-0 hover:border-b-4 hover:border-b-black hover:cursor-pointer",
                  pathname.includes("projects") && "!border-b-4 !border-b-black"
                )}
              >
                <Link
                  className="block"
                  onClick={() => setisOpen(false)}
                  href="/projects"
                >
                  projects
                </Link>
              </li>
              <li
                className={cn(
                  "border-b-4 border-opacity-0 hover:border-b-4 hover:border-b-black hover:cursor-pointer",
                  pathname === "/about" && "!border-b-4 !border-b-black"
                )}
              >
                <Link
                  className="block"
                  onClick={() => setisOpen(false)}
                  href="/about"
                >
                  about
                </Link>
              </li>
              <li
                className={cn(
                  "border-b-4 border-opacity-0 hover:border-b-4 hover:border-b-black hover:cursor-pointer",
                  pathname === "/contact" && "!border-b-4 !border-b-black"
                )}
              >
                <Link
                  className="block"
                  onClick={() => setisOpen(false)}
                  href="/contact"
                >
                  contact
                </Link>
              </li>

              <li>
                <div className="">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button className="block border-2 dark:border-white bg-black hover:bg-accentDark dark:bg-white p-[10px] border-black w-[10rem] text-white hover:text-black dark:text-black">
                        Hire me!
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Let's work together?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          You will be redirected to my upwork profile where you
                          can hire me directly on upwork.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="hover:bg-accentDark text-black hover:text-black">
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction>
                          <Link
                            target="_blank"
                            href="https://www.upwork.com/freelancers/~01d7d7e3573487f567?s=1110580755057594368"
                          >
                            Continue
                          </Link>
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
