"use client";

import Image from "next/image";
import React from "react";
import marlone from "../../../public/images/headshot.png";
import "@dotlottie/react-player/dist/index.css";
import { DotLottiePlayer } from "@dotlottie/react-player";

const AboutCoverSection = () => {
  return (
    <section className="flex md:flex-row flex-col justify-center items-center border-b-2 border-light dark:border-light border-solid w-full md:h-[75vh] text-dark dark:text-light">
      <div className="flex justify-center border-r-2 border-light dark:border-light border-solid w-full md:w-1/2 h-full p-12">
        <Image
          src={marlone}
          alt="marlone"
          className="w-4/5 md:w-full xs:w-3/4 h-full object-center object-contain"
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
          width="700"
          height="1080"
        />
      </div>

      <div className="flex flex-col justify-center items-start px-5 lg:px-16 xs:p-10 pb-10 w-full md:w-1/2 text-left">
        <h3 className="font-bold text-2xl text-center lg:text-left xs:text-5xl sxl:text-6xl capitalize">
          Experience is the name everyone gives to their mistakes
        </h3>
        <p className="flex justify-end w-full font-bold text-xs italic">
          ~ Oscar Wilde
        </p>
        <p className="mt-4 font-medium text-base capitalize">
          As a passionate software engineer, I combine cutting-edge technology
          with classic design to create captivating digital experiences I'm
          always eager to learn and embrace new challenges. With every project,
          I strive to make a lasting impact. Eventually I dream of running my
          own unicorn software company.
        </p>

        <div>
          <a
            href="/assets/Marlone_Akidiva_Software_Engineer-Resume.pdf"
            download
          >
            <button className="border-2 dark:border-white bg-black hover:bg-accentDark dark:bg-white m-6 ml-0 md:px-6 p-3 md:p-4 border-black w-60 min-w-fit text-sm text-white hover:text-black dark:text-black !shadow-[5px_5px_1px_1px_#000000]">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutCoverSection;
