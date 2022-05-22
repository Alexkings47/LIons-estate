import React from "react";
import Navbar from "../Navbar";
import Button from "../Button/Button";
import Search from "../SearchForm/SearchForm";
import styled from "styled-components";
import Partners from "../Partners";
import img from "../../images/bgheader.jpg";

const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
      <div className="header-body">
        <div className="header_elements">
          <h1 className="title"> Lions estate agency </h1>
          <div className="quick-details">
            <Button value={"For Purchase"} />
            <Button value={"For rent"} color={"btn-orange"} />
          </div>
          <Search />
          <h3 className="heading-left">
            ... Your house <span className="heading-end">your pride</span>
          </h3>
        </div>
      </div>
      <Partners />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  padding: 1rem 3rem 40px;
  font-family: "Quicksand", sans-serif;
  position: relative;
  background-color: rgb(240, 240, 230);

  .header-body {
    background: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    border-radius: 20px;
    padding: 2rem;
    text-transform: capitalize;
    margin-top: 2.7rem;
  }
  .header_elements {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .title {
    font-size: 22px;
    font-weight: 600;
    color: orangered;
    text-transform: uppercase;
    font-family: "poppins", sans-serif;
    margin-bottom: 1.1rem;
    color: #061580;
  }
  .heading-left {
    font-weight: 100;
    font-size: 16px;
    letter-spacing: -1px;
    font-style: italic;
    text-transform: lowercase;
    margin-bottom: 10px;
    // color: #08c77e;
    color: #44a8eb;
   
  }

  .heading-end {
    font-weight: 700;
  }
  .quick-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 17rem;
    padding: 1rem 0;
  }
`;
