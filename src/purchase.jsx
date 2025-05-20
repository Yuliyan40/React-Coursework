import React from "react";
import { useLocation } from "react-router-dom";

const Purchase = () => {
  const location = useLocation();
  const { shirtName } = location.state || {};

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
      {shirtName ? (
        <p>
          ✅ Успешно си поръча тениска <strong>{shirtName}</strong>!
        </p>
      ) : (
        <p>⛔ Грешка: няма информация за поръчката.</p>
      )}
    </div>
  );
};

export default Purchase;
