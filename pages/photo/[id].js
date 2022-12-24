import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaCopy,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import MixCard from "../../components/MixCard";
import RactangleCard from "../../components/RactangleCard";
import SectionHeader from "../../components/SectionHeader";
import SquareCard from "../../components/SquareCard";
import PostDetails from "../../components/PostDetails";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import Head from "next/head";
import { useRouter } from "next/router";

const photoDetails = ({ post }) => {
  const router = useRouter();

  const [sponsor, setSponsor] = useState([]);
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(`https://mpnews24bd.com/api/category/${router.query.name}`)
      .then((res) => res.json())
      .then((data) => setNews(data.news));

    fetch("https://mpnews24bd.com/api/sponsor")
      .then((res) => res.json())
      .then((data) => setSponsor(data?.sponsor));
  }, []);
  console.log(post);

  return (
    <div className="container mx-auto my-5 px-3 sm:px-0">
      <Head>
        <title>{post?.photo[0]?.title || "News Details page"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={post?.photo[0]?.title} key="title" />
        <meta
          property="og:image"
          content={post?.photo[0]?.social_image || post?.photo[0]?.image}
          key="image"
          itemProp="image"
        />
      </Head>
      <div className="flex justify-center my-5 h-28 w-full">
        <img
          className="w-full object-cover object-center"
          src={
            sponsor?.top ||
            "https://t3.ftcdn.net/jpg/04/75/82/02/360_F_475820251_BuiYKHdgUSx6vIpYJJJJVrtrEn4tVEzZ.jpg"
          }
          alt="ad images"
        />
      </div>
      {/* post details */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 border-t-2">
        <div className="post-details w-full lg:col-span-3">
          <div className="py-5">
            <SectionHeader title={"Photo"} link={`/photo`} />
            <div>
              <h1 className="text-4xl text-black font-semibold">
                {(post && post?.photo[0]?.title) || "Invalid News title"}
              </h1>
              <div className="mt-8 flex justify-between items-center">
                <div>
                  <p className="text-sm">
                    {(post && post?.photo[0]?.datetime) || "infinity hours ago"}
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
                    <LinkedinShareButton
                      url={`https://akash-prothom-alo.vercel.app/category/${router.query.name}/${router.query.id}`}
                      quote="Hello Developers!"
                    >
                      <div className="text-3xl hover:scale-105 transition-all text-blue-600">
                        <FaLinkedin />
                      </div>
                    </LinkedinShareButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PostDetails news={post?.photo[0]} />
        </div>
        <div className="lg:col-span-1 custom-border">
          <div className="grid gap-14 my-5">
            <img
              className="w-full"
              src={
                sponsor?.side_1 ||
                "https://t3.ftcdn.net/jpg/04/75/82/02/360_F_475820251_BuiYKHdgUSx6vIpYJJJJVrtrEn4tVEzZ.jpg"
              }
              alt=""
            />
            <img
              className="w-full"
              src={
                sponsor?.side_2 ||
                "https://t3.ftcdn.net/jpg/04/75/82/02/360_F_475820251_BuiYKHdgUSx6vIpYJJJJVrtrEn4tVEzZ.jpg"
              }
              alt=""
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-1">
            <MixCard news={news[2]} />
            <MixCard news={news[3]} />
            <MixCard news={news[4]} />
            <MixCard news={news[5]} />
          </div>
        </div>
      </div>

      <div className="mt-10 w-full">
        <div className="w-full">
          <h2 className="mb-4">আরও পড়ুন</h2>
          <div className="grid md:grid-cols-2 gap-5 md:gap-12">
            <RactangleCard news={news[0]} />
            <RactangleCard news={news[1]} />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="mb-4">আরও পড়ুন</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          <SquareCard news={news[6]} />
          <SquareCard news={news[7]} />
          <SquareCard news={news[8]} />
          <SquareCard news={news[9]} />
        </div>
      </div>
    </div>
  );
};

export default photoDetails;

export async function getServerSideProps({ query }) {
  console.log(query);
  const res = await fetch(`https://mpnews24bd.com/api/photo/${query.id}`);
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}
