import Hero from "../components/Hero";
import BusinessSection from "../components/section/BusinessSection";
import EntertainmentSection from "../components/section/EntertainmentSection";
import LifeStyleSection from "../components/section/LifeStyleSection";
import WorldSection from "../components/section/WorldSection";
import CatagorieSection from "../components/section/CatagorieSection";
import Head from "next/head";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import PhotoSection from "../components/section/PhotoSection";
import useSWR from "swr";
import LazyComponents from "../components/LazyComponents";
const Home = () => {
  const fetcher = async (...args) => fetch(...args).then((res) => res.json());

  const {
    data: category,
    error,
    isLoading,
  } = useSWR("https://mpnews24bd.com/api/category", fetcher);

  const fetcher2 = async (...args) => fetch(...args).then((res) => res.json());

  const { data: news, isLoading2 } = useSWR(
    "https://mpnews24bd.com/api/leatest-news",
    fetcher2
  );
  console.log(news);
  return (
    <div className="container mx-auto px-3 sm:px-0">
      <Head>
        <title>MP news24BD</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="MP news24BD" key="title" />
        <meta
          property="og:image"
          content="https://mpnews24bd.com/uploads/images/mpnews_image20221213054553.png"
          key="image"
          itemProp="image"
        />
      </Head>
      {news ? <Hero news={news?.news} /> : <LazyComponents />}
      {category?.data?.length > 0 ? (
        <>
          <EntertainmentSection news={category?.data[0]} />
          <LifeStyleSection news={category?.data[1]} />
          <WorldSection news={category?.data[2]} />
          <BusinessSection news={category?.data[3]} />
          <CatagorieSection news={category?.data} />
        </>
      ) : (
        <LazyComponents />
      )}
      <PhotoSection />
    </div>
  );
};

export default Home;

// export async function getServerSideProps({ query }) {
//   console.log(query);
//   const res = await fetch(`https://mpnews24bd.com/api/leatest-news`);
//   const data = await res.json();

//   return {
//     props: {
//       news: data,
//     },
//   };
// }
