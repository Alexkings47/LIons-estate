import React from "react";
import Button from "../Button/Button";
import { FiMapPin } from "react-icons/fi";
import styled from "styled-components";
import { AiOutlineCaretDown } from "react-icons/ai";

// console.log(styled);

const Search = () => {
  return (
    <StyledDiv className="enableBlur">
      <input
        name="location"
        type="text"
        value=""
        placeholder="Enter Location"
        className="disableBlur"
      />
      {/* <FiMapPin className="icons" /> */}

      <select name="All properties" className="disableBlur">
        <option>All properties</option>
        <option value="Lands">Lands</option>
        <option value="Houses">Houses</option>
        <option value="Furniture">Furniture</option>
      </select>
      {/* <AiOutlineCaretDown className="icons" /> */}

      <select name="price" className="disableBlur">
        <option>All Prices</option>
        <option value="150k and Below">150k and Below</option>
        <option value="250k and below">250k and below</option>
        <option value="350k and Below">350k and Below</option>
      </select>
      {/* <AiOutlineCaretDown className="icons" /> */}

      <select name="room" className="disableBlur">
        <option>Type</option>
        <option value="Lands">Lands</option>
        <option value="Houses">Houses</option>
        <option value="Furniture">Furniture</option>
      </select>
      {/* <AiOutlineCaretDown className="icons" /> */}

      <Button value="Search now" color={"btn-orange disableBlur"} />
    </StyledDiv>
  );
};

export default Search;

const StyledDiv = styled.form`
  height: 7rem;
  background: linear-gradient(
    to right,
    rgba(68, 168, 235, 0.508),
    rgba(236, 126, 242, .4)
  );
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-shadow: 5px 5px 8px #888888;
  border-radius: 5px;

  @media (max-width: 800px) {
    & > * {
      width: 4rem;
    }
  }

  &.enableBlur > * {
    filter: blur(2px);
  }
  .disableBlur {
    filter: blur(0);
  }
  & > * {
    min-width: 6rem;
    padding: 10px;
    text-align: centre;
    border-radius: 4px;
    margin-right: 10px;
    height: 2.5rem;
  }

  .icons {
    color: orange;
    width: 1rem;
  }
  input {
    border: 0.5px solid black;
    padding: 0;
    //  indent: 10px;
  }
`;
