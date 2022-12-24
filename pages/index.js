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

const Home = ({ news }) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(`https://mpnews24bd.com/api/category`)
      .then((res) => res.json())
      .then((data) => setCategory(data?.data));
  }, []);

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
      <Hero news={news?.news} />
      {category?.length > 0 ? (
        <>
          <EntertainmentSection news={category[0]} />
          <LifeStyleSection news={category[1]} />
          <WorldSection news={category[2]} />
          <BusinessSection news={category[3]} />
          <CatagorieSection news={category} />
        </>
      ) : (
        <div className="flex justify-center my-14">
          <button className="btn btn-xs btn-accent">Loading...</button>
        </div>
      )}
      <PhotoSection />
    </div>
  );
};

export default Home;

export async function getServerSideProps({ query }) {
  console.log(query);
  const res = await fetch(`https://mpnews24bd.com/api/leatest-news`);
  const data = await res.json();

  return {
    props: {
      news: data,
    },
  };
}
