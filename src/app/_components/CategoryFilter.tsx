"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface CategoryFilterProps {
  categories: string[];
  searchParams: URLSearchParams;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  searchParams,
}) => {
  const { push } = useRouter();
  const [localCategory, setLocalCategory] = React.useState(searchParams.get("category") || "all");

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    return params.toString();
  };

  // Update local state and URL when category changes
  const handleCategoryChange = (category: string) => {
    setLocalCategory(category); // Update local state immediately
    push(`?${createQueryString("category", category)}`); // Update URL after
  };

  // Update local state when URL changes
  React.useEffect(() => {
    setLocalCategory(searchParams.get("category") || "all");
  }, [searchParams]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-3">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <label
            key={category}
            className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-md"
          >
            <input
              type="radio"
              name="category"
              value={category}
              checked={localCategory === category}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="form-radio text-blue-600"
            />
            <span className="capitalize">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
