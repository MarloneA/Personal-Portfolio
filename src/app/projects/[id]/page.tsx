import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Projects",
  description: `Check out my projects`,
};

export default function componentName() {
  return (
    <main className="p-16 flex w-full flex-col items-center justify-center dark:text-light">
      <article className="mt-4 font-os">
        <div className="relative mx-32 flex flex-col justify-between lg:mx-14 md:mx-12 xsm:mx-4">
          <div className="flex h-auto w-full flex-col items-center justify-center">
            <h1 className="my-8 text-center text-6xl font-extrabold uppercase leading-tight text-dark drop-shadow-textredmd  dark:text-light dark:drop-shadow-textredmddark sxl:text-7xl sxl:leading-snug md:my-8 md:text-5xl md:leading-snug  sm:text-4xl sm:leading-snug  sm:drop-shadow-textredmd dark:sm:drop-shadow-textredmddark  xsm:text-2xl xsm:leading-tight  xsm:drop-shadow-textredsm dark:xsm:drop-shadow-textredsmdark xs:text-xl">
              React Website Tutorial: Build Feature Rich Crypto Screener App
              with Tailwind CSS
            </h1>
            <div className="text-md mb-8 font-medium capitalize text-placeholder sm:text-sm">
              <a
                className="mr-3 rounded font-semibold capitalize text-reddark underline underline-offset-2 hover:border-reddark  hover:bg-transparent  dark:text-red"
                href="/videos/category/web-app"
              >
                #web-app
              </a>
              <a
                className="mr-3 rounded font-semibold capitalize text-reddark underline underline-offset-2 hover:border-reddark  hover:bg-transparent  dark:text-red"
                href="/videos/category/react-js"
              >
                #react-js
              </a>
              <a
                className="mr-3 rounded font-semibold capitalize text-reddark underline underline-offset-2 hover:border-reddark  hover:bg-transparent  dark:text-red"
                href="/videos/category/tailwind-css"
              >
                #tailwind-css
              </a>
            </div>
            <div className="relative w-full rounded-lg">
              <button
                type="button"
                className="group relative aspect-[16/9] w-full"
                name="Play video React Website Tutorial: Build Feature Rich Crypto Screener App with Tailwind CSS"
              >
                <Image
                  src="/blogs/paul-esch-laurent-oZMUrWFHOB4-unsplash.jpg"
                  alt="demo"
                  width="1280"
                  height="720"
                  className="m-0 h-auto w-full rounded-lg xsm:my-0"
                  style={{ color: "transparent" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1200px) 90vw, 50vw"
                />
                <span className="absolute top-[50%] left-[50%] z-10 grid h-auto w-full translate-x-[-50%] translate-y-[-50%] place-items-center text-xl text-reddark">
                  <span className="flex h-24 w-24 items-center justify-center rounded-full bg-reddark text-light lg:h-16 lg:w-16 sm:h-12 sm:w-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 32 32"
                      className="h-2/5 w-full transform transition group-hover:scale-105"
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
            <p className="text-lg mb-6 leading-relaxed">
              In this tutorial, we will build a cryptocurrency screener app
              using React.js and Tailwind CSS. We'll cover everything from
              setting up the project to fetching real-time cryptocurrency data
              using an API. By the end of this tutorial, you'll have a fully
              functional web application that allows users to search for
              cryptocurrencies and view their details, such as price, market
              cap, and trading volume.
            </p>
            <h2 className="text-2xl mb-4 font-semibold">
              What You Will Learn:
            </h2>
            <ul className="list-disc list-inside mb-8">
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
