import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/header.css";
import logo from "../images/nasa.png";
const Header = () => {
  // const [height, width] = useWindowSize();
  // // const isMobile = width < 768;

  const navigate = useNavigate();

  return (
    <div className="header">
      <img
        className={"logo"}
        src={logo}
        onClick={() => navigate("/nasa-api")}
      />
    </div>
  );
};

export default Header;
