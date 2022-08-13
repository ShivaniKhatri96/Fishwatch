import userEvent from "@testing-library/user-event";
import React from "react";
import { Link } from "react-router-dom";
const Title = () => {
  return (
    <div>
      <Link to={"/"} className="linkStyle">
        <div className="title">Fishwatch</div>
      </Link>
    </div>
  );
};

export default Title;
