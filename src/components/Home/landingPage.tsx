import React from "react";
// import Image from "next/image";
import { Booking } from "./booking";
import { Course } from "./course";
import { BentoGridSecondDemo, BentoGridThirdDemo } from "./bentoGrid";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="w-full">
      <section className="flex flex-col lg:flex-row w-full h-4/6 justify-between">
        <div className="w-1\2 flex flex-col justify-center items-center lg:items-start">
          <h2 className="leading-snug	text-2xl sm:text-3xl md:text-4xl dark:text-white text-black motion-safe:animate-hero-text-reveal md:pt-4">
            Welcome to my digital realm!
            <br />
            so you wanna create top-tier <br /> software? Let's dive in and
            <br /> make amazing things happen <br /> together!
          </h2>
          <h4 className="pt-10 w-[90%] text-center lg:text-left">
            Having worked with products that have raised more than $100m in
            funding, I understand what it takes to make your product a success.
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
        <BentoGridSecondDemo />
        {/* <Image
          className="relative h-[650px]"
          src="/jsTEch.png"
          alt="Next.js Logo"
          width={800}
          height={2000}
          priority
        /> */}
      </section>
    </div>
  );
}
