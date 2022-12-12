import React from "react";
import SectionHeader from "../SectionHeader";
import SquareCard from "../SquareCard";
import TextCard from "../TextCard";

const CatagorieSection = ({ news }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="custom-border">
          <SectionHeader
            title={news[0]?.name}
            link={`/category/${news?.name}`}
          />
          <SquareCard news={news[0]?.news[0]} />
          <TextCard news={news[0]?.news[1]} />
          <TextCard news={news[0]?.news[2]} />
        </div>
        <div className="custom-border">
          <SectionHeader
            title={news[1]?.name}
            link={`/category/${news?.name}`}
          />
          <SquareCard news={news[1]?.news[0]} />
          <TextCard news={news[1]?.news[1]} />
          <TextCard news={news[1]?.news[2]} />
        </div>
        <div className="custom-border">
          <SectionHeader
            title={news[2]?.name}
            link={`/category/${news?.name}`}
          />
          <SquareCard news={news[2]?.news[0]} />
          <TextCard news={news[2]?.news[1]} />
          <TextCard news={news[2]?.news[2]} />
        </div>
        <div className="custom-border">
          <SectionHeader
            title={news[3]?.name}
            link={`/category/${news?.name}`}
          />
          <SquareCard news={news[3]?.news[0]} />
          <TextCard news={news[3]?.news[1]} />
          <TextCard news={news[3]?.news[2]} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
        <div className="custom-border">
          <SectionHeader
            title={news[0]?.name}
            link={`/category/${news?.name}`}
          />
          <SquareCard news={news[0]?.news[0]} />
          <TextCard news={news[0]?.news[1]} />
          <TextCard news={news[0]?.news[2]} />
        </div>
        <div className="custom-border">
          <SectionHeader
            title={news[1]?.name}
            link={`/category/${news?.name}`}
          />
          <SquareCard news={news[1]?.news[0]} />
          <TextCard news={news[1]?.news[1]} />
          <TextCard news={news[1]?.news[2]} />
        </div>
        <div className="custom-border">
          <SectionHeader
            title={news[2]?.name}
            link={`/category/${news?.name}`}
          />
          <SquareCard news={news[2]?.news[0]} />
          <TextCard news={news[2]?.news[1]} />
          <TextCard news={news[2]?.news[2]} />
        </div>
        <div className="custom-border">
          <SectionHeader
            title={news[3]?.name}
            link={`/category/${news?.name}`}
          />
          <SquareCard news={news[3]?.news[0]} />
          <TextCard news={news[3]?.news[1]} />
          <TextCard news={news[3]?.news[2]} />
        </div>
      </div>
    </>
  );
};

export default CatagorieSection;
