"use client";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const mdxComponents = {
  Image,
};

const RenderMdx = ({ blog }) => {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div className="dark:prose-blockquote:bg-accentDark/20 prose-blockquote:bg-accent/20 prose-blockquote:p-2 prose-blockquote:px-6 dark:prose-blockquote:border-accentDark prose-blockquote:border-accent col-span-12 lg:col-span-8 prose-blockquote:rounded-r-lg font-in prose sm:prose-base md:prose-lg max-w-max sm:first-letter:text-5xl first-letter:text-3xl dark:prose-li:marker:text-accentDark prose-li:marker:text-accent prose-blockquote:not-italic dark:prose-invert">
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
