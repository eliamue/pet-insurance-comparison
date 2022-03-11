import React from "react";
import ListItem from "./ListItem";
import Header from "./Header";

export default function ListContainer() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div>
        List Container Woo <ListItem />
      </div>
    </div>
  );
}
