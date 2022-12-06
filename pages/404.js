import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import Link from "next/link";

const ErrorElements = () => {
  return (
    <div className="h-screen flex justify-center items-center">
       <Head>
            <title>page not found -Prothom Alo</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content="page not found -Prothom Alo" key="title" />
            <meta property="og:image" content="https://images.prothomalo.com/prothomalo/import/default/2016/03/15/4d3620a7127d4a031a05a962fcc4b253-palo-logo.jpg" key="image" itemProp='image'/>
          </Head>
       <div className="flex justify-center items-center">
            <Link href="/">
                <FaAngleLeft class="fa-solid fa-arrow-left text-3xl font-bold"/>
            </Link>  
            <p>Something went wrong</p>
       </div>
    </div>
  );
};

export default ErrorElements;