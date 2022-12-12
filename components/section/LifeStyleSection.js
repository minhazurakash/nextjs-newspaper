import React from "react";
import PortaitCard from "../PortaitCard";
import SectionHeader from "../SectionHeader";

const LifeStyleSection = ({ news }) => {
  return (
    <>
      <div className="entertainment">
        <SectionHeader title={news?.name} link={`/category/${news?.name}`} />
        <div className="grid md:grid-cols-4 gap-5">
          <PortaitCard news={news?.news[0]} />
          <PortaitCard news={news?.news[1]} />
          <PortaitCard news={news?.news[2]} />
          <PortaitCard news={news?.news[3]} />
        </div>
      </div>
    </>
  );
};

export default LifeStyleSection;
