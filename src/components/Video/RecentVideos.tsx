import React from "react";
import Link from "next/link";
import { sortVideos } from "@/utils";
import { VideoLayoutThree } from "./VideoLayout";

const RecentVideos = ({ videos }) => {
  const sortedVideos = sortVideos(videos);
  return (
    <section className="flex flex-col justify-center items-center mt-16 sm:mt-24 md:mt-32 w-full">
      <div className="flex justify-between w-full">
        <h2 className="inline-block w-fit font-bold text-2xl text-dark md:text-4xl dark:text-light capitalize">
          Recent Videos
        </h2>
        <Link
          href="/videos/categories/all"
          className="inline-block font-medium text-accent text-base md:text-lg dark:text-accentDark underline underline-offset-2"
        >
          view all
        </Link>
      </div>

      <div className="gap-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 mt-16">
        {sortedVideos.slice(4, 10).map((video, index) => {
          return (
            <article key={index} className="relative col-span-1 row-span-1">
              <VideoLayoutThree video={video} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentVideos;