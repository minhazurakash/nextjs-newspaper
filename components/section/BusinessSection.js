import React from "react";
import PortaitCard from "../PortaitCard";
import SectionHeader from "../SectionHeader";
import RactangleCard from "../RactangleCard";

const BusinessSection = ({ news }) => {
  return (
    <>
      <div className="entertainment">
        <SectionHeader title={news?.name} link={`/category/${news?.name}`} />
        <div className="grid md:grid-cols-2 gap-5">
          <div className="custom-border">
            <PortaitCard news={news?.news[0]} />
          </div>
          <div className="custom-border">
            <RactangleCard news={news?.news[1]} />
            <RactangleCard news={news?.news[2]} />
            <RactangleCard news={news?.news[3]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessSection;
