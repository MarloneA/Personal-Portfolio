import { sortBlogs } from "@/utils";
import Link from "next/link";
import React from "react";
import BlogLayoutThree from "./BlogLayoutThree";

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="flex flex-col justify-center items-center mt-16 sm:mt-24 md:mt-32 w-full">
      <div className="flex justify-between w-full">
        <h2 className="inline-block w-fit font-bold text-2xl text-dark md:text-4xl dark:text-light capitalize">
          Recent Posts
        </h2>
        <Link
          href="/blogs/categories/all"
          className="inline-block font-medium text-accent text-base md:text-lg dark:text-accentDark underline underline-offset-2"
        >
          view all
        </Link>
      </div>

      <div className="gap-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 mt-16">
        {sortedBlogs.slice(4, 10).map((blog, index) => {
          return (
            <article key={index} className="relative col-span-1 row-span-1">
              <BlogLayoutThree blog={blog} />
            </article>
          );
        })}
      </div>
      <button className="border-2 dark:border-white hover:bg-accentDark mt-24 px-6 p-4 border-black rounded-xl w-full  hover:text-black !shadow-[5px_5px_1px_1px_#000000]">
        <Link href="/blogs/categories/all">explore more writing</Link>
      </button>
    </section>
  );
};

export default RecentPosts;
