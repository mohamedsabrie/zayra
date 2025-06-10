import React from "react";

function Badge({ count}:{count:number}) {
  return (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
      {count}
    </span>
  );
}

export default Badge;
