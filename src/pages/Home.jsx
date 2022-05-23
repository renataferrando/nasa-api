import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import RoversContext from "../context/RoversContext";
import useRovers from "../hooks/useRovers";
import "../styles/home.css";

const Home = () => {
  const { rovers, loading } = useRovers();
  const { setMaxDate, setMaxSol } = useContext(RoversContext);
  const navigate = useNavigate();

  const handleClick = (item) => {
    setMaxDate(item.max_date);
    setMaxSol(item.max_sol);
    navigate(`/${item.name}`);
  };

  return (
    <div className="page">
      <div className="wrapper">
        <h1>Mars Rover Photos</h1>
        {loading && <p>...Loading</p>}
        {rovers && (
          <div className="collections">
            {rovers.map((item, i) => (
              <div
                className={"card" + i}
                key={i}
                onClick={
                  () => handleClick(item)
                  // setMaxDate(item.max_date) & navigate(`/${item.name}`)
                }
              >
                <div className="header"></div>
                <h4 className="card-title">{item.name}</h4>
                <p>Landing Date: {item.landing_date}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
