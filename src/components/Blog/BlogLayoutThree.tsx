import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogLayoutThree = ({ blog }) => {
  return (
    <div className="flex flex-col items-center text-dark dark:text-light group">
      <Link href={blog.url} className="rounded-xl h-full overflow-hidden">
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="group-hover:scale-105 w-full h-full transition-all duration-300 aspect-[4/3] ease object-center object-cover"
          // sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="flex flex-col mt-4 w-full">
        <span className="font-semibold text-accent text-xs sm:text-sm dark:text-accentDark uppercase">
          {blog.tags[0]}
        </span>
        <Link href={blog.url} className="inline-block my-1">
          <h2 className="font-semibold text-base sm:text-lg capitalize">
            <span className="group-hover:bg-[length:100%_6px] bg-[length:0px_6px] bg-gradient-to-r from-accent/50 dark:from-accentDark/50 to-accent/50 dark:to-accentDark/50 bg-no-repeat bg-left-bottom transition-[background-size] duration-500">
              {blog.title}
            </span>
          </h2>
        </Link>

        <span className="font-semibold text-gray text-sm sm:text-base dark:text-light/50 capitalize">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutThree;
