"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { useToast } from "../_ui/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const pathname = usePathname();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (data.success) {
      toast({
        title: "Success",
        description: "newsletter subscription has been added",
      });
      setEmail("");
    } else {
      toast({
        title: "oops something went wrong",
        description: "Check email or try again later",
      });
    }
  };

  if (pathname === "/") {
    return "";
  }

  if (pathname === "/contact") {
    return (
      <footer className="flex flex-col justify-between items-center m-auto p-4 lg:p-12 max-w-screen-2xl">
        <div className="flex lg:flex-row flex-col flex-1 mt-20 w-full h-full">
          <div className="w-full lg:w-2/6">
            <h1 className="block py-2 font-medium text-2xl text-primary underlined whitespace-nowrap transition focus:outline-none">
              Marlone Akidiva
            </h1>
            <h1 className="block text-primary text-xl underlined whitespace-nowrap transition focus:outline-none">
              Full time Software Engineer
            </h1>

            <ul className="flex justify-between my-10 w-1/2">
              <li>
                <a href="mailto:marlone.akidiva@gmail.com">
                  <IconBrandGmail />
                </a>
              </li>
              <li>
                <a href="https://github.com/MarloneA">
                  <IconBrandGithub />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@marlonethedev">
                  <IconBrandYoutube />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/marlone-akidiva/">
                  <IconBrandLinkedin />
                </a>
              </li>
              {/* <li>
              <a href="">
                <IconBrandX />
              </a>
            </li> */}
            </ul>
          </div>
          <div className="w-full lg:w-1/6">
            <p className="font-bold">Contact</p>
            <ul className="flex flex-col justify-around h-24">
              <li>
                <a href="mailto:marlone.akidiva@gmail.com">Email Marlone</a>
              </li>
              <li>
                <a href="https://calendly.com/marloneakidiva/30min">
                  Schedule a meeting
                </a>
              </li>
              {/* <li>
                <a href="https://calendly.com/marloneakidiva/30min">
                  Book a slot on calendly
                </a>
              </li> */}
            </ul>
          </div>
          <div className="my-4 w-full lg:w-1/6">
            <p className="pb-2 font-bold">Sitemap</p>
            <ul className="flex lg:flex-col justify-between lg:justify-around lg:h-48">
              <li>
                <Link
                  className="hover:border-b-4 hover:border-b-black"
                  href="/blogs"
                >
                  Writing
                </Link>
              </li>
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
                  href="/videos"
                >
                  Videos
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
              videos and much more!
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className="my-4" htmlFor="">
                  Email
                </label>
                <input
                  className="border-2 p-4 border-black !shadow-[5px_5px_1px_1px_#000000]"
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                className="border-2 bg-black my-4 px-6 p-6 border-black rounded w-full text-white hover:bg-accentDark hover:text-black !shadow-[5px_5px_1px_1px_#000000]"
                type="submit"
              >
                subscribe to newsletter
              </button>
            </form>
          </div>
        </div>
        <div className="pt-24 text-left">
          &copy; Marlone Akidiva 2024. All rights reserved.
        </div>
      </footer>
    );
  }

  return (
    <footer className="flex flex-col justify-between items-center m-auto p-4 lg:p-12 max-w-screen-2xl">
      <h2 className="mt-8 font-semibold dark:font-normal text-dark text-lg md:text-2xl dark:text-light self-start">
        Have a project in mind? Reach out to me 📞 from{" "}
        <Link href="/contact" className="!underline underline-offset-2">
          here
        </Link>{" "}
        and let's make it happen.
      </h2>
      <div className="flex lg:flex-row flex-col flex-1 mt-20 w-full h-full">
        <div className="w-full lg:w-2/6">
          <h1 className="block py-2 font-medium text-2xl text-primary underlined whitespace-nowrap transition focus:outline-none">
            Marlone Akidiva
          </h1>
          <h1 className="block text-primary text-xl underlined whitespace-nowrap transition focus:outline-none">
            Full time Software Engineer
          </h1>

          <ul className="flex justify-between my-10 w-1/2">
            <li>
              <a href="mailto:marlone.akidiva@gmail.com">
                <IconBrandGmail />
              </a>
            </li>
            <li>
              <a href="https://github.com/MarloneA">
                <IconBrandGithub />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@marlonethedev">
                <IconBrandYoutube />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/marlone-akidiva/">
                <IconBrandLinkedin />
              </a>
            </li>
            {/* <li>
              <a href="">
                <IconBrandX />
              </a>
            </li> */}
          </ul>
        </div>
        <div className="w-full lg:w-1/6">
          <p className="font-bold">Contact</p>
          <ul className="flex flex-col justify-around space-y-2">
            <li>
              <a href="mailto:marlone.akidiva@gmail.com">Email Marlone</a>
            </li>
            <li>
              <a href="https://calendly.com/marloneakidiva/30min">
                Schedule a meeting
              </a>
            </li>
            {/* <li>
              <a href="https://calendly.com/marloneakidiva/30min">
                Book a slot on calendly
              </a>
            </li> */}
          </ul>
        </div>
        <div className="my-4 w-full lg:w-1/6">
          <p className="pb-2 font-bold">Sitemap</p>
          <ul className="flex lg:flex-col justify-between lg:justify-around lg:h-48">
            <li>
              <Link className="hover:border-b-4 hover:border-b-black" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:border-b-4 hover:border-b-black"
                href="/blogs"
              >
                Writing
              </Link>
            </li>
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
                href="/videos"
              >
                Videos
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
            Subscribe to the newsletter to stay up to date with articles, videos
            and much more!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="my-4" htmlFor="">
                Email
              </label>
              <input
                className="border-2 p-4 border-black !shadow-[5px_5px_1px_1px_#000000]"
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              className="border-2 bg-black my-4 px-6 p-6 border-black rounded w-full text-white hover:bg-accentDark hover:text-black !shadow-[5px_5px_1px_1px_#000000]"
              type="submit"
            >
              subscribe to newsletter
            </button>
          </form>
        </div>
      </div>
      <div className="pt-24 text-left">
        &copy; Marlone Akidiva 2024. All rights reserved.
      </div>
    </footer>
  );
}
