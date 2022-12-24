import Link from "next/link";
import React from "react";
import { FaFileImage } from "react-icons/fa";

const PhotoCard = ({ news }) => {
  return (
    <Link href={`/photo/${news?.key}`}>
      <div className="w-full h-full relative custom-card overflow-hidden">
        <div className="bg-red-600 inline-block p-3 rounded-full absolute top-2 left-2 z-10">
          <FaFileImage size={"20px"} color="white" />
        </div>
        <img
          className="w-full object-center object-cover transition-all h-full"
          src={news?.image || "https://i.ibb.co/VVPKsXp/image-Not-Found.jpg"}
          alt=""
        />
        <div className="absolute top-0 flex justify-center items-end  w-full h-full p-3 g-bg bg-opacity-60">
          <h1 className="text-3xl transition-all text-white">
            {news?.title || "Please add title"}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default PhotoCard;
