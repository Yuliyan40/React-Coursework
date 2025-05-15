import React from "react";
import a7xImg from "../../../../assets/images/metal/a7x.jpg";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./../../custom-bootstrap.scss";

const SpideyPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        marginLeft: "120px",
        flexDirection: "column",
      }}
    >
      <h1>проба</h1>
      <div className="card" style={{ width: "30rem", height: "40rem" }}>
        <img src={a7xImg} className="card-img-top" alt="Avenged Sevenfold" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpideyPage;
