import React from "react";
import styled from "styled-components";
import { IoLocationSharp } from "react-icons/io5";
import Button from "./Button/Button";

const FeaturedCard = ({
  image,
  title,
  price,
  location,
  specification,
  status,
  color,
}) => {
  return (
    <StyledDiv>
      <img src={require(`../images/bgimg.jpeg`)} alt={title} className="img" />
      <Button value={status} color={"btn-orange"} width={"btn-small"} />
      <div className="details">
        <h2>{title}</h2>
        <p className="price">{price}</p>
        <small>
          <IoLocationSharp className="icon" />
          {location}
        </small>
        <small className="specifications">{specification}</small>
      </div>
      {/* <Button value={"view me"} color={"btn-blue"} width={"btn-small"} /> */}
    </StyledDiv>
  );
};

export default FeaturedCard;

const StyledDiv = styled.div`
  width: 100%;
  position: relative;
  border-radius: 4px;
  border: 1px solid black;
  overflow: hidden;
  font-family: "karla";

  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 50%;
    text-align: left;
    padding: 10px 5px;
  }

  .img {
    width: 100%;
    height: 50%;
    display: block;
    object-fit: cover;
  }

  .icon {
    color: orangered;
    margin-left: -3px;
  }
  .btn-small {
    width: 4rem;
    position: absolute;
    top: 5px;
    left: 5px;
  }
  .price {
    font-size: 13px;
    letter-spacing: -1px;
    font-weight: 500;
  }
  h2 {
    font-size: 15px;
  }
`;
