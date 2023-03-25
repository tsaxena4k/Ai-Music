import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar d-flex align-items-center">
      <Link to={"/"}>
        <h2 className="logo">MoodTunes</h2>
      </Link>
      <ul className="navItems mb-0">
        <li className="navItem">
          <Link to={"/about"}>
            <h4 className="mb-0">About</h4>
          </Link>
        </li>
        <li className="navItem team">
          <Link to={"/team"}>
            <h4 className="mb-0">Team</h4>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
