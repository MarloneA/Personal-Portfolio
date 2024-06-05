import React from "react";
import { BentoGridSection } from "./bentoGrid";
import { Booking } from "./booking";
import { Course } from "./course";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="w-full h-full">
      <section className="flex flex-col lg:flex-row w-full h-4/6 justify-between">
        <div className="w-1\2 flex flex-col justify-center items-center lg:items-start">
          <h2 className="hidden sm:block leading-snug	text-2xl sm:text-3xl md:text-4xl dark:text-white text-black motion-safe:animate-hero-text-reveal md:pt-4">
            Welcome to my digital realm!
            <br /> I'm Marlone, a lovely human who just happens to be writing
            code. <br />
          </h2>

          <h2 className="sm:hidden text-center leading-snug	text-2xl sm:text-3xl md:text-4xl dark:text-white text-black motion-safe:animate-hero-text-reveal md:pt-4">
            Welcome to my digital realm! so you wanna create top-tier software?
            Let's dive in and make amazing things happen together!
          </h2>

          <h4 className="pt-10 w-[90%] text-center lg:text-left">
            I've worked with products that have raised more than $100m in
            funding and thus I understand what it takes to build great software.
            Feel free to engage with me by either having a call or interacting with any of my courses.
          </h4>
          <div className="flex py-2 w-full my-10 justify-center items-center lg:justify-start">
            <Booking />
            <Course />
          </div>
          <div className="flex w-full justify-center lg:justify-start py-12 lg:py-36">
            <Link href="/projects" className="flex  hover:cursor-pointer">
              <p className="pr-6">Check out my work</p>
              <div className="lg:-rotate-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="animate-bounce w-12 h-12 pl-6 "
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
