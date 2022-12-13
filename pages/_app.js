import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://mpnews24bd.com/uploads/images/mpnews_image20221213082558.png"
        />
      </Head>
      {loading && <Spinner />}
      <Layout loading={loading}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
