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
          href="https://images.prothomalo.com/prothomalo/import/default/2016/03/15/4d3620a7127d4a031a05a962fcc4b253-palo-logo.jpg"
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
