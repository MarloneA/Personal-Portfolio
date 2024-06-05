import Image from "next/image";
import React from "react";
import { projects } from "../../../projects";

export const metadata = {
  title: "Projects",
  description: `Check out my projects`,
};

export default function MyProjects() {
  return (
    <main className="p-4 mb-16 flex w-full flex-col items-center justify-center dark:text-light">
      <div className="z-0 inline-block h-full w-full bg-light dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 pt-16">
        {/* title */}
        <div className="lg:p-16 w-full mx-auto flex flex-col items-center justify-center text-center overflow-hidden sm:py-0">
          <blockquote className="mb-10 border-l-2 pl-6 italic">
            "I don't think you're giving us our due credit. Our scientists have
            done things which nobody's ever done before..."
          </blockquote>
          <h1
            className="inline-block text-4xl text-dark dark:text-light font-bold w-full capitalize mb-16 !leading-tight lg:!text-7xl sm:mb-8 xl:text-6xl"
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
              className="italic text-xs inline-block float-end"
              style={{ opacity: 1, transform: "none" }}
            >
              Jurassic Park&nbsp;
            </span>
            <span
              className="italic text-3xl inline-block float-end"
              style={{ opacity: 1, transform: "none" }}
            >
              ~ Dr. Ian Malcolm&nbsp;
            </span>
          </h1>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
          {projects.map((project) => {
            const {
              id,
              projectUrl,
              imgUrl,
              githubUrl,
              title,
              description,
              featured,
            } = project;

            return (
              <div className="col-span-12" key={id}>
                <article className="relative flex flex-col w-full items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-light bg-light p-2 py-6 shadow-2xl dark:border-light dark:bg-dark lg:flex-row lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
                  <a
                    target="_blank"
                    className="w-11/12 cursor-pointer overflow-hidden rounded-lg lg:w-full"
                    href={projectUrl}
                  >
                    <Image
                      src={imgUrl}
                      alt="demo"
                      width="1280"
                      height="720"
                      className="h-auto w-full lg:w-11/12"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </a>
                  <div className="flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                    {featured && (
                      <span className="text-xl pt-4 lg:pt-0 font-medium text-accent dark:text-primaryDark xs:text-base">
                        Coming Soon
                      </span>
                    )}
                    <a
                      target="_blank"
                      className="underline-offset-2 hover:underline"
                      href="https://devdreaming.com/videos/build-crypto-screener-app-with-react-tailwind-css"
                    >
                      <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
                        {title}
                      </h2>
                    </a>
                    <p className="my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
                      {description}
                    </p>
                    <div className="mt-2 flex items-center">
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
                        className="ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base"
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
