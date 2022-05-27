import React from "react";
import styled from "styled-components";
import { BrowserRouter as Link } from "react-router-dom";

const Services = () => {
  return (
    <StyledSection>
      <h2> Services </h2>
      <div className="services-area">
        <Link to="" className="link">
          <div className="service">
            <img
              src={require("../images/event-center.jpg")}
              className=""
              alt=""
            />
            <h2>Rent venues</h2>
            <p> help you lease venues in Enugu </p>
          </div>
        </Link>
        <Link to="" className="link">
          <div className="service">
            <img src={require("../images/land.jpg")} className="" alt="" />
            <h2>lands </h2>
          </div>
        </Link>
        <Link to="/houses" className="link">
          <div className="service">
            <img src={require("../images/duplex.jpeg")} className="" alt="" />
            <h2>houses</h2>
          </div>
        </Link>
        <Link to="" className="link">
          <div className="service">
            <img src={require("../images/furniture.jpg")} className="" alt="" />
            <h2>furnitures </h2>
          </div>
        </Link>
      </div>
    </StyledSection>
  );
};

export default Services;

const StyledSection = styled.section`
  color: #061580;
  margin-top:6rem;
  padding: 3rem 3rem 2rem 3rem;
  text-transform: capitalize;
  font-family: "Quicksand", sans-serif;
  background-color: rgb(240, 240, 230);

  .services-area {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(242px, 1fr));
    grid-gap: 40px;
    margin-top: 1.5rem;
    align-content: stretch;
    height:100%;
  }

  .service {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: black;
  }
  .service > img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
    border-radius: 5px;
    display: block;
    margin-bottom: 1rem;
    align-self: center;
  }
  .link {
    text-decoration: none;
    font-size: 90%;
  }
`;
