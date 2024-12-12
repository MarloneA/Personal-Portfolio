import FeaturedVideos from "@/components/Video/FeaturedVideos";
import RecentVideos from "@/components/Video/RecentVideos";
import { videos } from "@/utils/fixtures";

export const metadata = {
  title: "Videos",
  description: `Check out my videos`,
};

export default function Video() {
  return (
    <main className="flex flex-col justify-center items-center m-auto px-5 sm:px-10 max-w-screen-2xl">
      <FeaturedVideos videos={videos} />
      <RecentVideos videos={videos} />
    </main>
  );
}
