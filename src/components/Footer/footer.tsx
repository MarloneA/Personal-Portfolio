"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { useToast } from "../__ui__/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const pathname = usePathname();
  const { toast } = useToast();

  if (pathname === "/") {
    return "";
  }

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

  return (
    <footer className="flex flex-col items-center justify-between p-4 lg:p-12 max-w-screen-2xl m-auto">
      {pathname !== "/contact" && (
        <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start text-dark dark:text-light dark:font-normal">
          Have a project in mind? Reach out to me 📞 from{" "}
          <Link href="/contact" className="!underline underline-offset-2">
            here
          </Link>{" "}
          and let's make it happen.
        </h2>
      )}
      <div className="h-full w-full flex flex-col lg:flex-row flex-1 mt-20 ">
        <div className="w-full lg:w-2/6">
          <h1 className="text-primary underlined block whitespace-nowrap text-2xl font-medium transition focus:outline-none py-2">
            Marlone Akidiva
          </h1>
          <h1 className="text-primary underlined block whitespace-nowrap text-xl transition focus:outline-none">
            Full time Software Engineer
          </h1>

          <ul className="my-10 flex w-1/2 justify-between">
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
                Schedule a zoom call
              </a>
            </li>
            <li>
              <a href="https://calendly.com/marloneakidiva/30min">
                Book a slot on calendly
              </a>
            </li>
          </ul>
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
            {/* <li>Courses</li>
            <li>Discord</li>*/}
            {/* <li>
              <Link
                className="hover:border-b-4 hover:border-b-black"
                href="/projects"
              >
                Projects
              </Link>
            </li> */}
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
            courses and much more!
          </p>
          <form onSubmit={handleSubmit}>
            {/* <div className="flex flex-col">
              <label className="my-4" htmlFor="">
                First name
              </label>
              <input className="border-2 border-black p-4" type="text" />
            </div> */}
            <div className="flex flex-col">
              <label className="my-4" htmlFor="">
                Email
              </label>
              <input
                className="border-2 border-black p-4"
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              className="w-full border-2 border-black bg-black px-6 text-white rounded p-6 my-4"
              type="submit"
            >
              subscribe to newsletter
            </button>
          </form>
        </div>
      </div>
      <div className="text-left pt-24">
        &copy; Marlone Akidiva 2024. All rights reserved.
      </div>
    </footer>
  );
}
