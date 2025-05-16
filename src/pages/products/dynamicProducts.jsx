import React from "react";
import { useParams } from "react-router-dom";
import ProductPage from "./products";
import allProducts from "./productsData";

const DynamicProductPage = () => {
  const { category, name } = useParams();

  const pageData = allProducts[category]?.[name];

  if (!pageData) {
    return <div>Продуктите не са намерени...</div>;
  }

  return <ProductPage products={pageData.products} title={pageData.title} />;
};

export default DynamicProductPage;
