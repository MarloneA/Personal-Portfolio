import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Projects",
  description: `Check out my projects`,
};

export default function Project() {
  return (
    <main className="flex flex-col justify-center items-center p-16 w-full dark:text-light">
      <article className="mt-4 font-os">
        <div className="relative flex flex-col justify-between mx-32 xsm:mx-4 md:mx-12 lg:mx-14">
          <div className="flex flex-col justify-center items-center w-full h-auto">
            <h1 className="drop-shadow-textredmd sm:drop-shadow-textredmd dark:sm:drop-shadow-textredmddark xsm:drop-shadow-textredsm dark:xsm:drop-shadow-textredsmdark dark:drop-shadow-textredmddark my-8 md:my-8 font-extrabold text-6xl text-center text-dark sm:text-4xl xsm:text-2xl md:text-5xl sxl:text-7xl xs:text-xl dark:text-light uppercase leading-tight sm:leading-snug xsm:leading-tight md:leading-snug sxl:leading-snug">
              React Website Tutorial: Build Feature Rich Crypto Screener App
              with Tailwind CSS
            </h1>
            <div className="mb-8 font-medium text-md text-placeholder sm:text-sm capitalize">
              <a
                className="hover:bg-transparent mr-3 hover:border-reddark rounded font-semibold text-reddark dark:text-red underline underline-offset-2 capitalize"
                href="/videos/category/web-app"
              >
                #web-app
              </a>
              <a
                className="hover:bg-transparent mr-3 hover:border-reddark rounded font-semibold text-reddark dark:text-red underline underline-offset-2 capitalize"
                href="/videos/category/react-js"
              >
                #react-js
              </a>
              <a
                className="hover:bg-transparent mr-3 hover:border-reddark rounded font-semibold text-reddark dark:text-red underline underline-offset-2 capitalize"
                href="/videos/category/tailwind-css"
              >
                #tailwind-css
              </a>
            </div>
            <div className="relative rounded-lg w-full">
              <button
                type="button"
                className="relative w-full aspect-[16/9] group"
                name="Play video React Website Tutorial: Build Feature Rich Crypto Screener App with Tailwind CSS"
              >
                <Image
                  src="/blogs/paul-esch-laurent-oZMUrWFHOB4-unsplash.jpg"
                  alt="demo"
                  width="1280"
                  height="720"
                  className="m-0 xsm:my-0 rounded-lg w-full h-auto"
                  style={{ color: "transparent" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1200px) 90vw, 50vw"
                />
                <span className="top-[50%] left-[50%] z-10 absolute place-items-center grid w-full h-auto text-reddark text-xl translate-x-[-50%] translate-y-[-50%]">
                  <span className="flex justify-center items-center bg-reddark rounded-full w-24 sm:w-12 lg:w-16 h-24 sm:h-12 lg:h-16 text-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 32 32"
                      className="group-hover:scale-105 w-full h-2/5 transform transition"
                    >
                      <path
                        fill="currentColor"
                        d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28Z"
                      ></path>
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div className="py-8">
            <p className="mb-6 text-lg leading-relaxed">
              In this tutorial, we will build a cryptocurrency screener app
              using React.js and Tailwind CSS. We'll cover everything from
              setting up the project to fetching real-time cryptocurrency data
              using an API. By the end of this tutorial, you'll have a fully
              functional web application that allows users to search for
              cryptocurrencies and view their details, such as price, market
              cap, and trading volume.
            </p>
            <h2 className="mb-4 font-semibold text-2xl">
              What You Will Learn:
            </h2>
            <ul className="mb-8 list-disc list-inside">
              <li>Setting up a React.js project with Tailwind CSS</li>
              <li>Fetching real-time cryptocurrency data from an API</li>
              <li>Building a dynamic search functionality</li>
              <li>Displaying cryptocurrency details dynamically</li>
              <li>Styling the application using Tailwind CSS</li>
            </ul>
            <p className="text-lg leading-relaxed">
              Whether you're a beginner looking to learn React.js and Tailwind
              CSS or an experienced developer wanting to build a cryptocurrency
              app, this tutorial is for you. Follow along step by step and build
              your own feature-rich crypto screener app.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
