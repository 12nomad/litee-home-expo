import { useState } from "react";

import { Category } from "@/enums/category.enum";

const useExploreScreen = () => {
  const [currentCategory, setCurrentCategory] = useState<Category>(
    Category.Trending
  );
  const onCategoryChange = (category: Category) => setCurrentCategory(category);

  return { currentCategory, onCategoryChange };
};

export default useExploreScreen;
