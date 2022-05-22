import React from "react";
import styled from "styled-components";
import FeaturedCard from "./FeaturedCard";
import {Products} from "../Products";
import Button from "./Button/Button";


const NewAdditions = () => {
const NewProducts = Products.map((product) => {
  return (
    <FeaturedCard
      image={product.images}
      title={product.title}
      price={product.price}
      location={product.location}
      specification={product.specification}
      key={product.id}
    />
  );
})

  return (
    <StyledSection>
      <h1>Check All our new additions</h1>
      {NewProducts}
      <Button value={"view All"} color={"btn-orange"} />
    </StyledSection>
  );
};

export default NewAdditions;
const StyledSection = styled.section`
  height: 85vh;
  display: grid;
  text-transform: capitalize;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 40px;
  padding: 40px 3rem;
  text-align: left;
  background-color: rgb(240, 240, 230);
  position: relative;

  &:after {
    background: linear-gradient(-45deg, rgb(240, 240, 230) 16px, transparent 0),
      linear-gradient(45deg, #ffffff 16px, #061580 0);
    background-position: left-bottom;
    background-repeat: repeat-x;
    background-size: 10px;
    content: " ";
    display: block;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 25px;
  }

  h1 {
    color: #061580;
  }

  .btn-orange {
    grid-row: 3/4;
    grid-column: 2/3;
    align-self: center;
  }
`;
