import React from "react";

const ProductPage = ({ products, title }) => {
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
      <h1>{title}</h1>
      <br></br>
      <div
        className="product-grid"
        style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}
      >
        {products.map((product, idx) => (
          <div
            className="card"
            key={idx}
            style={{ width: "20rem", height: "28rem" }}
          >
            <img
              src={product.src}
              className="card-img-top"
              alt={product.name}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              {product.description && (
                <p className="card-text">{product.description}</p>
              )}
              <a
                href="#"
                className="btn btn-primary"
                style={{ fontSize: "1.4rem", padding: "0.75rem 1.5rem" }}
              >
                Купи
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
