import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";

const ErrorElements = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Head>
        <title>page not found -MP news24BD</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="page not found -Prothom Alo"
          key="title"
        />
        <meta
          property="og:image"
          content="https://cdn.dribbble.com/users/594316/screenshots/16462848/media/4e5495fe678213b960203c39b10b7ffc.jpg?compress=1&resize=400x300"
          key="image"
          itemProp="image"
        />
      </Head>
      <div className="flex justify-center items-center">
        <Link href="/">
          <FaAngleLeft class="fa-solid fa-arrow-left text-3xl font-bold" />
        </Link>
        <p>Something went wrong</p>
      </div>
    </div>
  );
};

export default ErrorElements;
