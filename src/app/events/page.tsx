import Image from "next/image";
import React from "react";
import { projects } from "../../../projects";

import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/_ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/_ui/carousel";
import { ProjectShowcase } from "@/components/Project/projectshowcase";

export const metadata = {
  title: "Projects",
  description: `Check out my projects`,
};

export default function MyProjects() {
  return (
    <main className="flex flex-col justify-center items-center mb-16 p-4 w-full dark:text-light">
      <div className="inline-block z-0 bg-light dark:bg-dark sm:p-8 md:p-12 lg:p-16 xl:p-24 pt-16 w-full h-full min-h-screen">
        {/* title */}
        <div className="flex flex-col justify-center items-center mx-auto sm:py-0 lg:p-16 w-full text-center overflow-hidden">
          <blockquote className="mb-10 pl-6 border-l-2 italic">
            "The best and most beautiful things in the world cannot be seen or even touched—they must be felt with the heart."
          </blockquote>
          <h1
            className="inline-block mb-16 sm:mb-8 w-full font-bold text-4xl text-dark lg:!text-7xl xl:text-6xl dark:text-light capitalize !leading-tight"
            style={{ opacity: 1 }}
          >
            <span
              className="inline-block"
              style={{ opacity: 1, transform: "none" }}
            >
              "... Alone, we can do so little; together, we can do so much."&nbsp;
            </span>
            <span
              className="inline-block float-end text-xs italic"
              style={{ opacity: 1, transform: "none" }}
            >
              &nbsp;
            </span>
            <span
              className="inline-block float-end text-3xl italic"
              style={{ opacity: 1, transform: "none" }}
            >
              ~ Hellen Keller&nbsp;
            </span>
          </h1>
        </div>

        

      </div>
    </main>
  );
}
