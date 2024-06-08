import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";
import { slug } from "github-slugger";
// import ViewCounter from "./ViewCounter";

const BlogDetails = ({ blog, slug: blogSlug }) => {
  return (
    <div className="flex flex-wrap justify-around items-center bg-accentDark dark:bg-accentDark mx-5 md:mx-10 px-2 md:px-10 py-2 rounded-lg font-medium text-dark text-lg sm:text-xl dark:text-dark">
      <time className="m-3">
        {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
      </time>
      <span className="m-3">{/* <ViewCounter slug={blogSlug} /> */}</span>
      <div className="m-3">{blog.readingTime.text}</div>
      <Link href={`/blogs/categories/${slug(blog.tags[0])}`} className="m-3">
        #{blog.tags[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;
