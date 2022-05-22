import React from "react";
import styled from "styled-components";

const Partners = () => {
  return (
    <StyledDiv>
      <h1>Our Realtors</h1>
      <div className="partners">
        <div className="partners-div">
          <img
            className="partner-image"
            src={require("../images/realtor1.jpg")}
            alt=""
          />
          <h2>Axel</h2>
          <p>description</p>
        </div>
        <div className="partners-div">
          <img
            className="partner-image"
            src={require("../images/realtor1.jpg")}
            alt=""
          />
          <h2>Obinna</h2>
          <p>description</p>
        </div>
        <div className="partners-div">
          <img
            className="partner-image"
            src={require("../images/realtor1.jpg")}
            alt=""
          />
          <h2>Prince</h2>
          <p>description</p>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Partners;

const StyledDiv = styled.div`
  padding: 1rem 3rem;

  .partners {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .partners-div {
    height: 100%;
  }
  .partner-image {
    border-radius: 50%;
    height: 4.5rem;
    width: 4.5rem;
    object-fit: cover;
    filter: brightness(1.15);
  }

  h1 {
    color: #061580;
    flex: 1;
    margin-bottom: 1rem;
  }
`;
