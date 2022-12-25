import RactangleCard from "../../../components/RactangleCard";
import Hero from "../../../components/Hero";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import LazyComponents from "../../../components/LazyComponents";

const CategoriesRoute = () => {
  const router = useRouter();
  const [limit, setLimit] = useState(15);
  const [sponsor, setSponsor] = useState([]);
  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setLimit(15);
    });
    fetch("https://mpnews24bd.com/api/sponsor")
      .then((res) => res.json())
      .then((data) => setSponsor(data?.sponsor));
  }, []);
  const fetcher = async (...args) => fetch(...args).then((res) => res.json());

  const {
    data: category,
    error,
    isLoading,
  } = useSWR(
    `https://mpnews24bd.com/api/category/${router.query.name}`,
    fetcher
  );
  const moreNews = category?.news.slice(10, limit);

  return (
    <div className="container mx-auto  px-3 sm:px-0">
      <Head>
        <title>Category -MP news24BD</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Category -MP news24BD" key="title" />
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
          src={
            sponsor?.top ||
            "https://t3.ftcdn.net/jpg/04/75/82/02/360_F_475820251_BuiYKHdgUSx6vIpYJJJJVrtrEn4tVEzZ.jpg"
          }
          alt="ad images"
        />
      </div>
      {/* news and ad  */}
      {category ? <Hero news={category?.news} /> : <LazyComponents />}
      <div className="flex justify-center my-5 w-full h-36">
        <img
          className="w-full object-cover object-center"
          src={
            sponsor?.bottom ||
            "https://t3.ftcdn.net/jpg/04/75/82/02/360_F_475820251_BuiYKHdgUSx6vIpYJJJJVrtrEn4tVEzZ.jpg"
          }
          alt="Your websites add"
        />
      </div>
      <div className="custom-border sm:w-[500px] mx-auto my-10">
        {moreNews?.map((item) => {
          return <RactangleCard news={item} key={item.key} />;
        })}
        {limit < category?.news.length && (
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

// export async function getServerSideProps({ query }) {
//   const res = await fetch(`https://mpnews24bd.com/api/category/${query.name}`);
//   const news = await res.json();

//   return {
//     props: {
//       news: news,
//     },
//   };
// }
