import React from "react";
import { GoSearch } from "react-icons/go";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Navbar() {
  return (
    <StyledNav className="navbar">
      <Link to="/">
        <img
          src={require("../images/lion.jpg")}
          className="navbar-logo"
          alt="logo"
        />
      </Link>
      <div className="nav-right">
        <ul className="nav-items">
          <Link to="/" className="link">
            <li className="nav-links">
              <a>Home</a>
            </li>
          </Link>

          <a href="#properties" className="link">
            <li className="nav-links">
              <a>Property</a>
            </li>
          </a>
          <Link to="/" className="link">
            <li className="nav-links">
              <a>About us</a>
            </li>
          </Link>
          <Link to="/" className="link">
            <li className="nav-links">
              <a>Agents</a>
            </li>
          </Link>
          <Link to="/" className="link">
          <li className="nav-links">
            <a>Contact us</a>
          </li>
          </Link>
        </ul>

        <GoSearch className="link search" />
      </div>
    </StyledNav>
  );
}

export default Navbar;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 12;
  background-color: rgb(240, 240, 230);
  padding: 8px 10px;

  .nav-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 55%;
  }
  .nav-items {
    display: flex;
    justify-content: space-between;
    width: 18rem;
    list-style: none;
  }
  .nav-links {
    position: relative;
  }
  .link {
    text-decoration: none;
    font-size: 12.5px;
    font-weight: 500;
    line-height: 0.9;
    font-family: "inter", "sans-serif";

    color: #061580;
  }
  .nav-links::after {
    content: "";
    position: absolute;
    top: 18px;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: "";
    background-color: orangered;
    transition: 0.5s;
    display: none;
    cursor: pointer;
  }

  .nav-links:hover::after {
    display: block;
  }

  .navbar-logo {
    height: 2.5rem;
    border-radius: 50%;
    display: block;
  }

  .search {
    font-size: 1.5rem;
  }
  .search:hover {
    transform: scale(1.2);
  }
`;
