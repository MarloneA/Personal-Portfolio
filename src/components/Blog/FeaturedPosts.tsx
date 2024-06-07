import { sortBlogs } from "@/utils";
import React from "react";
import BlogLayoutOne from "./BlogLayoutOne";
import BlogLayoutTwo from "./BlogLayoutTwo";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="flex flex-col justify-center items-center mt-16 sm:mt-24 md:mt-32 w-full">
      <h2 className="inline-block w-full font-bold text-2xl text-dark md:text-4xl dark:text-light capitalize">
        Featured Posts
      </h2>
      <div className="gap-6 grid grid-cols-2 grid-rows-2 mt-10 sm:mt-16">
        <article className="relative col-span-2 sxl:col-span-1 row-span-2">
          <BlogLayoutOne blog={sortedBlogs[1]} />
        </article>
        <article className="relative col-span-2 sm:col-span-1 row-span-1">
          <BlogLayoutTwo blog={sortedBlogs[2]} />
        </article>
        <article className="relative col-span-2 sm:col-span-1 row-span-1">
          <BlogLayoutTwo blog={sortedBlogs[3]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
