import React from "react";
import Image from "next/image";
import { Booking } from "./booking";
import { Course } from "./course";

export default function LandingPage() {
  return (
    <div className="w-full h-screen">
      <section className="flex flex-row w-full py-24 h-4/6 justify-between">
        <div className="flex flex-col ">
          <h2 className="leading-snug	text-4xl md:text-4xl dark:text-white text-black motion-safe:animate-hero-text-reveal pt-24">
            Welcome to my digital realm!
            <br />
            so you wanna create top-tier <br /> software? Let's dive in and{" "}
            <br /> make amazing things happen <br /> together!
          </h2>
          <div className="flex p-2 w-full my-10">
            <Booking />

            <Course />
          </div>
        </div>
        <div className="w-1/2 flex place-content-center h-[550px]">
          <Image
            className="relative"
            src="/jsTEch.png"
            alt="Next.js Logo"
            width={710}
            height={90}
            priority
          />
        </div>
      </section>
      <div className="flex w-full h-1/6  py-4">
        <a href="" className="flex hover:cursor-pointer hover:bg-slate-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="animate-bounce w-12 h-12 pr-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
          Learn more about me
        </a>
      </div>
    </div>
  );
}
