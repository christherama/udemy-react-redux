import "./SeasonDisplay.css";
import React from "react";

const seasons = Object.freeze({
  SUMMER: {
    className: "summer",
    message: "Let's hit the beach!",
    icon: "sun",
  },
  WINTER: {
    className: "winter",
    message: "Burr, it's chilly!",
    icon: "snowflake",
  },
});

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? seasons.SUMMER : seasons.WINTER;
  } else {
    return lat > 0 ? seasons.WINTER : seasons.SUMMER;
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  console.log(season);

  return (
    <div className={`season-display ${season.className}`}>
      <i className={`icon-left massive ${season.icon} icon`} />
      <h1>{season.message}</h1>
      <i className={`icon-right massive ${season.icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
