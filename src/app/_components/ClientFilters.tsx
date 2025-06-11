"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import PriceRangeFilter from "./PriceRangeFilter";
import CategoryFilter from "./CategoryFilter";

interface ClientFiltersProps {
  categories: string[];
}

const ClientFilters: React.FC<ClientFiltersProps> = ({ categories }) => {
  const searchParams = useSearchParams();

  return (
    <div className="space-y-6">
      <CategoryFilter 
        categories={categories} 
        searchParams={searchParams}
      />
      <PriceRangeFilter searchParams={searchParams} />
    </div>
  );
};

export default ClientFilters;
