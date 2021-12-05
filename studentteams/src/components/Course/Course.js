import React from "react";
import "./Course.css";
import Navbar from "../Navbar/Navbar";
import { useHistory } from "react-router";

const Course = () => {
  const history = useHistory();

  const Links = ({ Name, locate }) => {
    return (
      <div className="links" onClick={locate}>
        {Name}
      </div>
    );
  };

  return (
    <div className="course-container">
      <Navbar />
      <div className="course-navlink">
        <div className="back" onClick={() => history.push("/home")}>
          &lt; All Teams
        </div>
        <div className="course-profile">
          <img src={`${process.env.PUBLIC_URL}/PPL.jpg`} />
          <h5>Pengembangan Piranti Lunak</h5>
        </div>
        <div className="course-link">
          <Links
            Name={"Assignment"}
            locate={() => history.push("/assignments")}
          />
          <Links Name={"Meeting"} locate={() => history.push("/meeting")} />
        </div>
      </div>
      <div className="course-content">
        <h5>Welcome to Pengembangan Piranti Lunak - 20TI2</h5>
        <img src={`${process.env.PUBLIC_URL}/meeting.jpg`} />
      </div>
    </div>
  );
};

export default Course;
