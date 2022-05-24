import React from "react";
import styled from "styled-components";
import TestimonialCard from "./TestimonialCard";
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from "react-icons/md"

const Testimonial = () => {
  const [testimonial, setTestimonial] = React.useState([""]);
  console.log(testimonial);

  React.useEffect(() => {
    fetch("https://testimonialapi.toolcarton.com/api/1")
      .then((resp) => resp.json())
      .then((data) => setTestimonial([data]));
  }, []);

  const TestimonialCards = testimonial.map((card) => {
    return (
      <TestimonialCard
        name={card.name}
        key={card.id}
        title={card.designation}
        text={card.message}
      />
    );
  });

  function newTestimonials(event){
      
  }


  return (
    <StyledSection>
      <h1>what our customers say about us</h1>
      <div className="icons">
          <button className="left" onClick={newTestimonials}>
              <MdKeyboardArrowLeft />
          </button>
          <button className="left" onClick={newTestimonials}>
              <MdKeyboardArrowRight />
          </button>
      </div>
      {TestimonialCards}
      {TestimonialCards}
    </StyledSection>
  );
};

export default Testimonial;

const StyledSection = styled.section`
  background-color: #060129;
  margin-bottom: 5rem;
  display: grid;
  grid-gap: 40px;
  padding: 3rem 3rem 4rem;
  color: white;

  grid-template-columns: repeat(auto-fit, minmax(242px, 1fr));

  text-align: left;

  h1 {
    text-transform: capitalize;
    // text-align: center;
  }

  button {
    border: 2px solid orangered;
    border-radius: 50%;
    color: orangered;
    background: none;
    margin-left: 1rem;
  }

  button > * {
    width: 1.8rem;
    height: 1.8rem;
  }
  .icons {
    justify-self: flex-end;
  }
  button:active, button:hover {
    background-color: orangered;
    color: white;
  }
`;
