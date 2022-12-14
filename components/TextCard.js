import React from "react";
import Link from "next/link";

const TextCard = ({ serial = "0", news }) => {
  if (serial > 0) {
    return (
      <div className="mb-3 pb-3 custom-card custom-border-bottom">
        <Link href={`/category/${news?.category_name}/${news?.key}`}>
          <div className="flex items-center">
            <h2 className="text-4xl text-gray-500 font-semibold inline-block px-3">
              {serial}
            </h2>
            <h2 className="text-md lg:text-xl transition-all">
              {news?.title.slice(0, 50) || "Please add more news!"}
            </h2>
          </div>
        </Link>
      </div>
    );
  }
  return (
    <div className="mb-3 pb-3 custom-card custom-border-bottom">
      <Link href={`/category/${news?.category_name}/${news?.key}`}>
        <div>
          <h2 className="text-md lg:text-xl transition-all">
            {news?.title.slice(0, 30) || "Please add more news!"}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default TextCard;
