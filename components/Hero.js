import React, { useEffect, useState } from "react";
import MainCard from "./MainCard";
import PortaitCard from "./PortaitCard";
import TextCard from "./TextCard";

const Hero = ({ news }) => {
  const [sponsor, setSponsor] = useState([]);
  useEffect(() => {
    fetch("https://mpnews24bd.com/api/sponsor")
      .then((res) => res.json())
      .then((data) => setSponsor(data?.sponsor));
  }, []);
  return (
    <div className="grid  lg:grid-cols-4 gap-5">
      <div className="lg:col-span-3 grid gap-5">
        {/* news  */}
        <div className="grid md:grid-cols-3 gap-5">
          <div className="md:col-span-2">
            <MainCard news={news[0]} />
          </div>
          <div className="md:col-span-1">
            <PortaitCard news={news[1]} />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <PortaitCard news={news[2]} />
          <PortaitCard news={news[3]} />
          <PortaitCard news={news[4]} />
        </div>
      </div>
      <div className="col-span-1 custom-border">
        <div className="mb-5">
          <img
            className="w-full"
            src={
              sponsor?.side_1 ||
              "https://t3.ftcdn.net/jpg/04/75/82/02/360_F_475820251_BuiYKHdgUSx6vIpYJJJJVrtrEn4tVEzZ.jpg"
            }
            alt=""
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 custom-border">
          <TextCard serial="1" news={news[5]} />
          <TextCard serial="2" news={news[6]} />
          <TextCard serial="3" news={news[7]} />
          <TextCard serial="4" news={news[8]} />
          <TextCard serial="5 " news={news[9]} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
