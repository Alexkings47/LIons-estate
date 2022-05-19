import React from 'react'
import styled from 'styled-components'
import ProductCard from "./ProductCard"

const NewAdditions = () => {
  return (
    <StyledSection>
        <ProductCard 
        image={}
        title={"Estate House"}
        price={"N1 million/ $2000 "}
        location={"5 kenyatta, Enugu,Nigeria."}
        specification={"3 Bedroom Flat with road access"}
        />
        
    </StyledSection>
  )
}

export default NewAdditions
const StyledSection =styled.sectoion`

`