"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
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
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { IconX } from "@tabler/icons-react";

const Navigation = () => {
  const [isOpen, setisOpen] = useState(false);

  const pathname = usePathname();
  return (
    <div className="flex flex-col items-center justify-between p-4 md:pb-8 lg:p-8 max-w-screen-2xl m-auto">
      <nav className="flex w-full justify-between items-center lg:p-2">
        <h1
          className={cn(
            "text-primary underlined block whitespace-nowrap text-[1.2rem] md:text-2xl font-medium transition focus:outline-none border-b-4 border-opacity-0 hover:border-b-4 hover:border-b-black hover:cursor-pointer",
            pathname === "/" && "!border-b-4 !border-b-black"
          )}
        >
          <Link href="/">Marlone Akidiva </Link>
        </h1>
        <ul className="hidden lg:flex lg:justify-around lg:w-[30rem] lg:capitalize lg:font-semibold ">
          <li
            className={cn(
              "border-b-4 border-opacity-0 hover:border-b-4 hover:border-b-black hover:cursor-pointer",
              pathname.includes("/blogs") && "!border-b-4 !border-b-black"
            )}
          >
            <Link href="/blogs">writing</Link>
          </li>
          <li
            className={cn(
              "border-b-4 border-opacity-0 hover:border-b-4 hover:border-b-black hover:cursor-pointer",
              pathname === "/courses" && "!border-b-4 !border-b-black"
            )}
          >
            courses
          </li>
          <li className="border-b-4 border-opacity-0 hover:border-b-4 hover:border-b-black hover:cursor-pointer">
            discord
          </li>
          <li
            className={cn(
              "border-b-4 border-opacity-0 hover:border-b-4 hover:border-b-black hover:cursor-pointer",
              pathname.includes("projects") && "!border-b-4 !border-b-black"
            )}
          >
            <Link href="/projects">projects</Link>
          </li>
          <li
            className={cn(
              "border-b-4 border-opacity-0 hover:border-b-4 hover:border-b-black hover:cursor-pointer",
              pathname === "/about" && "!border-b-4 !border-b-black"
            )}
          >
            <Link href="/about">about</Link>
          </li>
          <li
            className={cn(
              "border-b-4 border-opacity-0 hover:border-b-4 hover:border-b-black hover:cursor-pointer",
              pathname === "/contact" && "!border-b-4 !border-b-black"
            )}
          >
            <Link href="/contact">contact</Link>
          </li>
        </ul>

        <div className="">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="hidden lg:block lg:w-[10rem] lg:p-[10px] lg:border-2 dark:lg:border-white dark:lg:bg-white  lg:border-black lg:bg-black dark:lg:text-black lg:text-white  hover:bg-accentDark hover:text-black">
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
                <AlertDialogCancel className="  text-black  hover:bg-accentDark hover:text-black">
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
            className="duration-500 absolute min-h-full  
          left-0 top-0 w-full  
          flex flex-row-reverse px-5 bg-white z-[10000000]"
          >
            <Button
              variant="ghost"
              onClick={() => setisOpen(false)}
              className="m-4"
            >
              <IconX />
            </Button>
            <ul className="flex flex-col  w-full h-[50vh] justify-evenly capitalize font-semibold ">
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
              <li className="border-b-4 border-opacity-0 hover:border-b-4 hover:border-b-black hover:cursor-pointer">
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
                      <button className="block w-[10rem] p-[10px] border-2 dark:border-white dark:bg-white  border-black bg-black dark:text-black text-white  hover:bg-accentDark hover:text-black">
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
                        <AlertDialogCancel className="  text-black  hover:bg-accentDark hover:text-black">
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
