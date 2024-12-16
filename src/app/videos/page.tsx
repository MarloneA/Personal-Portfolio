import { Button } from "@/components/_ui/button";
import FeaturedVideos from "@/components/Video/FeaturedVideos";
import RecentVideos from "@/components/Video/RecentVideos";
import { videos } from "@/utils/fixtures";
import { ArrowRight, Icon } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Videos",
  description: `Check out my videos`,
};

export default function Video() {
  return (
    <main className="flex flex-col justify-center items-center m-auto px-5 sm:px-10 max-w-screen-2xl">
      <FeaturedVideos videos={videos} />
      <h1 className="p-12 flex w-full justify-center items-center">
        More videos coming soon, stay{" "}
        <span>
          <ArrowRight />
        </span>
        <Link href="https://www.youtube.com/@marlonethedev" className="mx-2">
          <Button className="bg-red-700 dark:text-white">subscribed</Button>
        </Link>
      </h1>
      {/* add feature flag for videos */}
      {/* <RecentVideos videos={videos} /> */}
    </main>
  );
}
