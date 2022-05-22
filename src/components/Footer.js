import React from "react";
import styled from "styled-components";
import {
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {IoIosArrowUp} from "react-icons/io5"
const Footer = () => {
  return (
    <StyledFooter>
      <h2> &copy; 2022 Lions Estate Agency.</h2>

      <ul className="social-media">
        <li className="icons">
          <AiFillInstagram />
        </li>
        <li className="icons">
          <AiOutlineWhatsApp />
        </li>
        <li className="icons">
          <AiFillTwitterCircle />{" "}
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
          <a ><IoIosArrowUp /></a>
        </li>
      </ul>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: #44a8eb;
  height: 5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 12;
  width: 100%;
  margin-top: 4rem;
  padding: 0 20px;
  color: #061580;
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
  .icons {
    font-size: 1.2rem;
  }
  .list {
    display: flex;
    list-style-type: none;
    padding: 10px;
    justify-content: space-between;
    width: 300px;
  }
  .link {
    text-decoration: none;
    color: #061580;
    position: relative;
  }
  .link:visited,
   {
    color: black;
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
`;
