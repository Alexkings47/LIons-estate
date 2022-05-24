import React from "react";
import styled from "styled-components";

const Partners = ({partnerClass}) => {
  return (
    <StyledDiv className="partnerClass">
      <h2>Our Realtors</h2>
      <div className="partners">
        <div className="partners-div">
          <img
            className="partner-image"
            src={require("../images/realtor1.jpg")}
            alt=""
          />
          <h3>Axel</h3>
          <p>description</p>
        </div>
        <div className="partners-div">
          <img
            className="partner-image"
            src={require("../images/realtor1.jpg")}
            alt=""
          />
          <h3>Obinna</h3>
          <p>description</p>
        </div>
        <div className="partners-div">
          <img
            className="partner-image"
            src={require("../images/realtor1.jpg")}
            alt=""
          />
          <h3>Prince</h3>
          <p>description</p>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Partners;

const StyledDiv = styled.div`
  padding: 3rem 3rem;
  // background-color: rgb(240, 240, 230);
  // color: #44a8eb;
  // width: 25%;
  width: 100%;

  .partners {
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: space-between;
    // height: 70%;
  }
  @media (max-width: 800px) {
    padding: 2rem 0;

    .partners {
      width: 95vw;
      flex-direction: row;
      padding: 0 3rem;
    }
  }

  // &::after {
  //   background: linear-gradient(-45deg, rgb(240, 240, 230) 16px, transparent 0),
  //     linear-gradient(45deg, #ffffff 16px, #061580 0);
  //   background-position: left-bottom;
  //   background-repeat: repeat-x;
  //   background-size: 10px;
  //   content: " ";
  //   display: block;
  //   position: absolute;
  //   bottom: 0px;
  //   left: 0px;
  //   width: 100%;
  //   height: 25px;
  // }

  .partners-div {
    height: 100%;
  }
  .partner-image {
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
    object-fit: cover;
    filter: brightness(1.15);
  }

  h2 {
    color: #44a8eb;
    color: #061580;
    flex: 1;
    margin-bottom: 1rem;
  }
`;
