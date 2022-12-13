import Hero from "../components/Hero";
import BusinessSection from "../components/section/BusinessSection";
import EntertainmentSection from "../components/section/EntertainmentSection";
import LifeStyleSection from "../components/section/LifeStyleSection";
import WorldSection from "../components/section/WorldSection";
import CatagorieSection from "../components/section/CatagorieSection";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home = ({ news }) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(`https://mpnews24bd.com/api/category`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="container mx-auto px-3 sm:px-0">
      <Head>
        <title>Prothom Alo</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Prothom Alo" key="title" />
        <meta
          property="og:image"
          content="https://images.prothomalo.com/prothomalo/import/default/2016/03/15/4d3620a7127d4a031a05a962fcc4b253-palo-logo.jpg"
          key="image"
          itemProp="image"
        />
      </Head>
      <Hero news={news?.news} />
      <EntertainmentSection news={category[0]} />
      <LifeStyleSection news={category[1]} />
      <WorldSection news={category[2]} />
      <BusinessSection news={category[3]} />
      <CatagorieSection news={category} />
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
