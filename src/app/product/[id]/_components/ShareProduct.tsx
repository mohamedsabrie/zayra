"use client";
import { GoShareAndroid } from "react-icons/go";

function ShareProduct({ title, description}:{title:string,description:string}) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 py-3  font-jost mt-16 cursor-pointer"
    >
      <GoShareAndroid className="w-5 h-5" /> Share
    </button>
  );
}

export default ShareProduct;
