import React from "react";
import Navbar from "./Navbar";
import Button from "./Button/Button";
import Search from "./SearchForm";
import styled from "styled-components";
import Partners from "./Partners";
import img from "../images/snowflakes.jpg";

const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
      <div className="header-body">
        <div className="header-text">
          <h1 className="title"> LEAP REALTY </h1>

          <h3 className="motto">LEAP over your Real estate limits </h3>
          <h3 className="header-text-about">
            LEAP REALTY is aimed at helping you satisfy your Real estate <br />
            Lands |Houses | Event centers | Declutter items desires 🌹
          </h3>
          <div className="quick-details">
            <Button value={"For rent"} color={"btn-orange"} />
            <Button value={"For Purchase"} />
          </div>
        </div>
        <div className="header-div-image">
          <img
            src={require("../images/header-house.jpeg")}
            alt=""
            className="header-image"
          />
        </div>
      </div>

      <Partners
        many={3}
        partnerClass={"partnerClass"}
        realtors={"Our Top Realtors"}
      />
      <Search formClass={"formClass"} />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: var(--black);
  background-color: rgb(240, 240, 230);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .header-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 75%;
    margin-top: 10rem;
    /* background-color: var(--green); */
  }

  .header-text {
    color: black;
    /* min-height: 60vh; */
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    padding: 3rem;

    &-about {
      text-align: left;
      font-weight: 400;
      font-size: 18px;
    }
  }

  .title {
    font-size: 56px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 2.5rem;
    color: var(--green);
    font-family: "Nunito";
  }
  .motto {
    font-weight: 300;
    font-size: 20px;
    letter-spacing: -1px;

    text-transform: lowercase;
    margin-bottom: 2.5rem;

    color: var(--green);
  }
  .quick-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 17rem;
    padding: 1rem 0;
  }

  .header-div-image {
    height: 100%;

    .header-image {
      width: 35rem;
      height: 30rem;
      border-radius: 15px;
    }
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
`;
