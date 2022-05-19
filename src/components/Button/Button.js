import React from "react";
import styled from "styled-components";

function Button({ value, color, icon }) {
  return (
    <StyledBtn className={color}>
      {value} {icon}
    </StyledBtn>
  );
}

export default Button;

const StyledBtn = styled.button`
  width: 7.5rem;
  height: 1.85rem;
  padding: auto 20px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 2px 1.5px rgba(0,0,0,0.2);
  font-size: 12px;
  border:none;
  filter: blur(0);
  transition: 0.5s;
  font-weight:600;

  &:hover{
    transform: scale(1.05);
  }

  &.btn-orange {
    background-color: orangered;
  }
`;
