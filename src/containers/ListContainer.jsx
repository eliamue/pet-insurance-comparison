import React from "react";
import List from "../components/items/List";
import { useAllItems } from '../hooks/useAllItems';
import "../styles/List.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const ListContainer = () => {
  const { items } = useAllItems();

  return (
    <div>
      <header id="top">
        <Nav />
      </header>
      <List items={items} />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default ListContainer;
