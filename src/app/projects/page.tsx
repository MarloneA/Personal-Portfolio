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
      <div className="inline-block z-0 bg-light dark:bg-dark sm:p-8 md:p-12 lg:p-16 xl:p-24 pt-16 w-full h-full">
        {/* title */}
        <div className="flex flex-col justify-center items-center mx-auto sm:py-0 lg:p-16 w-full text-center overflow-hidden">
          <blockquote className="mb-10 pl-6 border-l-2 italic">
            "I don't think you're giving us our due credit. Our scientists have
            done things which nobody's ever done before..."
          </blockquote>
          <h1
            className="inline-block mb-16 sm:mb-8 w-full font-bold text-4xl text-dark lg:!text-7xl xl:text-6xl dark:text-light capitalize !leading-tight"
            style={{ opacity: 1 }}
          >
            <span
              className="inline-block"
              style={{ opacity: 1, transform: "none" }}
            >
              "... but your scientists were so preoccupied with whether or not
              they could that they didn't stop to think if they should."&nbsp;
            </span>
            <span
              className="inline-block float-end text-xs italic"
              style={{ opacity: 1, transform: "none" }}
            >
              Jurassic Park&nbsp;
            </span>
            <span
              className="inline-block float-end text-3xl italic"
              style={{ opacity: 1, transform: "none" }}
            >
              ~ Dr. Ian Malcolm&nbsp;
            </span>
          </h1>
        </div>

        <div className="flex flex-col gap-24 gap-y-32 sm:gap-x-0 md:gap-y-24 lg:gap-x-8 xl:gap-x-16 lg:grid lg:grid-cols-12">
          {projects.map((project) => {
            const {
              id,
              projectUrl,
              imgUrl,
              githubUrl,
              title,
              description,
              featured,
              slides,
            } = project;

            return (
              <div className="col-span-12" key={id}>
                <article className="relative flex lg:flex-row flex-col justify-between items-center bg-light dark:bg-dark shadow-2xl py-6 p-2 lg:p-8 xs:p-4 border border-light dark:border-light border-solid rounded-3xl xs:rounded-2xl rounded-br-2xl xs:rounded-br-3xl w-full">
                  <a
                    target="_blank"
                    className="rounded-lg w-11/12 lg:w-full cursor-pointer overflow-hidden"
                    href={projectUrl}
                  >
                    <ProjectShowcase slides={project.slides} />
                  </a>
                  <div className="flex flex-col justify-between items-start lg:pt-6 pl-6 lg:pl-0 lg:w-1/3">
                    {featured && (
                      <span className="pt-4 lg:pt-0 font-medium text-accent text-xl dark:text-primaryDark xs:text-base">
                        Coming Soon
                      </span>
                    )}
                    <a
                      target="_blank"
                      className="underline-offset-2 hover:underline"
                      href={projectUrl}
                    >
                      <h2 className="my-2 w-full font-bold text-4xl text-left lg:text-3xl xs:text-2xl">
                        {title}
                      </h2>
                    </a>
                    <p className="my-2 rounded-md font-medium text-dark sm:text-sm dark:text-light">
                      {description}
                    </p>
                    <div className="flex items-center mt-2">
                      <a
                        target="_blank"
                        className="w-10"
                        aria-label={`${title} github link`}
                        href={githubUrl}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 512 512"
                          className="w-full h-auto undefined"
                        >
                          <path fill="none" d="M0 0h512v512H0z"></path>
                          <path
                            fill="currentColor"
                            d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
                          ></path>
                        </svg>
                      </a>
                      <a
                        target="_blank"
                        className="bg-dark dark:bg-light ml-4 px-6 sm:px-4 p-2 rounded-lg font-semibold text-lg text-light sm:text-base dark:text-dark"
                        aria-label="Crypto Screener Application"
                        href={projectUrl}
                      >
                        Visit Project
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
