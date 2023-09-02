import React from "react";
import { GoSearch } from "react-icons/go";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button/Button";

function Navbar() {
  return (
    <StyledNav className="navbar">
      <div className="nav-items-div">
        <ul className="nav-items">
          <Link to="/" className="link">
            <li className="nav-links">Home</li>
          </Link>
          <Link to="/houses" className="link">
            <li className="nav-links">Property</li>
          </Link>
          <Link to="/" className="link">
            <li className="nav-links">About us</li>
          </Link>
          <Link to="/agents" className="link">
            <li className="nav-links">Agents</li>
          </Link>
          <Link to="/" className="link">
            <li className="nav-links">Contact us</li>
          </Link>
        </ul>
      </div>

      <Link to="/" className="logoLink">
        <img src={"/leapicon.png"} className="navbar-logo" alt="logo" />
      </Link>
      <div className="button_div">
        <Button value="login" color="green" />
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
  height: 9vh;
  border-radius: 0 0 5px 5px;
  background-color: var(--green);
  padding: 8px 3rem;

  * {
    flex-basis: 33%;
  }

  .navbar-logo {
    width: 4rem;
    height: 2rem;
    justify-self: flex-end;
  }

  .nav-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    list-style: none;
  }
  .nav-links {
    position: relative;
    font-size: 14px;
    font-weight: 400;
  }
  .nav-links:hover {
    color: var(--light-blue);
  }
`;
