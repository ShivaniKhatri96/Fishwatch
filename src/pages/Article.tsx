import React, { FC } from "react";
import Title from "../components/Title";

const Article = () => {
  const fishArticle = localStorage.getItem("fishArticle");
  const article = JSON.parse(fishArticle || "{}");
  // console.log(article);
  return (
    <div className="articlePadding">
      <Title />
      <div className="articleBox">
        <div className="articleHeading"> {article["Species Name"]}</div>
        <div className="articleBody">
          <div className="articleFirstGrid">
            <div className="articleImgBox">
              <img
                src={article["Species Illustration Photo"].src}
                alt={article["Species Illustration Photo"].alt}
                className="articleImg"
              />
              <div className="articleImgCaption">
                Caption:{" "}
                {article["Species Illustration Photo"].title
                  ? article["Species Illustration Photo"].title
                  : article["Species Name"]}
              </div>
            </div>

            <div className="articleFlex">
              <div>
                <div className="paragraghTitle">Population</div>
                <div>
                  {article["Population"]
                    ? article["Population"]
                    : "No information available"}
                </div>
              </div>
              <div>
                <div className="paragraghTitle">Habitat Impacts</div>
                <div>
                  {article["Habitat Impacts"]
                    ? article["Habitat Impacts"]
                    : "No information available"}
                </div>
              </div>
              <div>
                <div className="paragraghTitle">Quote</div>
                <div>{article["Quote"]}</div>
              </div>
            </div>
          </div>
          <div className="articleMiniBox">
            <div>Protein: {article["Protein"]}</div>
            <div>Calories: {article["Calories"]}</div>
            <div>Harvest Type: {article["Harvest Type"]}</div>
            <div>Scientific Name: {article["Scientific Name"]}</div>
            <div>NOAA Fisheries Region: {article["NOAA Fisheries Region"]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
