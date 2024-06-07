import { slug } from "github-slugger";
import React from "react";
import Category from "./Category";

const Categories = ({ categories, currentSlug }) => {
  return (
    <div className="flex flex-wrap items-start border-dark mx-5 md:mx-[7.5rem] mt-10 px-0 py-4 border-t-2 border-b-2 dark:border-light border-solid font-medium text-dark dark:text-light">
      {categories.map((cat) => (
        <Category
          key={cat}
          link={`/blogs/categories/${cat}`}
          name={cat}
          active={currentSlug === slug(cat)}
        />
      ))}
    </div>
  );
};

export default Categories;
