import React from "react";
import styled from "styled-components";

const TestimonialCard = ({ name, title, text }) => {
  return (
    <StyledDiv>
      <h3>{name}</h3>
      <small>{title}</small>
      <p>{text}</p>
    </StyledDiv>
  );
};

export default TestimonialCard;
const StyledDiv = styled.div`
  border: 1px solid white;
  color: white;
  padding: 1rem;
    

  small{
      margin-bottom: 1rem;
      font-size: 12px;
  }
`;
