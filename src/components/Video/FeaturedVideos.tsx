import React from "react";
import { sortVideos } from "@/utils";
import { VideoLayoutOne } from "./VideoLayout";
import ChatInterface from "./ChatInterface";

const FeaturedVideos = ({ videos }) => {
  const sortedVideos = sortVideos(videos);
  return (
    <section className="flex flex-row flex-wrap lg:flex-nowrap justify-between items-center w-full">
      <article className="">
        <VideoLayoutOne video={sortedVideos[0]} />
      </article>
      <ChatInterface />
    </section>
  );
};

export default FeaturedVideos;
