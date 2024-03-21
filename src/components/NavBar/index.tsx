import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import piggyBankIcon from '../images/piggybank2.png'
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../UserProvider';
import { UserProps } from '../UserProvider';

export default function NavBar() {
    const navigate = useNavigate()
    const user = useUserContext() as UserProps

    const handleLogout = (e: any) => {
        e.preventDefault(); 
        window.localStorage.clear(); 
        navigate('/'); 
    }

    if (Object.keys(user).length === 0) {
        return null
    }

    return (
        <>
            <DesktopNav>
                <LogoContainer>
                    <Logo>FamilyFi</Logo>
                    <PiggyBank src={piggyBankIcon} />
                    <span>Welcome, {user.firstName}</span>
                </LogoContainer>
                <LinkContainer>
                    <StyledLink to="/account_overview">Account Overview</StyledLink>
                    <StyledLink to="/marketplace">Marketplace</StyledLink>
                    <LogoutButton onClick={(e) => handleLogout(e)}>Logout</LogoutButton>
                </LinkContainer>
            </DesktopNav>
            <MobileNavContainer>
                <MobileNav>
                    <StyledLink to="/account_overview">Overview</StyledLink>
                    <StyledLink to="/marketplace">Marketplace</StyledLink>
                    <LogoutButton onClick={(e) => handleLogout(e)}>Logout</LogoutButton>
                </MobileNav>
            </MobileNavContainer>
        </>
    )
}

const DesktopNav = styled.nav`
    border-bottom: solid #000000; 
    background-color: #64F58D; 
    display: none; 
    margin: 0; 
    padding: 15px 0; 
    width: 100%; 
    justify-content: space-between; 

    @media all and (min-width: 415px) {
        display: flex; 
    }
`

const MobileNavContainer = styled.div`
    display: inherit; 
    position: fixed !important; 
    width: 100%; 
    bottom: 0; 

    @media all and (min-width: 415px) {
        display: none; 
    }
`

const MobileNav = styled.nav`
    border-top: solid 0.5px #000000; 
    background-color: #64F58D; 
    display: flex; 
    flex-direction: row; 
    padding: 25px 20px; 
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
    color: #000000; 

    &:hover {
        text-decoration: underline; 
    }

    @media all and (min-width: 415px) {
        margin-right: 35px; 
    }
`

const LogoutButton = styled.button`
    background: none; 
    border: none; 
    font-size: 16px; 
    color: #000000; 

    &:hover {
        text-decoration: underline; 
        cursor: pointer; 
    }

    @media all and (min-width: 415px) {
        margin-right: 35px; 
    }
`