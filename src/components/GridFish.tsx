import React, { useEffect, useState } from "react";
const GridFish = () => {
  const [allFishes, setAllFishes] = useState<any[]>([]);
  useEffect(() => {
    const url = "https://www.fishwatch.gov/api/species";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setAllFishes(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  console.log(allFishes);
  return (
    <div className="flex">
      {allFishes.map((fish: any, i) => {
        let imageGalleries = fish["Image Gallery"];
        let imageTitle;
        let imageSrc;
        let imageAlt;
        if (imageGalleries != null && imageGalleries.length > 0) {
          imageSrc = imageGalleries[0].src;
          imageAlt = imageGalleries[0].alt;
          imageTitle = imageGalleries[0].title;
        }
        return (
          <div key={i} className="box">
            <div>
              <img src={imageSrc} alt={imageAlt} />
            </div>
            <div className="contentBox">
              <div className="caption">Caption: {imageTitle}</div>
              <div className="fishName">{fish["Species Name"]}</div>
              <div className="fishHarvestType">
                Harvest Type: {fish["Harvest Type"]}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GridFish;
