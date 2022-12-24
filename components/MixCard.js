import React from "react";
import Link from "next/link";

const MixCard = ({ news }) => {
  const content = news?.content.split("<p>")[1];

  const des = `সিনেমার চরিত্রের জন্য তারকারা আলাদাভাবে নিজেদের তৈরি করেন। চরিত্রের জন্য কেউ ওজন বাড়ান তো কেউ ওজন কমান। অনেকে আবার ফাইট শেখেন, কারাতে শেখেন। কিন্তু সাংবাদিক চরিত্রের জন্য সাংবাদিকতা শিখতে শুনেছেন কি? হ্যাঁ, এমনটাই করেছেন বলিউড অভিনেত্রী ক্যাটরিনা কাইফ। ২০১৭ সালের ‘জগ্গা জাসুস’ ছবিতে সাংবাদিক চরিত্রে অভিনয় করেছেন ক্যাটরিনা কাইফ। এই চরিত্র দর্শকের সামনে ফুটিয়ে তুলতে সত্যিকারের সাংবাদিক হয়ে ওঠেন তিনি। এ জন্য তাঁকে কম পরিশ্রম করতে হয়নি। সম্প্রতি এক সাক্ষাৎকারে তিনি বলেছেন তাঁর সাংবাদিক হয়ে ওঠার গল্প।
    ক্যাটরিনা কাইফ ও রণবীর কাপুর
    ক্যাটরিনা কাইফ ও রণবীর কাপুরছবি:ইনস্টাগ্রাম
    সাংবাদিকতা কীভাবে করা হয়, তা জানতেন না ক্যাটরিনা। খুব দ্রুতই তাঁকে শিখতে হবে সাংবাদিকতা। এ কারণে তিনি দেখা করেন বেশ কয়েকজন বিখ্যাত সাংবাদিকের সঙ্গে। তাঁদের কাছ থেকে সাংবাদিকতার নিয়মনীতি শেখেন। তাঁরা কীভাবে কোনো একটি ঘটনা কাভার করেন, তথ্য সংগ্রহ করে সেটি আবার পাঠকের জন্য উপস্থাপন করেন—এসব বিষয় শিখে সাংবাদিকতার একটা ধারণা তৈরি করেন নিজের মধ্যে। এরপর একসময় তিনি নিজেকে সাংবাদিক ভাবা শুরু করে দেন।`;

  return (
    <div className="mb-5 pb-5 custom-card custom-border-bottom">
      <Link href={`/category/${news?.category_name}/${news?.key}`}>
        <div>
          <div className="w-full">
            <h2 className="text-md lg:text-xl font-semibold transition-all">
              {news?.title?.slice(0, 50) || "Please add more news here"}
            </h2>
            <div className="mt-3">
              <div className="flex gap-3">
                <div className="w-3/5 hidden md:block">
                  <p className="">
                    {content?.slice(0, 45) || `${des.slice(0, 45)}..`}
                  </p>
                  <div className="hidden md:block footer mt-4 text-gray-500">
                    <p>{news?.datetime || "infinity hours ago"}</p>
                  </div>
                </div>
                <figure className="w-full md:w-2/5  overflow-hidden">
                  <img
                    className="w-full transition-all"
                    src={
                      news?.image ||
                      "https://i.ibb.co/VVPKsXp/image-Not-Found.jpg"
                    }
                    alt="Movie"
                  />
                </figure>
              </div>
              <div className="footer block md:hidden mt-4 text-gray-500">
                <p>{news?.datetime || "infinity hours ago"}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MixCard;
