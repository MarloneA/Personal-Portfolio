import React from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

export const VideoLayoutOne = ({ video }) => {
  return (
    <div className="inline-block rounded-xl overflow-hidden group">
      <iframe
        width="815"
        height="485"
        src={video.links.youtube}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export const VideoLayoutTwo = ({ video }) => {
  return (
    <div className="items-center gap-4 grid grid-cols-12 text-dark dark:text-light group">
      <Link
        href={video.links.youtube}
        className="col-span-12 lg:col-span-4 rounded-xl h-full overflow-hidden"
      >
        <Image
          src={video.links.coverphoto}
          placeholder="blur"
          blurDataURL={video.links.coverphoto}
          alt={video.title}
          width="1282"
          height="920"
          className="group-hover:scale-105 w-full h-full transition-all duration-300 aspect-square ease object-center object-cover"
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="col-span-12 lg:col-span-8 w-full">
        <span className="inline-block w-full font-semibold text-accent text-xs sm:text-sm dark:text-accentDark uppercase">
          {video.tags[0]}
        </span>
        <Link href={video.links.youtube} className="inline-block my-1">
          <h2 className="font-semibold text-base sm:text-lg capitalize">
            <span className="group-hover:bg-[length:100%_6px] bg-[length:0px_6px] bg-gradient-to-r from-accent/50 dark:from-accentDark/50 to-accent/50 dark:to-accentDark/50 bg-no-repeat bg-left-bottom transition-[background-size] duration-500">
              {video.title}
            </span>
          </h2>
        </Link>

        <span className="inline-block w-full font-semibold text-gray text-xs sm:text-base dark:text-light/50 capitalize">
          {format(new Date(video.metadata.published), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export const VideoLayoutThree = ({ video }) => {
  return (
    <div className="flex flex-col items-center text-dark dark:text-light group">
      <div className="w-[450px] h-[280px]">
        <iframe
          width="100%"
          height="100%"
          src={video.links.youtube}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex flex-col mt-4 w-full">
        <span className="font-semibold text-accent text-xs sm:text-sm dark:text-accentDark uppercase">
          {video.tags[0]}
        </span>
        <Link href={video.links.youtube} className="inline-block my-1">
          <h2 className="font-semibold text-base sm:text-lg capitalize">
            <span className="group-hover:bg-[length:100%_6px] bg-[length:0px_6px] bg-gradient-to-r from-accent/50 dark:from-accentDark/50 to-accent/50 dark:to-accentDark/50 bg-no-repeat bg-left-bottom transition-[background-size] duration-500">
              {video.title}
            </span>
          </h2>
        </Link>

        <span className="font-semibold text-gray text-sm sm:text-base dark:text-light/50 capitalize">
          {format(new Date(video.metadata.published), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};
