import React from "react";
import GridFish from "./components/gridFish/GridFish";
import "./styles/_global.scss";
function App() {
  return (
    <div>
      <div className="title">Fishwatch</div>
      <GridFish />
    </div>
  );
}

export default App;
