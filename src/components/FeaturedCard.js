import React from "react";
import styled from "styled-components";
import { BiCurrentLocation } from "react-icons/bi";
import Button from "./Button/Button";


const FeaturedCard = ({ image, title, price, location, specification }) => {
  return (
    <StyledDiv>
      <img src={require(`../images/${image}`)} alt={title} />
      <div className="details">
        <h2>{title}</h2>
        <p className="price">{price}</p>

        <small>
          <BiCurrentLocation />
          {location}
        </small>
        <small className="specifications">{specification}</small>

        <Button value={"view me"} color={"btn-blue"} width={"btn-small"} />
      </div>
      
    </StyledDiv>
  );
};

export default FeaturedCard;

const StyledDiv = styled.div`
  display: flex;
  box-shadow: 5px 5px 8px #061580;
  font-size: 90%;
  height: 100%;
  border-radius: 3px;
  font-family: "karla";

  & > img {
    width: 40%;
    display: block;
    object-fit: cover;
    height: 100%;
  }

  .btn-small {
    width: 4rem;
  }
  .btn-blue {
    background-color: #061580;
    color: white;
  }

  .details {
    border-left: 1px dashed #061580;
    padding: 15px 10px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    align-items: flex-start;
    display: flex;
    text-align: left;
  }
  .price {
    color: #44a8eb;
    font-size: 13px;
    letter-spacing: -1px;
    font-weight: 500;
  }
  h2 {
    font-size: 15px;
  }
`;
