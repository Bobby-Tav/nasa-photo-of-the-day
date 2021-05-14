import React from 'react';
import styled from 'styled-components'
// import './footer.css'

const StyledFooter = styled.div 
`
background-color:${props => props.theme.mainColor};
padding:2%;  
text-align: right;
color:${props => props.theme.subMainColor}
`

export default function Footer(){
    return(
        <StyledFooter>
            <p>Robert Taveras</p>
        </StyledFooter>
    )
}