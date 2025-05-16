import React from "react";
import { useParams } from "react-router-dom";
import ProductPage from "./products";
import allProducts from "./productsData";

const DynamicProductPage = () => {
  const { category, name: name } = useParams();

  const pageData = allProducts[category]?.[name];

  if (!pageData) {
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
        Продуктите не са намерени...
      </div>
    );
  }

  return <ProductPage products={pageData.products} title={pageData.title} />;
};

export default DynamicProductPage;
