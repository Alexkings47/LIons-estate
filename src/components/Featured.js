import React from "react";
import styled from "styled-components";

const Featured = () => {
  return (
    <StyledSection>
      <h1> Check all our latest houses</h1>
      <div className="featured-box">
        <img
          src="../images/lagos.jpg"
          className="featured-houses"
          alt="featured house"
        />
      </div>
      <div className="featured-box">
        <img
          src="../images/lagos.jpg"
          className="featured-houses"
          alt="featured house"
        />
      </div>
      <div className="featured-box">
        <img
          src="../images/lagos.jpg"
          className="featured-houses"
          alt="featured house"
        />
      </div>
      <div className="featured-box">
        <img
          src="./images/lagos.jpg"
          className="featured-houses"
          alt="featured house"
        />
      </div>
    </StyledSection>
  );
};

export default Featured;

const StyledSection = style.section`
display: grid;
grid-template-rows: repeat(3, 7rem);
grid-template-columns: repeat (2, max-content);

.featured-houses{

}




`;
