import React from "react";
import "./Item.css";

const Item = ({ id, onChange, name, image }) => {
  const handleClick = () => onChange(id);

  return (
    <div className="product">
      <img src={image} onClick={handleClick} style={{ cursor: "pointer" }} />
      <h3>{name}</h3>
    </div>
  );
};

export default Item;
