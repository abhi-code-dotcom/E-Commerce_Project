import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Nav from './Nav';
const Header = () => {
  return (
    <MainHeader>
        <Link to="/">
            <img className="logo" src="./images/logo.png" alt="my logo img" />
        </Link>
        <Nav />
    </MainHeader>
    
  );
};

const MainHeader = styled.header`
    padding:0 4.8rem;
    height:10rem;
    background-color:${({theme})=> theme.colors.bg};
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:relative;

.logo{
    height:10rem;
    width:auto;
    ${'' /* margin-left:-7rem; */}
    
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .logo{
    height:10rem;
    width:auto;
    margin-left:-7rem;
    
}
}
`;

export default Header
