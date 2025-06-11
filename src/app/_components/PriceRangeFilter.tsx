"use client";

import React from "react";
import { PriceInput } from "./PriceInput";
import { usePriceRange } from "@/hooks/usePriceRange";

interface PriceRangeFilterProps {
  searchParams: URLSearchParams;
}

const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({ searchParams }) => {
  const {
    localMinPrice,
    localMaxPrice,
    handleMinInputChange,
    handleMaxInputChange,
    handleMinInputBlur,
    handleMaxInputBlur,
  } = usePriceRange({ searchParams });

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-3">Price Range</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <PriceInput
            id="min-price"
            label="Min Price ($)"
            value={localMinPrice}
            onChange={handleMinInputChange}
            onBlur={handleMinInputBlur}
            min={0}
            max={localMaxPrice}
          />
          <span className="mt-6 text-gray-500">to</span>
          <PriceInput
            id="max-price"
            label="Max Price ($)"
            value={localMaxPrice}
            onChange={handleMaxInputChange}
            onBlur={handleMaxInputBlur}
            min={localMinPrice}
            max={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
