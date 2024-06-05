"use client";

import Image from "next/image";
import React from "react";
import marlone from "../../../public/images/marlone.jpg";
import "@dotlottie/react-player/dist/index.css";
import { DotLottiePlayer } from "@dotlottie/react-player";

const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[75vh] border-b-2 border-solid border-light dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="w-full md:w-1/2 h-full border-r-2 border-solid border-light dark:border-light flex justify-center">
        <Image
          src={marlone}
          alt="marlone"
          className="w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center"
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
          width="700"
          height="1080"
        />
        {/* <DotLottiePlayer src="/bear_anim.json" autoplay loop></DotLottiePlayer> */}
      </div>

      <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
        <h2 className="font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left">
          {/* Dream Big, Work Hard, Achieve More! */}
          If you want to win the lottery you have to make the money to buy a
          ticket.
        </h2>
        <p className="flex w-full justify-end font-bold italic text-xs">
          ~ NightCrawler
        </p>
        <p className="font-medium capitalize mt-4 text-base">
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
            <button className="w-60 min-w-fit text-sm border-2 dark:border-white dark:bg-white  border-black bg-black p-3 md:px-6 dark:text-black text-white md:p-4 m-6 ml-0 hover:bg-accentDark hover:text-black">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutCoverSection;
