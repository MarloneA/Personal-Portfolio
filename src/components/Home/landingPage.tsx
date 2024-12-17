import React from "react";
import { Booking } from "./booking";
import { Course } from "./course";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="w-full my-8">
      <section className="flex lg:flex-row flex-col justify-between w-full">
        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="sm:block md:pt-4 text-6xl sm:text-8xl text-black lg:text-[10rem] !leading-[1] dark:text-white text-center">
            Welcome to my digital space!
          </h2>
          <h4 className="pt-10 md:w-[50%] w-full text-center">
            I've collaborated with startups that have collectively raised over
            $100 million in funding, giving me a deep understanding of what it
            takes to build exceptional software. Let's connect-whether through a
            call or by exploring my tutorials, l'd be happy to engage with you.
          </h4>
          <div className="flex justify-center items-center my-10 py-2 w-full">
            <Booking />
            <Course />
          </div>
          <div className="flex justify-center w-full">
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
      </section>
    </div>
  );
}
