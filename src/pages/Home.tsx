import React, { useEffect, useState } from "react";
import GridFish from "../components/gridFish/GridFish";
import Searchbar from "../components/searchbar/Searchbar";
import Select from "react-select";
const Home = () => {
  const [allFishes, setAllFishes] = useState<any[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [selected, setSelected] = useState<string>("");
  const options = [
    { value: "wild", label: "Wild" },
    { value: "farmed", label: "Farmed" },
    { value: "any", label: "Any" },
  ];
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
  const selectedHandler = (selectedOption: any) => {
    setSelected(selectedOption.value);
  };
  // console.log(selected);

  const filteredFishes: any[] = allFishes.filter((fish) => {
    if (searchText === "" && (selected === "" || selected === "any")) {
      return fish;
    } else if (
      searchText.length > 0 &&
      selected.length > 0 &&
      selected !== "any"
    ) {
      return (
        fish["Species Name"].toLowerCase().includes(searchText) &&
        fish["Harvest Type"].toLowerCase().includes(selected)
      );
    } else if (
      searchText.length > 0 &&
      selected.length > 0 &&
      selected === "any"
    ) {
      return fish["Species Name"].toLowerCase().includes(searchText);
    } else if (searchText.length > 0) {
      return fish["Species Name"].toLowerCase().includes(searchText);
    } else if (selected.length > 0 && selected !== "any") {
      return fish["Harvest Type"].toLowerCase().includes(selected);
    }
  });
  // console.log(allFishes.length);
  // console.log(filteredFishes.length);
  return (
    <div>
      <div className="title">Fishwatch</div>
      <div className="gridSearchSelect">
        <Searchbar searchText={searchText} setSearchText={setSearchText} />
        <Select options={options} onChange={selectedHandler} />
      </div>
      <GridFish filteredFishes={filteredFishes} />
    </div>
  );
};

export default Home;
