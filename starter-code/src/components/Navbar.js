import React, { Component } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary justify-content-center navbar navbar-dark">
      <Link className="navbar-brand" to={"/"}>
        <FaHome />
      </Link>
    </nav>
  );
};

export default Navbar;
