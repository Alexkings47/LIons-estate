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
  height: 80vh;
  display: grid;
  text-transform: capitalize;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 40px;
  padding: 40px 3rem;
  text-align: left;

  h1 {
    color: #061580;
  }

  .btn-orange{
    grid-row:3/4;
    grid-column: 2/3;
    align-self: center;
    
  }
`;
