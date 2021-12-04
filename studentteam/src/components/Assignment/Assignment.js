import React from "react";
import "./Assignment.css";
import Navbar from "../Navbar/Navbar";
import { useHistory } from "react-router";
import { useState } from "react";

const Assignment = () => {
  const [clickClose, setClickClose] = useState(false);
  const history = useHistory();

  return (
    <>
      <div className="a-container">
        <Navbar />
        <div className="a-message" style={{ zIndex: clickClose ? "" : "-3" }}>
          <div
            className="message"
            style={{ display: `${clickClose ? "flex" : "none"}` }}
          >
            <div className="close">
              <span onClick={() => setClickClose(false)}>x</span>
            </div>
            Anda sudah berhasil Mengupload
            <div className="message-button">
              <button type="submit" onClick={() => setClickClose(false)}>
                Ok
              </button>
            </div>
          </div>
        </div>
        <div className="a-content">
          <div className="a-content-top" onClick={() => history.push("/")}>
            &lt; Back
          </div>
          <div className="a-content-middle">
            <div className="a-content-mt">
              <h5>Tugas Kelompok</h5>
              <p>Due December 9, 2021, 5.30 PM</p>
            </div>
            <div className="a-content-md">
              <h5>Intructions</h5>
              <textarea placeholder="Isi Tugas..." />
            </div>
          </div>
          <div className="a-content-bottom">
            <p>Student work</p>
            <button type="submit" onClick={() => setClickClose(true)}>
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assignment;
