import BlogDetails from "@/components/Blog/BlogDetails";
import RenderMdx from "@/components/Blog/RenderMdx";
import Tag from "@/components/Elements/Tag";
import { siteMetadata } from "@/utils/siteMetaData";

import { slug } from "github-slugger";
import Image from "next/image";
import { notFound } from "next/navigation";
import { allBlogs } from "../../../../.contentlayer/generated";

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: String;
  };
}) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }
  const ogImages = imageList.map((img) => {
    return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
  });

  const authors = blog?.author ? [blog.author] : siteMetadata.author;

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl + blog.url,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
  };
}

export default function BlogPage({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  if (!blog) {
    notFound();
  }

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: blog.title,
    description: blog.description,
    image: imageList,
    datePublished: new Date(blog.publishedAt).toISOString(),
    dateModified: new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    author: [
      {
        "@type": "Person",
        name: blog?.author ? [blog.author] : siteMetadata.author,
        url: siteMetadata.twitter,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <div className="relative bg-dark mb-8 w-full h-[70vh] text-center">
          <div className="top-1/2 left-1/2 z-10 absolute flex flex-col justify-center items-center w-full -translate-x-1/2 -translate-y-1/2">
            <Tag
              name={blog.tags[0]}
              link={`/blogs/categories/${slug(blog.tags[0])}`}
              className="px-6 py-2 text-sm"
            />
            <h1 className="inline-block relative mt-6 w-5/6 font-semibold text-2xl text-light md:text-3xl lg:text-5xl capitalize !leading-normal">
              {blog.title}
            </h1>
          </div>
          <div className="top-0 right-0 bottom-0 left-0 absolute bg-dark/60 dark:bg-dark/40 h-full" />
          <Image
            src={blog.image.filePath.replace("../public", "")}
            placeholder="blur"
            blurDataURL={blog.image.blurhashDataUrl}
            alt={blog.title}
            width={blog.image.width}
            height={blog.image.height}
            className="w-full h-full aspect-square object-center object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <BlogDetails blog={blog} slug={params.slug} />

        <div className="gap-y-8 lg:gap-8 sxl:gap-16 grid grid-cols-12 mt-8 px-5 md:px-10">
          <div className="col-span-12 lg:col-span-4">
            <details
              className="top-6 sticky border-[1px] border-dark p-4 dark:border-light border-solid rounded-lg max-h-[80vh] text-dark dark:text-light overflow-hidden overflow-y-auto"
              open
            >
              <summary className="font-semibold text-lg capitalize cursor-pointer">
                Table Of Content
              </summary>
              <ul className="mt-4 font-in text-base">
                {blog.toc.map((heading) => {
                  return (
                    <li key={`#${heading.slug}`} className="py-1">
                      <a
                        href={`#${heading.slug}`}
                        data-level={heading.level}
                        className="flex justify-start items-center border-dark/40 data-[level=two]:pt-2 data-[level=three]:pl-4 data-[level=two]:pl-0 sm:data-[level=three]:pl-6 data-[level=two]:border-t border-solid"
                      >
                        {heading.level === "three" ? (
                          <span className="flex bg-dark mr-2 rounded-full w-1 h-1">
                            &nbsp;
                          </span>
                        ) : null}

                        <span className="hover:underline">{heading.text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </details>
          </div>
          <RenderMdx blog={blog} />
        </div>
      </article>
    </>
  );
}
