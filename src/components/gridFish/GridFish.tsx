import React, { FC } from "react";
import "./gridFish.scss";
import { useNavigate } from "react-router-dom";
interface gridFishProps {
  filteredFishes: any[];
}
const GridFish: FC<gridFishProps> = ({ filteredFishes }) => {
  let navigate = useNavigate();
  const buttonHandler = (fish: any) => {
    localStorage.setItem("fishArticle", JSON.stringify(fish));
    navigate("/article");
  };
  return (
    <div className="flex">
      {filteredFishes.map((fish: any, i) => {
        return (
          <div key={i} className="box">
            <div>
              <img
                src={fish["Species Illustration Photo"].src}
                alt={fish["Species Illustration Photo"].alt}
                className="imgStyle"
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
              <div className="buttonGrid">
                <div
                  className="learnMoreButton"
                  onClick={() => buttonHandler(fish)}
                >
                  Learn more
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GridFish;
