"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconBoxAlignRightFilled,
} from "@tabler/icons-react";
import Link from "next/link";

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
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </Link>
  );
};

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
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
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black hover:cursor">
    <Image
      src={src}
      alt="demo"
      width="1280"
      height="720"
      className="h-auto w-full object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>
);
const items = [
  {
    title: "The Art of Zen",
    description: "Mindfulness And Meditation Techniques For Developers.",
    header: <Skeleton src="/blogs/c-d-x-PDX_a_82obo-unsplash.jpg" />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    url: "blogs/mindfulness-and-meditation-techniques-for-developers-improving-focus-and-clarity",
  },
  {
    title: "web developement tools",
    description: "10 Essential Web Development Tools For Productivity.",
    header: <Skeleton src="/blogs/lauren-mancke-aOC7TSLb1o8-unsplash.jpg" />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    url: "/blogs/web-development-tools-productivity",
  },
  {
    title: "Best Practices For Web Accessibility",
    description: "Discover how to Build Inclusive Websites.",
    header: <Skeleton src="/blogs/marvin-meyer-SYTO3xs06fU-unsplash.jpg" />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    url: "/blogs/web-accessibility-best-practices",
  },
  {
    title: "The Power Of JavaScript Frameworks",
    description: "Understand the impact of Angular, React and Vue.Js.",
    header: (
      <Skeleton src="/blogs/paul-esch-laurent-oZMUrWFHOB4-unsplash.jpg" />
    ),
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    url: "/blogs/js-frameworks-comparison",
  },
];
