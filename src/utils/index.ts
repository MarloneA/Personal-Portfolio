import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};


export const sortVideos = (videos) => {
  return videos
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.metadata.published), parseISO(b.metadata.published))
    );
};

