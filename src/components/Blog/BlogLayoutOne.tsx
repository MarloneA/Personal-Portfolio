import React from "react";
import Tag from "../Elements/Tag";
import Link from "next/link";
import Image from "next/image";
import { slug } from "github-slugger";

const BlogLayoutOne = ({ blog }) => {
  return (
    <div className="inline-block rounded-xl overflow-hidden group">
      <div className="top-0 right-0 bottom-0 left-0 z-10 absolute bg-gradient-to-b from-0% from-transparent to-dark/90 rounded-xl h-full" />
      <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        width={blog.image.width}
        height={blog.image.height}
        className="group-hover:scale-105 rounded-xl w-full h-full transition-all duration-300 ease object-center object-cover"
        sizes="(max-width: 1180px) 100vw, 50vw"
      />

      <div className="bottom-0 z-20 absolute p-4 sm:p-10 xs:p-6 w-full">
        <Tag
          link={`/blogs/categories/${slug(blog.tags[0])}`}
          name={blog.tags[0]}
          className="px-6 py-1 sm:py-2 !border text-xs sm:text-sm"
        />
        <Link href={blog.url} className="mt-6">
          <h2 className="mt-2 sm:mt-4 font-bold text-light text-sm sm:text-xl md:text-2xl xs:text-base capitalize">
            <span className="group-hover:bg-[length:100%_6px] bg-[length:0px_6px] bg-gradient-to-r from-accent dark:from-accentDark/50 to-accent dark:to-accentDark/50 bg-no-repeat bg-left-bottom transition-[background-size] duration-500">
              {blog.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
