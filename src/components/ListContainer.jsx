import React, { useEffect, useState } from "react";
import List from "./List.jsx";
import data from "./data.js";
import "../styles/List.css";
import Header from "./Header";
import Footer from "./Footer";

const ListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const loadedData = await data;
      setItems(loadedData);
    };
    loadData();
  });

  return (
    <div>
      <header id="top">
        <Header />
      </header>
      <List items={items} />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default ListContainer;
