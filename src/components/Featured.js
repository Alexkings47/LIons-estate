import React from "react";
import styled from "styled-components";
import FeaturedCard from "./FeaturedCard";
import { Products } from "../Products";

const Featured = () => {
  const Newprojects = Products.map((product) => {
    return (
      <FeaturedCard
        image={product.images}
        title={product.title}
        price={product.price}
        location={product.location}
        specification={product.specification}
        status={product.status}
        key={product.id}
      />
    );
  });
  return (
    <StyledSection>
      <h1> Featured Houses</h1>
      <div className="featured-grid">{Newprojects}</div>
    </StyledSection>
  );
};

export default Featured;

const StyledSection = styled.section`
  height: 100vh;

  .featured-grid {
    padding-top: 15px;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    height: 75%;
    width: 75vh;
    margin: 0 auto;
  }
`;