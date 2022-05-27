import React from "react";
import Button from "./Button/Button";
// import { FiMapPin } from "react-icons/fi";
import styled from "styled-components";
// import { AiOutlineCaretDown } from "react-icons/ai";



const Search = () => {
  return (
    <StyledDiv className="formClass">
      <div className="enableBlur"></div>
      <div className="content">
        <input
          name="location"
          type="text"
          value=""
          placeholder="Enter Location"
        />
        {/* <FiMapPin className="icons" /> */}

        <select name="All properties">
          <option>All properties</option>
          <option value="Lands">Lands</option>
          <option value="Houses">Houses</option>
          <option value="Furniture">Furniture</option>
        </select>
        {/* <AiOutlineCaretDown className="icons" /> */}

        <select name="price">
          <option>All Prices</option>
          <option value="150k and Below">150k and Below</option>
          <option value="250k and below">250k and below</option>
          <option value="350k and Below">350k and Below</option>
        </select>
        {/* <AiOutlineCaretDown className="icons" /> */}

        <select name="room">
          <option>Type</option>
          <option value="Lands">Lands</option>
          <option value="Houses">Houses</option>
          <option value="Furniture">Furniture</option>
        </select>
        {/* <AiOutlineCaretDown className="icons" /> */}

        <Button value="Search now" color={"btn-orange disableBlur"} />
      </div>
    </StyledDiv>
  );
};

export default Search;

const StyledDiv = styled.form`
  height: 7rem;
  background: none;
  position: relative;
  margin-top: 1rem;

  @media (max-width: 800px) {
    .content > * {
      width: 4rem;
    }
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    width: 100%;
    height: 100%;
    z-index: 3;
    border-radius: 5px;

    & > * {
      min-width: 6rem;
      padding: 10px;
      text-align: centre;
      border-radius: 4px;
      margin-right: 10px;
      height: 2.5rem;
      z-index: 3;
    }
  }
  .enableBlur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // filter: blur(15px);
    z-index: 1;
    // background-color:#44a8eb;

    opacity: 0.5;
    border-radius: 5px;
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
