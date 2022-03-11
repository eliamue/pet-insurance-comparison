import React from "react";
import ListItem from "./ListItem";
import Header from "./Header";
import data from "./data.js";
import "../styles/List.css";
import Footer from "./Footer";

export default function ListContainer() {
  return (
    <div>
      <header id="top">
        <Header />
      </header>
      <div className="main-container">
        <ul aria-label="item-ul" className="item-ul">
          {data.map((item) => (
            <li className="item-li" key={item.name}>
              <ListItem {...item} />
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
