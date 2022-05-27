import React from "react";
import Navbar from "./Navbar";
import Button from "./Button/Button";
import Search from "./SearchForm";
import styled from "styled-components";
import Partners from "./Partners";
import img from "../images/header.jpg";

const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
      <div className="header-body">
          <h1 className="title"> Lions estate agency </h1>
          <div className="quick-details">
            <Button value={"For Purchase"} />
            <Button value={"For rent"} color={"btn-orange"} />
          </div>
          <h3 className="heading-left">
            ... Your house <span className="heading-end">your pride</span>
          </h3>
      </div>
      <Partners many={3} partnerClass={"partnerClass"} realtors={"Our Top Realtors"} />
      <Search formClass ={"formClass"} />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  padding: 0.5rem 3rem;
  font-family: "Quicksand", sans-serif;
  position: relative;
  // background-color: #060129;
  background-color: rgb(240, 240, 230);
  display: flex;
  flex-direction: column;
  // height: 80vh;
  // flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  .header-body {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: black;
    margin-top: 3rem;
    min-height: 60vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 800px) {
    height: auto;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .header-body {
      width: 100%;
      height: 60vh;
      background-repeat: no-repeat;
    }
    .partnerClass {
      width: 100%;
    }
  }

  .title {
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
    font-family: "poppins", sans-serif;
    margin-bottom: 1.1rem;
    // color: #061580;
    color: #44a8eb;
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
