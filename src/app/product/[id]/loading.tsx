export default function ProductLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 animate-pulse">
      <div className="flex justify-center">
        <div className="flex justify-center md:items-start aspect-[2/3] relative w-full max-w-[400px]">
          <div className="w-full h-full bg-gray-200 rounded-lg" />
        </div>
      </div>
      
      <div className="space-y-6">
        {/* Title skeleton */}
        <div className="h-8 bg-gray-200 rounded w-3/4" />
        
        {/* Price skeleton */}
        <div className="h-6 bg-gray-200 rounded w-1/4" />
        
        {/* Description skeleton */}
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="h-4 bg-gray-200 rounded w-4/6" />
        </div>
        
        {/* Add to cart section skeleton */}
        <div className="space-y-4 pt-6">
          <div className="h-10 bg-gray-200 rounded w-1/3" />
          <div className="h-12 bg-gray-200 rounded w-full" />
        </div>
        
        {/* Additional info skeleton */}
        <div className="space-y-4 pt-6">
          <div className="h-4 bg-gray-200 rounded w-2/3" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
        </div>
      </div>
    </div>
  );
} 