import React from "react";
import { BentoGridSection } from "./bentoGrid";
import { Booking } from "./booking";
import { Course } from "./course";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="w-full h-full my-8">
      <section className="flex lg:flex-row flex-col justify-between w-full h-4/6">
        <div className="flex flex-col justify-center items-center lg:items-start w-1\2">
          <h2 className="sm:block hidden md:pt-4 text-2xl text-black sm:text-3xl md:text-4xl dark:text-white leading-snug">
            Welcome to my digital realm!
            <br /> I'm Marlone, a lovely human who just happens to be writing
            code. <br />
          </h2>

          <h2 className="sm:hidden md:pt-4 text-2xl text-black text-center sm:text-3xl md:text-4xl dark:text-white leading-snug">
            Welcome to my digital realm! so you wanna create top-tier software?
            Let's dive in and make amazing things happen together!
          </h2>

          <h4 className="pt-10 w-[90%] text-center lg:text-left">
            I've worked with products that have raised more than $100m in
            funding and thus I understand what it takes to build great software.
            Feel free to engage with me by either having a call or interacting
            with any of my courses.
          </h4>
          <div className="flex justify-center lg:justify-start items-center my-10 py-2 w-full">
            <Booking />
            <Course />
          </div>
          <div className="flex justify-center lg:justify-start py-12 lg:py-36 w-full">
            <Link href="/projects" className="flex hover:cursor-pointer">
              <p className="pr-6">Check out my work</p>
              <div className="lg:-rotate-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="pl-6 w-12 h-12 animate-bounce"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
        <BentoGridSection />
      </section>
    </div>
  );
}
