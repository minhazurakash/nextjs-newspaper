import React from "react";
import PortaitCard from "../PortaitCard";
import RactangleCard from "../RactangleCard";
import SectionHeader from "../SectionHeader";

const EntertainmentSection = ({ news }) => {
  return (
    <>
      <div className="entertainment">
        <SectionHeader title={news?.name} link={`/category/${news?.name}`} />
        <div className="grid md:grid-cols-3 gap-5">
          <div className="custom-border">
            <RactangleCard news={news?.news[0]} />
            <RactangleCard news={news?.news[1]} />
            <RactangleCard news={news?.news[2]} />
          </div>
          <div>
            <PortaitCard news={news?.news[3]} />
          </div>
          <div className="custom-border">
            <RactangleCard news={news?.news[4]} />
            <RactangleCard news={news?.news[5]} />
            <RactangleCard news={news?.news[6]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EntertainmentSection;
