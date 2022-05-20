import React from 'react'
import styled from "styled-components";

const Partners = () => {
  return (
    <StyledDiv>
    <h1>Our Partners</h1>
    <div className='partners-div'>
        <img className='partner-image' src='' alt=''/>
        <img className='partner-image' src='' alt=''/>
        <img className='partner-image' src='' alt=''/>
        <img className='partner-image' src='' alt=''/>
    </div>
    </StyledDiv>
  )
}

export default Partners

const StyledDiv = styled.div`
padding: 1rem 3rem;
  h1 {
    color: #061580;
  }
`;