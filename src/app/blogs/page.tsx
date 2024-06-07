import { allBlogs } from "../../../.contentlayer/generated";
import HomeCoverSection from "@/components/Blog/HomeCoverSection";
import FeaturedPosts from "@/components/Blog/FeaturedPosts";
import RecentPosts from "@/components/Blog/RecentPosts";

export const metadata = {
  title: "Blog",
  description: `Check out my writing`,
};

export default function Blog() {
  return (
    <main className="flex flex-col justify-center items-center m-auto px-24 sm:px-10 max-w-screen-2xl">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  );
}
