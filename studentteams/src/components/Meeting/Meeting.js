import React, { useState, useRef } from "react";
import "./Meeting.css";
import { useHistory } from "react-router";
import {
  FaPhoneAlt,
  FaMicrophoneAlt,
  FaMicrophoneAltSlash,
} from "react-icons/fa";
import { RiCameraLine, RiCameraOffLine } from "react-icons/ri";
import { FaRecordVinyl } from "react-icons/fa";

const Meeting = () => {
  const history = useHistory();
  const [clickRecord, setClickRecord] = useState(false);
  const [clickCamera, setClickCamera] = useState(true);
  const [clickMicrophone, setClickMicrophone] = useState(false);
  const [tracks, setTracks] = useState("");
  const [stream, setStream] = useState(false);
  const videoRef = useRef();

  const Logo = ({ Icon, tes }) => {
    return (
      <div
        className="logo-icon"
        onClick={stream ? handleStartStream : handleStopStream}
      >
        <Icon onClick={tes} />
      </div>
    );
  };

  const handleStartStream = () => {
    setStream(true);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((mediaStream) => {
          videoRef.current.srcObject = mediaStream;
          videoRef.current.play();

          const track = mediaStream.getTracks();
          setTracks(track[0]);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleStopStream = () => {
    setStream(false);
    tracks && tracks.stop();
  };

  return (
    <div className={`meeting-container ${stream ? "" : "active"}`}>
      <div></div>
      <div className="meeting-navbar">
        <div className="navbar-button">
          <Logo Icon={FaRecordVinyl} />
          {stream ? (
            <RiCameraLine className="openCamera" onClick={handleStopStream} />
          ) : (
            <RiCameraOffLine
              className="openCamera"
              onClick={handleStartStream}
              style={{ fontSize: "32px" }}
            />
          )}
          <Logo
            Icon={clickMicrophone ? FaMicrophoneAltSlash : FaMicrophoneAlt}
            change={() => setClickMicrophone(!clickMicrophone)}
            tes={() => setClickMicrophone(!clickMicrophone)}
          />
          <button type="submit" onClick={() => history.push("/course")}>
            <FaPhoneAlt />
            <h5>Leave</h5>
          </button>
        </div>
      </div>
      <div className="meeting-content">
        {stream ? <video ref={videoRef} autoPlay muted /> : ""}
      </div>
      <div className="meeting-user">
        <img src={`${process.env.PUBLIC_URL}/PPL.jpg`} />
        <img src={`${process.env.PUBLIC_URL}/logo192.png`} />
      </div>
    </div>
  );
};

export default Meeting;
