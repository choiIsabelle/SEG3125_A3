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
    cursor: pointer;
    &:hover {
        text-decoration: none;
        color: #f9f10b;
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
    &:hover {
        cursor: pointer;
        color: #f9f10b;
    }
`

const Navbar = ({handleNavigate}) => {
  return (
    <Nav>
      <StyledHeader onClick={()=>handleNavigate('landing')}>Meet the Cats!</StyledHeader>
      <NavMenu>
        <NavLink
            onClick={()=>handleNavigate('landing')}
            >
                Home
            </NavLink>
      </NavMenu>
    </Nav>
  )
}

export default Navbar