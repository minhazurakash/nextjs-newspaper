import React from "react";
import PortaitCard from "../PortaitCard";
import RactangleCard from "../RactangleCard";
import SectionHeader from "../SectionHeader";

const WorldSection = ({ news }) => {
  return (
    <>
      <div className="entertainment">
        <SectionHeader title={news?.name} link={`/category/${news?.name}`} />
        <div className="grid md:grid-cols-3 gap-5">
          <div className="custom-border">
            <PortaitCard news={news?.news[0]} />
            <RactangleCard news={news?.news[1]} />
          </div>
          <div className="custom-border">
            <RactangleCard news={news?.news[2]} />
            <RactangleCard news={news?.news[3]} />
            <RactangleCard news={news?.news[4]} />
            <RactangleCard news={news?.news[5]} />
          </div>
          <div className="custom-border">
            <PortaitCard news={news?.news[6]} />
            <RactangleCard news={news?.news[7]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorldSection;
