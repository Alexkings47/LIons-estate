import React from "react";
import styled from "styled-components";
import Button from "./Button/Button";

const Outlook = () => {
  return (
    <StyledOutlook className="outlook-wrapper">
      <div className="outlook">
        <p className="short-info">
          The world is not ours to give but we can give some part of it, risk-free methods.
        </p>
        <figure className="image-elem1">
          <img
            className="image1"
            src={require("../images/finehouse.jpg")}
            alt=""
          />
          <p>ESTATES</p>
        </figure>
        {/* <img className="image2" src={require ("../../images/lagos.jpg")} alt="" /> */}
        <figure className="image-elem3">
          <img
            className="image3"
            src={require("../images/bgimg.jpeg")}
            alt=""
          />
        </figure>

        {/* <img className="image2" src="" alt="" />
        <img className="image3" src="" alt="" /> */}

        <p className="long-info">
          Buy or lease Lands, Residential or office houses, sub-let, house
          furnitures and appliances. We provide best value real estate
          properties through verified partners.
        </p>
        <div className="button">
          <Button value={"search"} color={"btn-orange"} />
        </div>
      </div>
    </StyledOutlook>
  );
};

export default Outlook;

const StyledOutlook = styled.section`
  padding: 2.5rem 2rem;
  height:calc(100vh - 8rem);
  background-color: #060129;
  font-family: "karla", sans-serif;
  text-align: left;
 

  .outlook {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 35px;
    color: white;
    height: 95%;
  }
  .button {
    grid-row: 5/6;
    grid-column: 4/5;
  }
  .icon {
    color: yellow;
    font-size: 2rem;
  }
  .long-info {
    grid-row: 4/5;
    grid-column: 4/7;
    font-family: "Quicksand", sans-serif;
    font-weight: 200;
    font-size: 14.5px;
  }
  .image-elem1 {
    grid-column: 1 / span 3;
    grid-row: 2/ 6;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    & p {
      color: orangered;
      position: absolute;
      bottom: 50%;
      left: 50%;
      font-size: 1.5rem;
      transform: translate(-50%, 230px);
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
      z-index: -2;
      transition: 0.5s;
    }

    & > .image1:hover {
      filter: blur(2px);
    }
    &:hover p {
      transform: translate(-50%, 50%);
      z-index: 0;
    }
  }

  .short-info {
    grid-row: 1/3;
    grid-column: 2/6;
    font-size: 28px;
    line-height: 1.2;
    z-index: 11;
    text-transform: capitalize;
    font-weight: 700;
    font-family: "poppins", sans-serif;
  }
  .image1 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
    filter: brightness(120%);
  }

  .image-elem3 {
    grid-row: 1/ 4;
    grid-column: 5/7;
  }

  .image3 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;
