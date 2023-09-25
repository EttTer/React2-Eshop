import React from "react";
import { useState, useEffect } from "react";
import Item from "../Item/Item";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [shopItems, setShopItems] = useState([]);
  const navigate = useNavigate();

  const handleChange = (id) => navigate(`product/${id}`);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://apps.kodim.cz/react-2/xxxmuck/products"
        );
        const data = await response.json();
        setShopItems(data);
      } catch (error) {
        console.error("Chyba při načítání dat:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Aktuální nabídka</h1>
        <h3>
          Nejnovější prémiové produkty od předních českých designerů. Doprava
          zdarma až k vám domů, na cenu nehleďte.
        </h3>
      </div>
      <main className="items">
        {shopItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            onChange={handleChange}
          />
        ))}
      </main>
     
    </>
  );
};

export default Home;
