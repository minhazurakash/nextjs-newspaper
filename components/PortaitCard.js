import React from "react";
import Link from "next/link";

const PortaitCard = ({ news }) => {
  const DefaultNews =
    "আসছে ব্রুস লির বায়োপিক, লি চরিত্রে অভিনয় করবেন আরেক লিমার্শাল আর্টের সবচেয়ে বড় বিজ্ঞাপন ব্রুস লি। মার্শাল আর্টকে তিনিই সারা দুনিয়ায় জনপ্রিয় করে তুলেছিলেন। সারা বিশ্বেই ছড়িয়ে-ছিটিয়ে ছিল তাঁর তরুণ ভক্তদল। যুগে যুগে পশ্চিমা ও প্রাচ্যের সংস্কৃতি বা বিনোদন দুনিয়ার মধ্যে যোগসূত্র তৈরি করেছিলেন যাঁরা, তাঁদের অন্যতম ব্রুস লি। জন্ম হয়েছিল যুক্তরাষ্ট্রের সান ফ্রান্সিসকোর চায়না টাউনে, ১৯৪০ সালের ২৭ নভেম্বর। মৃত্যু ১৯৭৩ সালের ২০ জুলাই। মৃত্যুর পর এত বছর পেরিয়ে গেলেও ব্রুস লি নানাভাবে নানা প্রসঙ্গে উঠে আসেন। এবার তাঁর বায়োপিকের ঘোষণা দিলেন অস্কারজয়ী নির্মাতা অ্যাং লি।";
  const content = news?.content.replace(/<[^>]*>/g, "");

  return (
    <div className="mb-5 pb-5 custom-card custom-border-bottom">
      <Link href={`/category/${news?.category_name}/${news?.key}`}>
        <div className="">
          <figure className="w-full overflow-hidden md:h-[250px] ">
            <img
              className="w-full h-full transition-all object-cover object-center"
              src={
                news?.image || "https://i.ibb.co/VVPKsXp/image-Not-Found.jpg"
              }
              alt="Movie"
            />
          </figure>
          <div className="">
            <h2 className="text-xl lg:text-2xl font-semibold my-3 transition-all">
              {news?.title?.slice(0, 50) || "Please add more news here"}
            </h2>
            <p>{content?.slice(0, 100) || DefaultNews.slice(0, 100)}...</p>
            <div className="footer mt-3 text-gray-500">
              <p>{news?.datetime || "infinity hours ago"}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PortaitCard;
