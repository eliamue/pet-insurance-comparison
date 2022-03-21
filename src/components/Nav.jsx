import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "../styles/Nav.css";
import { HashLink } from "react-router-hash-link";


export default class Nav extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {

    return (
      <Menu width="25vmin">
        <HashLink id="home" className="menu-item" to={"/"}>Home</HashLink>
        <HashLink id="list" className="menu-item" to={"/list"}>List</HashLink>
        <HashLink id="chart" className="menu-item" to={"/chart"}>Comparison Chart</HashLink>
        <HashLink id="about" className="menu-item" to={"/about"}>About</HashLink>
      </Menu>
    );
  }
}