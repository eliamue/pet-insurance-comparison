import React from "react";
import ListItem from "./ListItem";
import "../../styles/List.css";
import { Link } from "react-router-dom";

const List = ({ items }) => {
  return (
    <div>
      <div className="main-container">
        <ul aria-label="item-ul" className="item-ul">
          {items.map((item) => (
            <li className="item-li" key={item.id}>
                <ListItem {...item} />
              <Link to={`/${item.id}`}>Details
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;