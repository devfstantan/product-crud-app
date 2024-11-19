import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          PRODUCT CRUD APP
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/categories" className="nav-link" >
                Categories
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
