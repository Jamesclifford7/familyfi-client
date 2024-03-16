import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import piggyBankIcon from '../images/piggybank2.png'

export default function NavBar() {
    return (
        <StyledNav>
            <LogoContainer>
                <Logo>FamilyFi</Logo>
                <PiggyBank src={piggyBankIcon} />
            </LogoContainer>
            <LinkContainer>
                <StyledLink to="/account_overview">Account Overview</StyledLink>
                <StyledLink to="/marketplace">Marketplace</StyledLink>
                <Logout>Logout</Logout>
            </LinkContainer>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    border-bottom: solid #000000; 
    background-color: #64F58D; 
    display: flex; 
    margin: 0; 
    padding: 15px 0; 
    width: 100%; 
    justify-content: space-between; 
`

const LogoContainer = styled.div`
    display: flex; 
    align-items: center; 
`

const Logo = styled.h1`
    font-family: "Josefin Sans", sans-serif;
    margin-left: 50px; 
    display: inline-block; 
`

const PiggyBank = styled.img`
    height: 30px; 
    display: inline-block; 
    margin-left: 20px; 
`

const LinkContainer = styled.div`
    display: flex; 
    justify-content: flex-end; 
    align-items: center; 
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