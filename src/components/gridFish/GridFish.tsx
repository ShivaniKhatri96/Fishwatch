import React, { useEffect, useState } from "react";
import "./gridFish.scss";
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
  return (
    <div className="flex">
      {allFishes.map((fish: any, i) => {
        return (
          <div key={i} className="box">
            <div>
              <img
                src={fish["Species Illustration Photo"].src}
                alt={fish["Species Illustration Photo"].alt}
              />
            </div>
            <div className="contentBox">
              <div className="caption">
                Caption:{" "}
                {fish["Species Illustration Photo"].title
                  ? fish["Species Illustration Photo"].title
                  : fish["Species Name"]}
              </div>
              <div className="fishName">{fish["Species Name"]}</div>
              <div className="fishInfo">
                Harvest Type: {fish["Harvest Type"]}
              </div>
              <div>
                <div className="fishInfo">Fun Fact</div>
                <div className="quoteText">
                  {fish["Quote"].slice(0, 150)}...
                </div>
              </div>
              <div className="btnGrid">
                <div className="learnMoreButton">Learn more</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GridFish;
