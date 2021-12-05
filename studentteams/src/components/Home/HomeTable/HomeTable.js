import React from "react";
import "./HomeTable.css";
import { useHistory } from "react-router";

const HomeTable = ({ image, name, styling }) => {
  const history = useHistory();
  return (
    <div
      className="card-box"
      style={styling}
      onClick={() => history.push("/course")}
    >
      <img src={`${process.env.PUBLIC_URL}/${image}`} />
      {name}
    </div>
  );
};

export default HomeTable;
