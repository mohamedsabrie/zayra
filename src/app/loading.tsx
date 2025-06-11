import Loading from "./_components/loading";

export default function LoadingPage() {
  return <Loading />;
}

export function RootLoading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="rounded-lg overflow-hidden">
          {/* Image placeholder */}
          <div className="aspect-[3/4] bg-gray-200" />
          
          <div className="p-4 space-y-3">
            {/* Title placeholder */}
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            
            {/* Price placeholder */}
            <div className="h-4 bg-gray-200 rounded w-1/4" />
            
            {/* Description placeholder */}
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded w-full" />
              <div className="h-3 bg-gray-200 rounded w-5/6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 