import React, { useState, useEffect } from "react";
import "./ProductPage.css";

import { useParams } from "react-router-dom";

const ProductPage = () => {
  const id = useParams().id;
  const [chosenProduct, setChosenProduct] = useState(null);

  useEffect(() => {
    fetch(`https://apps.kodim.cz/react-2/xxxmuck/products/${id}`)
      .then((response) => response.json())
      .then((data) => setChosenProduct(data));
  }, [id]);

  return (
    <div className="product-page">
      <img src={chosenProduct?.image} />
      <div className="product-detail">
        <h2> Váš vybraný produkt</h2>
        <h3>{chosenProduct?.name}</h3>
        <button className="order-button">Objednat</button>
      </div>
    </div>
  );
};

export default ProductPage;
