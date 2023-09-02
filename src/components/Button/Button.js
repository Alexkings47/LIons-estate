import React from "react";
import styled from "styled-components";

function Button({ value, color, icon, width }) {
  let classlist = [width, color];

  return (
    <StyledBtn className={classlist}>
      {value} {icon}
    </StyledBtn>
  );
}

export default Button;
const StyledBtn = styled.button`
  width: 7.8rem;
  height: 2rem;
  padding: 0 20px;
  border-radius: 7px;
  cursor: pointer;
  box-shadow: 2px 1.5px rgba(0, 0, 0, 0.2);
  border: none;
  color: var(--green);
  transition: 0.5s;
  font-weight: 600;
  font-size: 13px;
  font-family: "Lato", sans-serif;

  &:hover {
    transform: scale(1.05);
  }

  &.btn-orange {
    background-color: var(--green);
    color: white;
  }
`;
