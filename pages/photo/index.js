import { useRouter } from "next/router";
import React from "react";
import Hero from "../../components/Hero";

const index = ({ photo }) => {
  console.log(photo);
  return (
    <div className="container mx-auto">
      <Hero news={photo} />
    </div>
  );
};

export default index;

export async function getServerSideProps({ query }) {
  const res = await fetch(`https://mpnews24bd.com/api/photo`);
  const data = await res.json();

  return {
    props: {
      photo: data,
    },
  };
}
