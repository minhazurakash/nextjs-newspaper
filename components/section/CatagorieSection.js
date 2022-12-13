import React from "react";
import SectionHeader from "../SectionHeader";
import SquareCard from "../SquareCard";
import TextCard from "../TextCard";

const CatagorieSection = ({ news }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {news &&
          news?.map((item) => {
            return (
              <div className="custom-border">
                <SectionHeader
                  title={item?.name}
                  link={`/category/${item?.name}`}
                />
                <SquareCard news={item?.news[0]} />
                <TextCard news={item?.news[1]} />
                <TextCard news={item?.news[2]} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CatagorieSection;
