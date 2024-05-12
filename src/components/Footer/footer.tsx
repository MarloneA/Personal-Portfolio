"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/") {
    return "";
  }

  return (
    <footer className="flex flex-col items-center justify-between p-4 lg:p-12 max-w-screen-2xl m-auto">
      <div className="h-full w-full flex flex-col lg:flex-row flex-1 mt-20 ">
        <div className="w-full lg:w-2/6">
          <h1 className="text-primary underlined block whitespace-nowrap text-2xl font-medium transition focus:outline-none py-2">
            Marlone Akidiva
          </h1>
          <h1 className="text-primary underlined block whitespace-nowrap text-xl transition focus:outline-none">
            Full time Software Engineer
          </h1>

          <ul className="my-10 flex w-3/4 justify-between">
            <li>
              <a href="">
                <IconBrandGmail />
              </a>
            </li>
            <li>
              <a href="">
                <IconBrandGithub />
              </a>
            </li>
            <li>
              <a href="">
                <IconBrandYoutube />
              </a>
            </li>
            <li>
              <a href="">
                <IconBrandLinkedin />
              </a>
            </li>
            <li>
              <a href="">
                <IconBrandTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/6">
          <p className="font-bold">Contact</p>
          <ul className="flex flex-col justify-around h-24">
            <li>Email Marlone</li>
            <li>Schedule a zoom call</li>
            <li>Book a slot on Calendly</li>
          </ul>

          {/* <p className="font-bold mt-10">General</p>
          <ul className="flex flex-col justify-around h-48">
            <li>Blog</li>
            <li>Courses</li>
            <li>Discord</li>
            <li>Projects</li>
            <li>About</li>
          </ul> */}
        </div>
        <div className="w-full lg:w-1/6 my-4">
          <p className="font-bold pb-2">Sitemap</p>
          <ul className="flex lg:flex-col justify-between lg:justify-around lg:h-48">
            <li>
              <Link
                className="hover:border-b-4 hover:border-b-black"
                href="/blogs"
              >
                Writing
              </Link>
            </li>
            <li>Courses</li>
            <li>Discord</li>
            <li>
              <Link
                className="hover:border-b-4 hover:border-b-black"
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="hover:border-b-4 hover:border-b-black"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:border-b-4 hover:border-b-black"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-2/6">
          <p className="font-bold">Stay up to date</p>
          <p>
            Subscribe to the newsletter to stay up to date with articles,
            courses and much more!
          </p>
          <form action="">
            <div className="flex flex-col">
              <label className="my-4" htmlFor="">
                First name
              </label>
              <input className="border-2 border-black p-4" type="text" />
            </div>
            <div className="flex flex-col">
              <label className="my-4" htmlFor="">
                Email
              </label>
              <input className="border-2 border-black p-4" type="text" />
            </div>
            <button className="w-full border-2 border-black bg-black px-6 text-white rounded p-6 my-4">
              sign me up
            </button>
          </form>
        </div>
      </div>
      <div className="text-left pt-24">
        All rights reserved c Marlone Akidiva 2024
      </div>
    </footer>
  );
}
