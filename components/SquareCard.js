import React from "react";
import Link from "next/link";

const SquareCard = ({ news }) => {
  return (
    <div className="mb-5 pb-5 custom-card custom-border-bottom">
      <Link href={`/category/${news?.category_name}/${news?.key}`}>
        <div className="">
          <figure className="w-full overflow-hidden">
            <img
              className="w-full transition-all"
              src={news?.image || "https://bpptik.kominfo.go.id/no_image.jpg"}
              alt="Movie"
            />
          </figure>
          <div className="">
            <h2 className="text-xl lg:text-2xl font-semibold my-3 transition-all">
              {news?.title.slice(0, 50) || "Please add more news here"}
            </h2>
            <div className="footer mt-3 text-gray-500">
              <p>{news?.datetime || "infinity hours ago"}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SquareCard;
