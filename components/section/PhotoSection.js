import React, { useEffect, useState } from "react";
import PhotoCard from "../PhotoCard";
import SectionHeader from "../SectionHeader";

const PhotoSection = () => {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    fetch("https://mpnews24bd.com/api/photo")
      .then((res) => res.json())
      .then((data) => setPhoto(data?.photo));
  }, []);
  console.log(photo);
  return (
    <div className="mb-10">
      <SectionHeader title={"Photo"} link="/photo" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="h-full">
          <PhotoCard news={photo[0]} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <PhotoCard news={photo[1]} />
          <PhotoCard news={photo[2]} />
          <PhotoCard news={photo[3]} />
          <PhotoCard news={photo[4]} />
        </div>
      </div>
    </div>
  );
};

export default PhotoSection;
