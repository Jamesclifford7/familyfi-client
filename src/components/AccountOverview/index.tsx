import React, { useEffect } from 'react'
import NavBar from '../NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faDollarSign, faEye, faKey, faHandshake, faLink } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function AccountOverview() {

    useEffect(() => {
        // Scroll to the top of the page
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <NavBar />
            <Header>Account Summary</Header>
            <ActionNav>
                <StyledLink to="">
                    <FontAwesomeIcon icon={faDollarSign} />
                    Make Payment
                </StyledLink>
                <StyledLink to="">
                    <FontAwesomeIcon icon={faEye} />
                    View Statements
                </StyledLink>
                <StyledLink to="">
                    <FontAwesomeIcon icon={faKey} />
                    Turn Card On or Off
                </StyledLink>
                <StyledLink to="">
                    <FontAwesomeIcon icon={faLink} />
                    Linked Checking Account
                </StyledLink>
                <StyledLink to="">
                    <FontAwesomeIcon icon={faHandshake} />
                    Help Center
                </StyledLink>
            </ActionNav>
            <OverviewContainer>
                <OverviewLeft>
                    <div>
                        <FontAwesomeIcon icon={faCreditCard} />
                        <h2>My FamilyFi Card</h2>
                    </div>
                    <p>4242 4242 4242 4242</p>
                    <div>
                        <span>Exp: 12/2028</span>
                        <span>Security Code: 424</span>
                    </div>
                </OverviewLeft>
                <OverviewRight>
                    <div>
                        <h2>$800.00</h2>
                        <p>Outstanding Balance</p>
                    </div>
                    <div>
                        <h2>$100.00</h2>
                        <p>Rewards</p>
                    </div>
                </OverviewRight>
            </OverviewContainer>
            <BalanceContainer>
                <h3>Balance Information</h3>
                <Information>
                    <BalanceSection>
                        <div>
                            <h4>Minimum Payment (Due 12/01): </h4>
                            <Link to="">Make Payment</Link>
                        </div>
                        <span>$150.00</span>
                    </BalanceSection>
                    <BalanceSection>
                        <h4>Total credit limit: </h4>
                        <span>$7,000.00</span>
                    </BalanceSection>
                    <BalanceSection>
                        <h4>Available credit: </h4>
                        <span>$6,200.00</span>
                    </BalanceSection>
                    <BalanceSection>
                        <h4>Cash advance limit: </h4>
                        <span>$1,000.00</span>
                    </BalanceSection>
                </Information>
            </BalanceContainer>
            <ActivityDesktop>
                <h3>Activity</h3>
                <Information>
                    <h4>Posted Transactions</h4>
                    <ActivityContainer>
                        <ActivityLeft>
                            <h5>Transaction Date</h5>
                            <h5>Posting Date</h5>
                            <h5>Description</h5>
                        </ActivityLeft>
                        <ActivityRight>
                            <h5>Amount</h5>
                            <h5>Running Balance</h5>
                        </ActivityRight>
                    </ActivityContainer>
                    <ActivityContainer>
                        <ActivityLeft>
                            <span>01/15/2024</span>
                            <span>01/20/2024</span>
                            <span>H&M</span>
                        </ActivityLeft>
                        <ActivityRight>
                            <span>$50.00</span>
                            <span>$800.00</span>
                        </ActivityRight>
                    </ActivityContainer>
                    <ActivityContainer>
                        <ActivityLeft>
                            <span>01/10/2024</span>
                            <span>01/15/2024</span>
                            <span>TARGET</span>
                        </ActivityLeft>
                        <ActivityRight>
                            <span>$50.00</span>
                            <span>$750.00</span>
                        </ActivityRight>
                    </ActivityContainer>
                    <ActivityContainer>
                        <ActivityLeft>
                            <span>01/05/2024</span>
                            <span>01/10/2024</span>
                            <span>SPROUTS</span>
                        </ActivityLeft>
                        <ActivityRight>
                            <span>$40.00</span>
                            <span>$700.00</span>
                        </ActivityRight>
                    </ActivityContainer>
                    <ActivityContainer>
                        <ActivityLeft>
                            <span>01/01/2024</span>
                            <span>01/05/2024</span>
                            <span>SHELL</span>
                        </ActivityLeft>
                        <ActivityRight>
                            <span>$60.00</span>
                            <span>$660.00</span>
                        </ActivityRight>
                    </ActivityContainer>
                </Information>
            </ActivityDesktop>
            <ActivityMobile>
                <h3>Activity</h3>
                <Information>
                    <ActivityContainer>
                        <h5>H&M</h5>
                        <span>$50.00</span>
                    </ActivityContainer>
                    <ActivityContainer>
                        <h5>Target</h5>
                        <span>$50.00</span>
                    </ActivityContainer>
                    <ActivityContainer>
                        <h5>Sprouts</h5>
                        <span>$40.00</span>
                    </ActivityContainer>
                    <ActivityContainer>
                        <h5>Shell</h5>
                        <span>$60.00</span>
                    </ActivityContainer>
                </Information>
            </ActivityMobile>
        </>
    )
}

export const Header = styled.h1`
    padding: 50px 0; 
    margin: 0; 
`

const ActionNav = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: center; 

    @media all and (min-width: 515px) {
        flex-direction: row; 
        width: 100%; 
    }
`

const StyledLink = styled(Link)`
    text-decoration: none; 
    color: #000000; 
    margin-bottom: 20px; 
    margin-right: 0; 
    padding: 0 20px; 

    svg {
        margin-right: 10px; 
    }

    &:hover {
        text-decoration: underline; 
    }

    @media all and (min-width: 515px) {
        margin-bottom: 0; 
    }
`

const OverviewContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: space-around; 
    margin-top: 75px; 
    align-items: center; 

    @media all and (min-width: 515px) {
        flex-direction: row;
    }
`

const OverviewLeft = styled.div`
    border: solid 2px #000000; 
    border-radius: 20px; 
    width: 90%; 
    padding: 50px 0; 
    background-color: #ffffff; 

    div {
        display: flex; 
        justify-content: center; 
        align-items: center; 
    }

    div svg, div h2 {
        display: inline-block; 
        margin-right: 20px; 
    }

    div svg {
        height: 30px; 
    }

    span {
        margin-right: 20px; 
    }

    @media all and (min-width: 515px) {
        width: 40%; 
    }
`

const OverviewRight = styled.div`
    width: 90%; 
    margin-top: 50px; 
    div {
        width: 50%; 
        display: inline-block; 
    }

    div:nth-child(2) p {
        color: red; 
        font-weight: bold; 
    }

    @media all and (min-width: 515px) {
        width: 40%; 
        margin-top: 0; 
    }
`

const BalanceContainer = styled.div`
    margin: 0 auto; 
    margin-top: 75px; 
    width: 80%;

    h3 {
        text-align: center; 

        @media all and (min-width: 915px) {
            text-align: left; 
        }
    }
`

const BalanceSection = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: space-between;
    align-items: center;  
    background-color: #ffffff; 
    margin: 20px; 

    a {
        text-decoration: none; 
        color: #000000; 
    }

    a:hover {
        text-decoration: underline; 
    }
`

const Information = styled.div`
    border: solid 0.5px; 
    width: 100%; 
    margin: 0 auto; 
    margin-top: 75px; 
    background-color: #ffffff; 

    @media all and (min-width: 415px) {
        width: 90%; 
    }
`

const ActivityDesktop = styled.div`
    margin: 0 auto; 
    margin-top: 75px; 
    width: 80%;
    display: none; 

    h3 {
        text-align: left; 
    }

    @media all and (min-width: 915px) {
        display: inherit; 
    }
`

const ActivityMobile = styled.div`
    margin: 0 auto; 
    margin-top: 75px; 
    width: 80%;
    display: inherit; 

    h3 {
        text-aline: center; 
    }

    @media all and (min-width: 915px) {
        display: none; 
    }
`

const ActivityContainer = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: space-between; 
    margin: 20px; 

    h5, span {
        display: inline-block; 
    }

    span {
        padding: 20px 0; 
    }
`

const ActivityLeft = styled.div`
    h5, span {
        margin-left: 35px; 
    }
`

const ActivityRight = styled.div`
    h5, span {
        margin-right: 35px; 
    }
`