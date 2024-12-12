import Categories from "@/components/Video/Categories";
import { VideoLayoutThree } from "@/components/Video/VideoLayout";
import { videos } from "@/utils/fixtures";
import GithubSlugger, { slug } from "github-slugger";

const slugger = new GithubSlugger();

export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];

  videos.map((video) => {
    if (video.metadata.published) {
      video.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params }) {
  return {
    title: `${params.slug.replaceAll("-", " ")} Videos`,
    description: `Learn more about ${
      params.slug === "all" ? "web development" : params.slug
    } through our collection of expert tutorials`,
  };
}

const CategoryPage = ({ params }) => {
  // Separating logic to create list of categories from all blogs
  const allCategories = ["all"]; // Initialize with 'all' category
  videos.forEach((video) => {
    video.tags.forEach((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
    });
  });

  // Sort allCategories to ensure they are in alphabetical order
  allCategories.sort();

  // Step 2: Filter blogs based on the current category (params.slug)
  const filteredVideos = videos.filter((video) => {
    if (params.slug === "all") {
      return true; // Include all blogs if 'all' category is selected
    }
    return video.tags.some((tag) => slug(tag) === params.slug);
  });

  return (
    <article className="flex flex-col mt-12 text-dark dark:text-light px-12">
      <div className="flex flex-col py-8">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
          #{params.slug}
        </h1>
        <span className="inline-block mt-2">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />

      <div className="gap-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 mt-5 sm:mt-10 md:mt-24 sxl:mt-32">
        {filteredVideos.map((video, index) => (
          <article key={index} className="relative col-span-1 row-span-1">
            <VideoLayoutThree video={video} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;
