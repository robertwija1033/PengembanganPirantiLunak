import React from "react";
import "./AssignmentCourse.css";
import AssignmentTable from "./AssignmentTable/AssignmentTable";
import Navbar from "../Navbar/Navbar";

const AssignmentCourse = () => {
  return (
    <div className="ac-container">
      <Navbar />
      <div class="ac-content">
        <div className="content-top">
          <h5>
            To view older assignments, navigate to an individual class team.
          </h5>
        </div>
        <div className="content-bottom">
          <AssignmentTable nama={"20TI2"} />
          <AssignmentTable nama={"20SI2"} />
        </div>
      </div>
    </div>
  );
};

export default AssignmentCourse;
