import React from "react";
import styled from "styled-components";
import { BiCurrentLocation } from "react-icons/bi";

const ProductCard = ({ image, title, price, location, specification }) => {
  return (
    <ProductCard>
      <img src={image} alt={title} />
      <div className="details">
        <h2>{title}</h2>
        <p className="price">{price}</p>
        <i>arrow</i>
        <small>
          <BiCurrentLocation />
          {location}
        </small>
        <small className="specifications">{specification}</small>
        <Button value={"view me"} color={"btn-orange"} />
      </div>
    </ProductCard>
  );
};

export default ProductCard;

const StyledDiv = styled.div`
  display: flex;
  width: 40%;

  .details {
    padding: 20px 10px 10px;
    display: flex;
    flex-direcction: column;
    justify-contents: space-between;
    align-items: flex-start;
    width: 60%;
    display: flex;
  }
  .price {
    color: #44a8eb;
  }
`;
