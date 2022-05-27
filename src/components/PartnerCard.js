import React from 'react'
import styled from 'styled-components';

const PartnerCard = ({name,title}) => {
  return (
    <StyledDiv>
      {" "}
      <div className="partners-div">
        <img
          className="partner-image"
          src={require("../images/realtor1.jpg")}
          alt=""
        />
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </StyledDiv>
  );
}

export default PartnerCard

const StyledDiv = styled.div`
    height: 100%;

  .partner-image {
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
    object-fit: cover;
    filter: brightness(1.15);
  }
`;