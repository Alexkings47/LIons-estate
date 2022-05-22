import React from "react";
import styled from "styled-components";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdBed } from "react-icons/io";
import Button from "./Button/Button";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

const ProductCard = ({
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
      <AiOutlineHeart className="icon-heart" />
      <div className="details">
        <h2>
          {title}
          <i>
            {" "}
            <AiFillStar className="icon-star" />
          </i>
        </h2>
        <small>
          <IoLocationSharp className="icon" />
          {location}
        </small>
        <small className="specifications">
          <IoMdBed className="icon" />
          {specification}
        </small>
        <p className="price">{price}</p>
      </div>
      {/* <Button value={"view me"} color={"btn-blue"} width={"btn-small"} /> */}
    </StyledDiv>
  );
};

export default ProductCard;

const StyledDiv = styled.div`
  width: 90%;
  height: 350px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  font-family: "karla";
  box-shadow: 5px 5px 8px #888888;
  background: white;

  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 40%;
    text-align: left;
    padding: 10px 10px;
  }

  .img {
    width: 100%;
    height: 60%;
    display: block;
    object-fit: cover;
  }
  small {
    color: #626370;
  }
  .icon {
    color: orangered;
    margin-left: -3px;
  }
  .icon-heart {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 1.5rem;
    color: orangered;
    // background-color: red;
  }
  .icon-star {
    color: orangered;
    float: right;
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
    color: #44a8eb;
  }
  h2 {
    font-size: 15px;
    width: 100%;
  }
`;
