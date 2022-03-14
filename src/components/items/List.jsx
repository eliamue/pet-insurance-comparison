import React from "react";
import ListItem from "./ListItem";
import "../../styles/List.css";

const List = ({ items }) => {
  return (
    <div>
      <div className="main-container">
        <ul aria-label="item-ul" className="item-ul">
          {items.map((item) => (
            <li className="item-li" id={item.id} key={item.id}>
                <ListItem {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;