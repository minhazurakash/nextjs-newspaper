import React from "react";
import RactangleCard from "../RactangleCard";
import SectionHeader from "../SectionHeader";
import SquareCard from "../SquareCard";
import TextCard from "../TextCard";

const CatagorieSection = ({ news }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {news &&
          news?.map((item) => {
            return (
              <div className="">
                <SectionHeader
                  title={item?.name}
                  link={`/category/${item?.name}`}
                />
                <SquareCard news={item?.news[0]} />
                <RactangleCard news={item?.news[1]} />
                <RactangleCard news={item?.news[2]} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CatagorieSection;
