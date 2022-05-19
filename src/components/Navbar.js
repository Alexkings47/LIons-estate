import React from "react";
import { GoSearch } from "react-icons/go";
import styled from "styled-components";

function Navbar() {
  return (
    <StyledNav className="navbar">
      <img
        src={require("../images/lion.jpg")}
        className="navbar-logo"
        alt="logo"
      />
      <div className="nav-right">
        <ul className="nav-items">
          <li className="nav-links">
            <a>Home</a>
          </li>
          <li className="nav-links">
            <a>Property</a>
          </li>
          <li className="nav-links">
            <a>Blog</a>
          </li>
          <li className="nav-links">
            <a>Agents</a>
          </li>
          <li className="nav-links">
            <a>Contact us</a>
          </li>
        </ul>

        <GoSearch className="search" />
      </div>
    </StyledNav>
  );
}

export default Navbar;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12.5px;
    font-weight: 500;
    line-height: 0.9;
    font-family: "inter", "sans-serif";
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
