import React from 'react';
import styled from 'styled-components';
// import './header.css';

const StyledHeader = styled.header  
`
background-color:${props => props.theme.mainColor};
padding: .5%;
border-bottom:#3befff solid 4px;
color: ${props => props.theme.subMainColor};
`

function Header(){

    return(
        <StyledHeader>
                <h1>NASA Photo Of the Day!</h1>
        </StyledHeader>
    );

}




export default Header;
