import React, { useState } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import HomeTable from "./HomeTable/HomeTable";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="content">
        <div className="navbar">StudentTeams</div>
        <div className="content-inside">
          <HomeTable image={"PPL.jpg"} name={"PENGEMBANGAN PIRANTI LUNAK"} />
          <HomeTable />
          <HomeTable />
          <HomeTable />
          <HomeTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
