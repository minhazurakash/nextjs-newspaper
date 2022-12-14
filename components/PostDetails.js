import React, { useState } from "react";
import renderHTML from "react-render-html";
import Spinner from "./Spinner";

const PostDetails = ({ news }) => {
  const news_key = news?.key;
  const [loading, setLoading] = useState(false);
  const comments = news?.comments;
  console.log(comments);
  const postComment = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let comment = e.target.comment.value;
    const userComment = { news_key, name, comment };

    setLoading(true);
    fetch("https://mpnews24bd.com/api/comment/store", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(userComment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setLoading(false);
          comments.push(userComment);
          e.target.name.value = "";
          e.target.comment.value = "";
        } else {
          setLoading(false);
        }
      });
  };
  const des = `সিনেমার চরিত্রের জন্য তারকারা আলাদাভাবে নিজেদের তৈরি করেন। চরিত্রের জন্য কেউ ওজন বাড়ান তো কেউ ওজন কমান। অনেকে আবার ফাইট শেখেন, কারাতে শেখেন। কিন্তু সাংবাদিক চরিত্রের জন্য সাংবাদিকতা শিখতে শুনেছেন কি? হ্যাঁ, এমনটাই করেছেন বলিউড অভিনেত্রী ক্যাটরিনা কাইফ। ২০১৭ সালের ‘জগ্গা জাসুস’ ছবিতে সাংবাদিক চরিত্রে অভিনয় করেছেন ক্যাটরিনা কাইফ। এই চরিত্র দর্শকের সামনে ফুটিয়ে তুলতে সত্যিকারের সাংবাদিক হয়ে ওঠেন তিনি। এ জন্য তাঁকে কম পরিশ্রম করতে হয়নি। সম্প্রতি এক সাক্ষাৎকারে তিনি বলেছেন তাঁর সাংবাদিক হয়ে ওঠার গল্প।
    ক্যাটরিনা কাইফ ও রণবীর কাপুর
    ক্যাটরিনা কাইফ ও রণবীর কাপুরছবি:ইনস্টাগ্রাম
    সাংবাদিকতা কীভাবে করা হয়, তা জানতেন না ক্যাটরিনা। খুব দ্রুতই তাঁকে শিখতে হবে সাংবাদিকতা। এ কারণে তিনি দেখা করেন বেশ কয়েকজন বিখ্যাত সাংবাদিকের সঙ্গে। তাঁদের কাছ থেকে সাংবাদিকতার নিয়মনীতি শেখেন। তাঁরা কীভাবে কোনো একটি ঘটনা কাভার করেন, তথ্য সংগ্রহ করে সেটি আবার পাঠকের জন্য উপস্থাপন করেন—এসব বিষয় শিখে সাংবাদিকতার একটা ধারণা তৈরি করেন নিজের মধ্যে। এরপর একসময় তিনি নিজেকে সাংবাদিক ভাবা শুরু করে দেন।
    ক্যাটরিনা কাইফ
    ক্যাটরিনা কাইফ
    শুধু নিউজ সংগ্রহ নয়, ফুটেজ সম্পর্কেও ধারণা নেন ক্যাট। সাংবাদিকদের কাছ থেকে বিভিন্ন ঘটনার ফুটেজ সংগ্রহ করে দেখেন। একই সঙ্গে বিভিন্ন মাধ্যম থেকে প্রায় ১০০ ঘণ্টার ভিডিও ফুটেজ দেখেন শুধু সাংবাদিকদের জীবন বোঝার জন্য। এ ছাড়া বিভিন্ন সিনেমা, গল্পে যেখানেই সাংবাদিক চরিত্র পেয়েছেন, তা তিনি আয়ত্ত করার চেষ্টা করেছেন। সাংবাদিক শ্রুতি চরিত্রের জন্য তখনকার নতুন এই অভিজ্ঞতা এখনো মনে পড়ে ক্যাটরিনার।

    ‘জগ্গা জাসুস’ ছবিতে ক্যাটরিনা ও রণবীর কাপুর
    ‘জগ্গা জাসুস’ ছবিতে ক্যাটরিনা ও রণবীর কাপুর
    অভিনয়শিল্পীদের নতুন নতুন চরিত্রের জন্য প্রতিবারই নিজেদের প্রস্তুত করতে হয়। আর এই প্রস্তুতি নিতে হয় দর্শকের সামনে চরিত্রটি ফুটিয়ে তোলার জন্য। যিনি যত বেশি পরিশ্রম করেন, দর্শকের কাছে তিনি তত বেশি জনপ্রিয় হয়ে ওঠেন। ‘জগ্গা জাসুস’ ছবিতে ক্যাটরিনার শ্রুতি চরিত্রটাও তখন প্রশংসিত হয়েছিল। এই অভিনেত্রী এখন নতুন ছবি ‘মেরি ক্রিসমাস’–এর জন্য প্রস্তুত হচ্ছেন। আগামী বছর ছবিটি মুক্তি পাবে। এই ছবিতে দক্ষিণি অভিনেতা বিজয় সেতুপতির বিপরীতে তাঁকে দেখা যাবে। কিছুদিন আগে মুক্তি পেয়েছিল ক্যাটরিনা অভিনীত ছবি ‘ফোন ভূত’। ছবিটি বক্স অফিসে তেমন সাড়া ফেলতে পারেনি।`;

  // if (loading) {
  //   return <Spinner />;
  // }
  return (
    <div>
      <div className="w-full py-4 border-t-2 border-b-2">
        <img
          className="w-full"
          src={news?.image || "https://bpptik.kominfo.go.id/no_image.jpg"}
          alt="post details images"
        />
      </div>
      <div className="text-lg text-black leading-9 mt-5">
        {(news && renderHTML(news?.content)) || (
          <p className=" text-justify">{des}</p>
        )}
      </div>
      <div className="my-14">
        <div className="border-b-2 border-t-2 py-5 mb-5">
          <h3 className="text-2xl pl-5">মন্তব্য করুন</h3>
        </div>
        <div className="md:w-[500px]">
          <div className="flex gap-5 items-start">
            <div className="w-14 h-12 rounded-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFnG0huY6whcqQtmgJDP7XgSb8VCpmLUnKXw&usqp=CAU"
                alt="img"
              />
            </div>
            <div className="w-full">
              <form onSubmit={postComment}>
                <input
                  name="email"
                  className="input mb-5 w-full bg-gray-200"
                  placeholder="Email"
                  type="text"
                />
                <input
                  name="name"
                  className="input mb-5 w-full bg-gray-200"
                  placeholder="Name"
                  type="text"
                  required
                />
                <textarea
                  name="comment"
                  className="textarea w-full bg-gray-200 min-h-[150px]"
                  placeholder="Comment"
                  type="text"
                  required
                />
                <div className="flex justify-end mt-3">
                  <button className="btn btn-accent bg-red-700 text-white border-none rounded-sm btn-sm">
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        {news?.comments &&
          news?.comments.map((item) => {
            return (
              <div className="flex gap-5 items-start my-5">
                <div className="w-10 h-9 rounded-full">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFnG0huY6whcqQtmgJDP7XgSb8VCpmLUnKXw&usqp=CAU"
                    alt="img"
                  />
                </div>
                <div className="w-full">
                  <h2 className="text-xl font-bold text-blue-500">
                    {item?.name}
                  </h2>
                  <p>{item?.comment}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PostDetails;
