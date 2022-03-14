import React from "react";
import List from "./List.jsx";
import { useAllItems } from '../hooks/useAllItems';
import "../styles/List.css";
import Header from "./Header";
import Footer from "./Footer";

const ListContainer = () => {
  const { items } = useAllItems();

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
