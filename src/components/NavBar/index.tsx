import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <StyledNav>
            <StyledLink to="/account_overview">Overview</StyledLink>
            <StyledLink to="/marketplace">Marketplace</StyledLink>
            <Logout>Logout</Logout>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    border-bottom: solid #000000; 
    background-color: #64F58D; 
    display: flex; 
    margin: 0; 
    padding: 30px 0; 
    width: 100%; 
    justify-content: flex-end; 
`

const StyledLink = styled(Link)`
    text-decoration: none; 
    font-size: 16px; 
    margin-right: 35px; 
    color: #000000; 

    &:hover {
        text-decoration: underline; 
    }
`

const Logout = styled.button`
    background: none; 
    border: none; 
    font-size: 16px; 
    margin-right: 35px; 
    color: #000000; 

    &:hover {
        text-decoration: underline; 
        cursor: pointer; 
    }
`