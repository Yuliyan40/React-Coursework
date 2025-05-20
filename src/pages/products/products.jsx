import React from "react";
import "./custom-bootstrap.scss";
import { useNavigate } from "react-router-dom";

const ProductPage = ({ products, title }) => {
  const navigate = useNavigate();

  const handlePurchase = async (productName) => {
    const newOrder = {
      name: productName,
      date: new Date().toISOString(),
    };

    try {
      const response = await fetch("http://localhost:5000/orders", {
        method: "POST", // създава се поръчка
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrder),
      });

      if (response.ok) {
        navigate("/purchase", { state: { shirtName: productName } });
      } else {
        console.error("Грешка при запис в базата");
      }
    } catch (error) {
      console.error("Мрежова грешка:", error);
    }
  };

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
      <h1 className="prodTitle">{title}</h1>
      <br />
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
              <button
                className="btn btn-primary"
                onClick={() => handlePurchase(product.name)}
                style={{ fontSize: "1.4rem", padding: "0.75rem 1.5rem" }}
              >
                Купи
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
