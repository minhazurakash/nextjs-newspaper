import React from "react";
import Link from "next/link";

const MainCard = ({ link = "/category/school/id", news }) => {
  return (
    <>
      <Link href={`/category/${news?.category_name}/${news?.key}`}>
        <div className="w-full md:h-[450px] relative custom-card overflow-hidden">
          <img
            className="w-full object-center object-cover transition-all h-full"
            src={
              news?.image ||
              "https://images.prothomalo.com/prothomalo-bangla%2F2022-12%2Fe4441a45-5676-4d7d-a39c-70cbfbf057ab%2Ff6db3a52-faa7-43ed-90d3-05998319121a.jpg?rect=59%2C0%2C633%2C422&auto=format%2Ccompress&fmt=webp&format=webp&dpr=1.0&q=70&w=300"
            }
            alt=""
          />
          <div className="absolute top-0 flex justify-center items-end  w-full h-full p-3 bg-black bg-opacity-60">
            <h1 className="text-3xl transition-all text-white">
              {news?.title}
            </h1>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MainCard;
