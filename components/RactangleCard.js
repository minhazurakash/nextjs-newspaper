import React from "react";
import Link from "next/link";

const RactangleCard = ({ news }) => {
  return (
    <div className="mb-5 pb-5 custom-card custom-border-bottom">
      <Link href={`/category/${news?.category_name}/${news?.key}`}>
        <div className={`flex justify-between gap-1`}>
          <div className="w-full">
            <h2 className="text-md lg:text-xl font-semibold transition-all">
              {news?.title?.slice(0, 80) || "Please add more news!"}
            </h2>
            <div className="footer mt-4 text-gray-500">
              <p>{news?.datetime}</p>
            </div>
          </div>
          <figure className="w-56 h-28 overflow-hidden">
            <img
              className="w-full h-full object-cover object-center transition-all"
              src={
                news?.image || "https://i.ibb.co/VVPKsXp/image-Not-Found.jpg"
              }
              alt="Movie"
            />
          </figure>
        </div>
      </Link>
    </div>
  );
};

export default RactangleCard;
