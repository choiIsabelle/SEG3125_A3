import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
    background: #333;
    color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavLink = styled.a`
    color: #fff;
    text-decoration: none;
    margin: 0 1rem;
    &:hover {
        text-decoration: underline;
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
`;

const StyledHeader = styled.h1`
    font-size: 2.1rem;
    margin: 0;
    font-weight: bold;
`

const Navbar = () => {
  return (
    <Nav>
      <StyledHeader>Meet the Cats!</StyledHeader>
      <NavMenu>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavMenu>
    </Nav>
  )
}

export default Navbar