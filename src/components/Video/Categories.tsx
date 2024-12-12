import { slug } from "github-slugger";
import React from "react";
import Category from "../Blog/Category";

const Categories = ({ categories, currentSlug }) => {
  return (
    <div className="flex flex-wrap items-start border-dark border-t-2 border-b-2 dark:border-light border-solid font-medium text-dark dark:text-light py-12">
      {categories.map((cat) => (
        <Category
          key={cat}
          link={`/videos/categories/${cat}`}
          name={cat}
          active={currentSlug === slug(cat)}
        />
      ))}
    </div>
  );
};

export default Categories;
