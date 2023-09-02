import React from "react";
import styled from "styled-components";
import agents from "../pages/agents";
import PartnerCard from "./PartnerCard";

const Partners = ({ partnerClass, realtors, many }) => {
  const [testimonial, setTestimonial] = React.useState([""]);
  console.log(testimonial);

  React.useEffect(() => {
    fetch("https://testimonialapi.toolcarton.com/api/1")
      .then((resp) => resp.json())
      .then((data) => setTestimonial([data]));
  }, []);

  const PartnersArr = testimonial.map((card) => {
    return (
      <PartnerCard name={card.name} key={card.id} title={card.designation} />
    );
  });

  const ManyPartners = [];
  for (let i = 0; i < many; i++) {
    ManyPartners.push(PartnersArr);
  }
  return (
    <StyledDiv className="partnerClass">
      <h2 color ="var(--green)">{realtors}</h2>
      <div className="partners">
        {/* {PartnersArr} */}
        {ManyPartners}
      </div>
    </StyledDiv>
  );
};

export default Partners;

const StyledDiv = styled.div`
  padding: 3rem 3rem;

  p {
    color: #44a8eb;
  }

  h2 {
    color: #44a8eb;
    color: #061580;
    flex: 1;
    margin-bottom: 1rem;
  }
  width: 100%;

  .partners {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
  @media (max-width: 800px) {
    padding: 2rem 0;

    .partners {
      width: 100%;
      flex-direction: row;
      padding: 0 3rem;
    }
  }

  // &::after {
  //   background: linear-gradient(-45deg, rgb(240, 240, 230) 16px, transparent 0),
  //     linear-gradient(45deg, #ffffff 16px, #061580 0);
  //   background-position: left-bottom;
  //   background-repeat: repeat-x;
  //   background-size: 10px;
  //   content: " ";
  //   display: block;
  //   position: absolute;
  //   bottom: 0px;
  //   left: 0px;
  //   width: 100%;
  //   height: 25px;
  // }
`;
