import React from "react";
import Swiper_func from "./swiper";

const Games = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        marginLeft: "120px",
      }}
    >
      <Swiper_func></Swiper_func>
    </div>
  );
};

export default Games;
