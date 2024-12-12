"use client";

import { useEffect } from "react";

export default function Lab() {
  useEffect(() => {
    // Scroll to the center of the page on load
    window.scrollTo({
      top: document.body.scrollHeight / 2.8 - window.innerHeight / 2,
      left: document.body.scrollWidth / 2 - window.innerWidth / 2,
      behavior: "smooth",
    });
  }, []);

  const today = new Date();

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <p className="text-4xl pl-12">
        Welcome to my experimental lab: where i play around with ideas that will
        never make the light of day
      </p>
      <div className="bg-[#EADBCD] font-sans uppercase text-[calc(1vh+2vw+1rem)] leading-[0.9] tracking-tight box-border hover:cursor-pointer hover:bg-yellow-300">
        <article
          className="grid justify-center gap-1 h-[88vh] min-h-[350px] mx-auto"
          style={{
            gridTemplateColumns: "auto 0.4rem auto auto",
            gridTemplateRows: "1fr auto auto auto",
          }}
        >
          <h1 className="contents text-center">
            <span className="text-shadow-none bg-white">
              <i className="not-italic">EXPERIMENTAL</i>{" "}
            </span>
            <span className="bg-[#F0CB0B] justify-self-end self-center pl-[23rem] hover:bg-[#C53321] hover:text-white">
              SELF EXPRESSION
            </span>
            <span className="bg-[#F0CB0B] justify-self-start rotate-180 writing-mode-vertical-lr relative z-[-10]">
              <big className="inline-block w-[0.6em] h-[0.5em] bg-white"></big>
              EXPRESSION
            </span>
          </h1>
          <p className="hidden md:block text-[#F0CB0B] bg-black p-1">LAB</p>
          <time className="contents">
            <span className="bg-black text-[#C53321] px-1 text-right">
              {today.toDateString()}
            </span>
            <span className="bg-black text-[#fff] px-1 z-10 hover:text-black">
              infinity & beyond
            </span>
          </time>
          <b className="min-w-[100px] min-h-[100px] bg-[#C53321] col-span-1 row-span-2 pb-[23rem] hover:bg-[#EADBCD]"></b>
        </article>
      </div>
    </div>
  );
}
