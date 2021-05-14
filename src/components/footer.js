import React from 'react';
import styled from 'styled-components'
// import './footer.css'

const StyledFooter = styled.div 
`
background-color:#3b7cff;
padding:2%;  
text-align: right;
`

export default function Footer(){
    return(
        <StyledFooter>
            <p>Robert Taveras</p>
        </StyledFooter>
    )
}