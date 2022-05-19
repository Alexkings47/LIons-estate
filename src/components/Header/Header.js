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
          <p className="title"> Lion estate agency </p>
          <h1 className="heading-left">
            Your house <span className="heading-end">your pride</span>
          </h1>
          <div className="quick-details">
            <Button value={"For Purchase"} />
            <Button value={"For rent"} color={"btn-orange"} />
          </div>
          <Search />
        </div>
      </div>
      <Partners />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  padding: 1rem 2rem 40px;
  height: 100vh;
  font-family: "poppins";

  .header-body {
    background: linear-gradient(rgba(68, 168, 235, 0.408), rgba(0, 0, 0, 0.403)),
      url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 1rem;
    border-radius: 20px;
    padding: 2rem;
    text-transform: capitalize;
  }
  .header_elements {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .title {
    font-size: 20px;
    font-weight: 600;
    font-family: "Quicksand", sans-serif;
  }
  .heading-left {
    font-weight: 100;
    font-size: 30px;
    letter-spacing: -1px;
    font-family: "Quicksand", sans-serif;
  }

  .heading-end {
    font-weight: 700;
    font-family: "Quicksand", sans-serif;
  }
  .quick-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 17rem;
    margin-bottom: 2rem;
  }
`;
