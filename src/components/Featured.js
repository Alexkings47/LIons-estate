import React from "react";
import styled from "styled-components";
import { Products } from "../Products";
import ProductCard from "./ProductCard";

const Featured = () => {
  const Newprojects = Products.map((product) => {
    return (
      <ProductCard
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
  padding: 14px 3rem 20px;

  background-color: rgb(240, 240, 230);

  @media (max-width: 800px) {
    margin-bottom: 10rem;
  }
  .featured-grid {
    padding-top: 15px;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(242px, 1fr));
    grid-gap: 20px;
    grid-column-gap: 10%;
    margin: 0 auto;
  }
  h1 {
    color: #061580;
    font-size: 30px;
    font-family: "quicksand";
    margin-bottom: 10px;
    font-weight: 900;
  }
`;
