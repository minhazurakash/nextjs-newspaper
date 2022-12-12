import RactangleCard from "../../../components/RactangleCard";
import Hero from "../../../components/Hero";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CategoriesRoute = ({ news }) => {
  const router = useRouter();
  const [limit, setLimit] = useState(15);
  const moreNews = news?.news.slice(10, limit);
  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setLimit(15);
    });
  }, []);
  return (
    <div className="container mx-auto  px-3 sm:px-0">
      <Head>
        <title>Category -Prothom Alo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Category -Prothom Alo" key="title" />
        <meta
          property="og:image"
          content="https://images.prothomalo.com/prothomalo/import/default/2016/03/15/4d3620a7127d4a031a05a962fcc4b253-palo-logo.jpg"
          key="image"
          itemProp="image"
        />
      </Head>
      <div className="flex justify-center my-5 h-28 w-full">
        <img
          className="w-full object-cover object-center"
          src="https://www.famap.com.ng/wp-content/uploads/2017/11/advertise.jpg"
          alt="ad images"
        />
      </div>
      {/* news and ad  */}
      <Hero news={news?.news} />
      <div className="flex justify-center my-5">
        <img
          src="https://www.famap.com.ng/wp-content/uploads/2017/11/advertise.jpg"
          alt=""
        />
      </div>
      <div className="custom-border sm:w-[500px] mx-auto my-10">
        {moreNews?.map((item) => {
          return <RactangleCard news={item} key={item.key} />;
        })}
        {limit < news?.news.length && (
          <div className="text-center">
            <button onClick={() => setLimit(limit + 5)} className="btn btn-xs">
              Load more ...
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesRoute;

export async function getServerSideProps({ query }) {
  const res = await fetch(`https://mpnews24bd.com/api/category/${query.name}`);
  const news = await res.json();

  return {
    props: {
      news: news,
    },
  };
}
