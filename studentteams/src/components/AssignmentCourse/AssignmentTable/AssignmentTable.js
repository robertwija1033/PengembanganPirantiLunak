import React from "react";
import "./AssignmentTable.css";
import { useHistory } from "react-router";

const AssignmentTable = ({ nama }) => {
  const history = useHistory();

  return (
    <div className="at-content" onClick={() => history.push("/assignments")}>
      <div className="at-content-l">
        <img src={`${process.env.PUBLIC_URL}/PPL.jpg`} />
      </div>
      <div className="at-content-r">
        <div className="at-content-rt">
          <h5>Tugas Kelompok</h5>
        </div>
        <div className="at-content-rb">
          <div className="at-content-rb-first">
            <h5>Pengembangan Piranti Lunak</h5>
            <h5>Due December 9, 2021 5.30 PM</h5>
            <h5>{nama}</h5>
          </div>
          <div className="at-content-rb-last">
            <h5>On going</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentTable;
