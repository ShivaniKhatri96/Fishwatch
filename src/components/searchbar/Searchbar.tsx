import React, { FC } from "react";
import "./searchbar.scss";
interface searchbarProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}
const Searchbar: FC<searchbarProps> = ({ searchText, setSearchText }) => {
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let lowercase = e.target.value.toLowerCase();
    setSearchText(lowercase);
  };
  // console.log(searchText);
  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={searchHandler}
        placeholder="Search based on fish name..."
        className="searchbar"
      />
    </div>
  );
};

export default Searchbar;
