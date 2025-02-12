import { sortBlogs } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../Elements/Tag";
import { slug } from "github-slugger";

const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];

  return (
    <div className="inline-block w-full shadow-2xl rounded-3xl">
      <article className="relative flex flex-col justify-end items-start h-[60vh] sm:h-[41vh]">
        <div className="top-0 right-0 bottom-0 left-0 z-0 absolute bg-gradient-to-b from-0% from-transparent to-dark/90  h-full hidden dark:block" />
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          fill
          className="-z-10 w-full h-full object-center object-cover rounded-t-3xl"
          sizes="100vw"
          priority
        />
      </article>
      <div className="z-0 flex flex-col justify-center items-start p-6 sm:p-8 md:p-12 lg:p-16 w-full lg:w-3/4 text-dark dark:text-light">
        <Tag
          link={`/blogs/categories/${slug(blog.tags[0])}`}
          name={blog.tags[0]}
        />
        <Link href={blog.url} className="mt-6">
          <h1 className="font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl capitalize">
            <span className="bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-gradient-to-r from-accentDark/50 dark:from-accentDark/50 to-accentDark/50 dark:to-accentDark/50 bg-no-repeat bg-left-bottom transition-[background-size] duration-500">
              {blog.title}
            </span>
          </h1>
        </Link>
        <p className="sm:inline-block hidden mt-4 font-in md:text-lg lg:text-xl">
          {blog.description}
        </p>
      </div>
    </div>
  );
};

export default HomeCoverSection;
