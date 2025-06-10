import Image from "next/image";
import Link from "next/link";
import React from "react";
import ChevronRightIcon from "@assets/chevron-right.svg";

function Breadcrumbs({ items }: { items: { title: string; href: string }[] }) {
  return (
    <div>
      <ol className="flex items-center gap-x-4 font-jost">
        {items.map((breadcrumb, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={breadcrumb.title} className="flex">
              <Link href={breadcrumb.href}>{breadcrumb.title}</Link>
              {!isLast && (
                <Image
                  height={12}
                  width={12}
                  className="ml-4 "
                  src={ChevronRightIcon}
                  alt="arrow-right-icon"
                />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Breadcrumbs;
