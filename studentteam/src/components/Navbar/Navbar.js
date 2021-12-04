import React, { useState } from "react";
import "./Navbar.css";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { useHistory, useLocation } from "react-router";

const Navbar = () => {
  const [linkClick, setLinkClick] = useState(false);
  const history = useHistory();
  const { pathname } = useLocation();

  const Links = ({ Svg, name, links, active }) => {
    return (
      <div
        className="link"
        style={{
          color: `${active ? "#6264a7" : "black"}`,
          borderLeft: `${active ? "2px solid #6264a7" : "black"}`,
        }}
        onClick={() => history.push(links)}
      >
        <Svg />
        <h5>{name}</h5>
      </div>
    );
  };

  return (
    <div className="navlink">
      <div className="navlink-inside">
        <Links
          Svg={MdAssignment}
          name={"Assignment"}
          links={"/"}
          active={pathname === "/"}
        />
      </div>
    </div>
  );
};

export default Navbar;
