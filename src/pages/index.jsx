import React from "react";
import "./shirts.css";
//import cucks from "./cucks.png";
import tcraze from "./teecraze.png";
import course from "./2398.png";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        marginLeft: "120px",
        marginTop: "50px",
      }}
    >
      <img src={tcraze}></img>
      <img src={course}></img>
    </div>
  );
};

export default Home;
