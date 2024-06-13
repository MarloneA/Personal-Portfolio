"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { IconClipboardCopy } from "@tabler/icons-react";
import Link from "next/link";
import { allBlogs } from "../../../Blog/_index.mjs";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
}) => {
  return (
    <Link
      href={link}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 hover:cursor-pointer",
        className
        // " border-black !shadow-[5px_5px_1px_1px_#000000]"
      )}
    >
      {header}
      <div className="transition group-hover/bento:translate-x-2 duration-200">
        {icon}
        <div className="mt-2 mb-2 font-bold font-sans text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-normal font-sans text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </Link>
  );
};

export function BentoGridSection() {
  // const shuffledBlogs = allBlogs.sort(() => 0.5 - Math.random());

  const bentoContent = allBlogs.slice(0, 4).map((blog, index) => {
    let className;
    if (index === 0 || index === 3) {
      className = "md:col-span-2";
    } else {
      className = "md:col-span-1";
    }

    return {
      ...blog,
      header: <Skeleton src={blog?.image?.filePath.replace("../public", "")} />,
      className: className,
      icon: <IconClipboardCopy className="w-4 h-4 text-neutral-500" />,
      url: `blogs/${blog._id.replace("/index.mdx", "")}`,
    };
  });

  return (
    <BentoGrid className="md:auto-rows-[20rem] mx-auto max-w-4xl">
      {bentoContent.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
          link={item.url}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({ src }: { src: string }) => (
  <div className="flex flex-1 dark:border-white/[0.2] bg-dot-black/[0.2] bg-neutral-100 dark:bg-dot-white/[0.2] dark:bg-black border border-transparent rounded-xl w-full h-full min-h-[6rem] hover:cursor">
    <Image
      src={src}
      alt="demo"
      width="1280"
      height="720"
      className="w-full h-auto object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>
);
