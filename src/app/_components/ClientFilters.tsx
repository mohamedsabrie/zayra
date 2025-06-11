"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React from "react";
import PriceRangeFilter from "./PriceRangeFilter";
import CategoryFilter from "./CategoryFilter";

interface ClientFiltersProps {
  categories: string[];
}

const ClientFilters: React.FC<ClientFiltersProps> = ({ categories }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleResetFilters = () => {
    const params = new URLSearchParams();
    params.set("category", "all");
    router.push(`?${params.toString()}`);
  };

  const hasActiveFilters = (searchParams.get("category") !== "all" && searchParams.has("category")) || 
    searchParams.has("minPrice") || 
    searchParams.has("maxPrice");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Filters</h2>
        <button
          onClick={handleResetFilters}
          disabled={!hasActiveFilters}
          className={`px-4 py-2  rounded-md text-sm font-medium transition-colors duration-200 ${
            hasActiveFilters 
              ? "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer" 
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          Reset Filters
        </button>
      </div>
      <CategoryFilter 
        categories={categories} 
        searchParams={searchParams}
      />
      <PriceRangeFilter searchParams={searchParams} />
    </div>
  );
};

export default ClientFilters;
