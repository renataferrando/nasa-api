import React, { useContext, useState } from "react";
import useImages from "../hooks/useImages";
import RoversContext from "../context/RoversContext";
import "../styles/filters.css";

const Filters = () => {
  const { images, searchParams, setSearchParams } = useImages();
  const cameras = [...new Set(images.map((item) => item.camera.name))];

  const { maxdate, maxsol } = useContext(RoversContext);
  const [isActive, setIsActive] = useState(searchParams.get("camera"));

  const cameraOnClick = (e) => {
    searchParams.set("camera", e.target.value);
    setSearchParams(searchParams);
    setIsActive(e.target.value);
  };
  const handleChangeDate = (e) => {
    let date = e.target.value;
    if (date) {
      resetCameraFilter();
      searchParams.set("earth_date", date);
      searchParams.delete("sol");
      setSearchParams(searchParams);
    } else {
      setSearchParams({});
    }
  };
  const handleChangeSol = (e) => {
    let sol = e.target.value;
    if (sol) {
      searchParams.set("sol", sol);
      resetCameraFilter();
      searchParams.set("earth_date", "");
      setSearchParams(searchParams);
    } else {
      setSearchParams({});
    }
  };
  const resetFilters = () => {
    searchParams.delete("sol");
    searchParams.delete("camera");
    searchParams.set("earth_date", maxdate);
    setSearchParams(searchParams);
    setIsActive();
  };
  const resetCameraFilter = () => {
    searchParams.delete("camera");
    setSearchParams(searchParams);
    setIsActive("");
  };

  return (
    <>
      <div className="filters">
        <h4 className="filter-title">Select a Camera</h4>
        <div className="cameras">
          <button onClick={resetCameraFilter} className={!isActive && "active"}>
            All
          </button>
          {cameras.map((item, i) => (
            <button
              className={isActive === item ? "active" : ""}
              key={i}
              onClick={cameraOnClick}
              value={item}
              readOnly
            >
              {item}
            </button>
          ))}
        </div>
        <h4 className="filter-title">Filter by Earth Date</h4>
        <input
          type="date"
          max={maxdate}
          onChange={handleChangeDate}
          value={searchParams.get("earth_date") || ""}
        />
        <h4 className="filter-title">
          Filter by Sol (Martian rotation or day)
        </h4>
        <input
          type="number"
          max={maxsol}
          replace
          for
          maxsol
          placeholder={`up to ${maxsol}`}
          onChange={handleChangeSol}
          value={searchParams.get("sol") || ""}
        />
        <button className="reset-btn" onClick={resetFilters}>
          Reset all filters
        </button>
      </div>
    </>
  );
};

export default Filters;
