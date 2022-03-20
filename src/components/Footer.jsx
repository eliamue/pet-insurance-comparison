import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/Nav.css";

export default function Footer() {
  return (
    <div className="navlinks">
      <Link className="nav-a" to="/add">
        Add
      </Link>
      <HashLink to="#top">Back to Top</HashLink>
    </div>
  );
}
