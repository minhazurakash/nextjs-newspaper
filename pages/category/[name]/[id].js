import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaCopy,
  FaFacebookSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import MixCard from "../../../components/MixCard";
import RactangleCard from "../../../components/RactangleCard";
import SectionHeader from "../../../components/SectionHeader";
import SquareCard from "../../../components/SquareCard";
import PostDetails from "../../../components/PostDetails";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import Head from "next/head";
import { useRouter } from "next/router";

const PostDetailsRoute = ({ post }) => {
  const router = useRouter();

  console.log(post);
  //   const [news, setNews] = useState([]);
  //   useEffect(() => {
  //     fetch("https://mpnews24bd.com/api/news")
  //       .then((res) => res.json())
  //       .then((data) => setNews(data.news));
  //   }, []);
  //   console.log(news);

  return (
    <div className="container mx-auto my-5 px-3 sm:px-0">
      <Head>
        <title>{post.data[0]?.title || "News Details page"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={post.data[0]?.title} key="title" />
        <meta
          property="og:image"
          content="https://images.prothomalo.com/prothomalo-bangla%2F2022-08%2F8e74a724-2fed-4389-9cd1-e83b7236affe%2F124156345_2783608135249714_6184068585405836214_n.jpg?rect=0%2C0%2C720%2C405&auto=format%2Ccompress&fmt=webp&format=webp&w=900&dpr=1.0"
          key="image"
          itemProp="image"
        />
      </Head>
      <div className="flex justify-center my-5">
        <img
          src="https://tpc.googlesyndication.com/simgad/3217729136485671980"
          alt="ad images"
        />
      </div>
      {/* post details */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 border-t-2">
        <div className="post-details w-full lg:col-span-3">
          <div className="py-5">
            <SectionHeader
              title={router.query.name}
              link={`/category/${router.query.name}`}
            />
            <div>
              <h1 className="text-4xl text-black font-semibold">
                {(post && post.data[0]?.title) ||
                  "যেভাবে ‘সাংবাদিক’ হয়েছিলেন ক্যাটরিনা"}{" "}
              </h1>
              <div className="mt-8 flex justify-between items-center">
                <div>
                  <p className="text-sm">
                    {(post && post?.data[0]?.datetime) ||
                      "প্রকাশ: ০৪ ডিসেম্বর ২০২২, ২০: ০০"}
                  </p>
                </div>
                <div>
                  <h3 className="mb-2">Share with friends</h3>
                  <div className="flex gap-5">
                    <FacebookShareButton
                      url={`https://akash-prothom-alo.vercel.app/category/${router.query.name}/${router.query.id}`}
                      quote="Hello Developers!"
                    >
                      <div className="text-3xl hover:scale-105 transition-all text-blue-600">
                        <FaFacebookSquare />
                      </div>
                    </FacebookShareButton>
                    <TwitterShareButton
                      url={`https://akash-prothom-alo.vercel.app/category/${router.query.name}/${router.query.id}`}
                      quote="Hello Developers!"
                    >
                      <div className="text-3xl hover:scale-105 transition-all text-blue-600">
                        <FaTwitterSquare />
                      </div>
                    </TwitterShareButton>
                    <WhatsappShareButton
                      url={`https://akash-prothom-alo.vercel.app/category/${router.query.name}/${router.query.id}`}
                      quote="Hello Developers!"
                    >
                      <div className="text-3xl hover:scale-105 transition-all text-blue-600">
                        <FaWhatsappSquare />
                      </div>
                    </WhatsappShareButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PostDetails news={post?.data[0]} />
          <div className="mt-10">
            <div>
              <h2 className="mb-4">আরও পড়ুন</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <RactangleCard />
                <RactangleCard />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 custom-border">
          <div className="grid gap-5 my-5">
            <img
              className="w-full"
              src="https://tpc.googlesyndication.com/simgad/6035381064038992771"
              alt=""
            />
            <img
              className="w-full"
              src="https://tpc.googlesyndication.com/simgad/6035381064038992771"
              alt=""
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-1">
            <MixCard />
            <MixCard />
            <MixCard />
            <MixCard />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="mb-4">আরও পড়ুন</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          <SquareCard />
          <SquareCard />
          <SquareCard />
          <SquareCard />
        </div>
      </div>
    </div>
  );
};

export default PostDetailsRoute;

export async function getServerSideProps({ query }) {
  console.log(query);
  const res = await fetch(
    `https://mpnews24bd.com/api/category/${query.name}/${query.id}`
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}
