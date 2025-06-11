import { useRouter } from "next/navigation";
import { useRef, useState, useEffect, useCallback } from "react";

const DEBOUNCE_DELAY = 300; // 300ms delay

interface UsePriceRangeProps {
  searchParams: URLSearchParams;
}

export const usePriceRange = ({ searchParams }: UsePriceRangeProps) => {
  const router = useRouter();
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [localMinPrice, setLocalMinPrice] = useState(
    Number(searchParams.get("minPrice")) || 0
  );
  const [localMaxPrice, setLocalMaxPrice] = useState(
    Number(searchParams.get("maxPrice")) || 1000
  );

  useEffect(() => {
    setLocalMinPrice(Number(searchParams.get("minPrice")) || 0);
    setLocalMaxPrice(Number(searchParams.get("maxPrice")) || 1000);
  }, [searchParams]);

  const updateURL = useCallback(
    (min: number, max: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("minPrice", min.toString());
      params.set("maxPrice", max.toString());
      router.push(`?${params.toString()}`);
    },
    [router, searchParams]
  );

  const debouncedUpdateURL = useCallback(
    (min: number, max: number) => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }

      debounceTimerRef.current = setTimeout(() => {
        updateURL(min, max);
        debounceTimerRef.current = null;
      }, DEBOUNCE_DELAY);
    },
    [updateURL]
  );

  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  const handleMinInputChange = (value: number) => {
    setLocalMinPrice(value);
    if (value >= 0 && value <= localMaxPrice) {
      debouncedUpdateURL(value, localMaxPrice);
    }
  };

  const handleMaxInputChange = (value: number) => {
    setLocalMaxPrice(value);
    if (value >= localMinPrice && value <= 1000) {
      debouncedUpdateURL(localMinPrice, value);
    }
  };

  const handleMinInputBlur = () => {
    const constrainedMin = Math.min(Math.max(0, localMinPrice), localMaxPrice);
    if (constrainedMin !== localMinPrice) {
      setLocalMinPrice(constrainedMin);
      updateURL(constrainedMin, localMaxPrice);
    }
  };

  const handleMaxInputBlur = () => {
    const constrainedMax = Math.max(Math.min(1000, localMaxPrice), localMinPrice);
    if (constrainedMax !== localMaxPrice) {
      setLocalMaxPrice(constrainedMax);
      updateURL(localMinPrice, constrainedMax);
    }
  };

  return {
    localMinPrice,
    localMaxPrice,
    handleMinInputChange,
    handleMaxInputChange,
    handleMinInputBlur,
    handleMaxInputBlur,
  };
}; 