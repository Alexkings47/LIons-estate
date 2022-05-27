import React from "react";
import styled from "styled-components";
import {
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const [showFilters, setShowFilters] = React.useState(false);
  function toggle() {
    setShowFilters(!showFilters);
  }

  return !showFilters ? (
    <StyledFooter>
      <h2> &copy; 2022 Lions Estate Agency.</h2>
      <ul className="social-media">
        <li className="icons">
          <a
            href="https://www.instagram.com/alex_kings47/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram />
          </a>
        </li>
        <li className="icons">
          <a href="#!">
            <AiOutlineWhatsApp />
          </a>
        </li>
        <li className="icons">
          <a href="#!">
            <AiFillTwitterCircle />{" "}
          </a>
        </li>
      </ul>
      <ul className="list">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="page1">
            Services
          </Link>
        </li>
        <li>
          <Link className="link" to="page1">
            Privacy
          </Link>
        </li>
        <li>
          <Link className="link" to="page2">
            Help
          </Link>
        </li>
        <li>
          <Link className="link" to="/components/Header/Header">
            terms
          </Link>
        </li>
        <li>
          <button onClick={toggle}>
            <IoIosArrowUp />
          </button>
        </li>
      </ul>
    </StyledFooter>
  ) : (
    <div className="expanded-footer">aas</div>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  color: #44a8eb;
  height: 5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 12;
  width: 100%;
  margin-top: 4rem;
  padding: 0 20px;
  background-color: #060129;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "karla";

  .social-media {
    display: flex;
    width: 100px;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
  }
  .icons > a {
    font-size: 1.2rem;
    color: #44a8eb;

    &:active,
    &:hover {
      color: red;
    }
  }
  .list {
    display: flex;
    list-style-type: none;
    padding: 10px;
    justify-content: space-between;
  }
  .link {
    text-decoration: none;
    color: #44a8eb;
    position: relative;
    margin-right: 5px;
  }
  button {
    border: none;
    background: none;
    color: #44a8eb;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .link::after {
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

  .link:hover::after {
    display: block;
  }

  h2 {
    font-size: 15px;
  }

  .expanded-footer {
    height: 40vh;
    color: #44a8eb;
  }
`;
