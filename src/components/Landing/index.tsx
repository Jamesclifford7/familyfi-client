import React, {useState} from 'react'
import { TextField, Button } from '@mui/material'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import '../../fonts/index.css'
import piggyBankIcon from '../images/piggybank2.png'
import axios from 'axios'
import { useUserContext, UserContextProps, UserProps } from '../UserProvider';
import creditCardImage from '../images/credit-card-vector-graphic.png'
import { faDollarSign, faMagnifyingGlass, faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import huggiesLogo from '../images/BrandLogos/huggies.gif'
import levisLogo from '../images/BrandLogos/levis.jpeg'
import officeDepotLogo from '../images/BrandLogos/office-depot.webp'
import dicksLogo from '../images/BrandLogos/dicks.jpeg'

interface LoginProps {
    email: string
    password: string
}

export default function LandingPage() {
    const [userNotFoundMessage, setUserNotFoundMessage] = useState<string>()
    const navigate = useNavigate()
    const context = useUserContext() as UserContextProps

    const handleLogin = (e: any) => {
        e.preventDefault()
        const email: LoginProps["email"] = e.target.email.value
        const password: LoginProps["password"] = e.target.password.value

        axios({
            method: 'post', 
            url: `${process.env.REACT_APP_HEROKU_API_URL}/login`, 
            headers: {
                'content-type': 'application/json'
            },
            data: {
                email: email, 
                password: password
            },
        })
        .then((res) => {
            if (res.data === "User not found") {
                setUserNotFoundMessage("User not found")
            }

            window.localStorage.setItem('user', res.data.token); 
            const { account_created, first_name, last_name, ...rest } = res.data.user;

            const reformattedUser: UserProps = {
                firstName: res.data.user.first_name, 
                lastName: res.data.user.last_name, 
                accountCreated: res.data.user.account_created, 
                ...rest
            }
            
            context.setUser(reformattedUser); 
            context.setToken(res.data.token); 
            setUserNotFoundMessage(""); 
        })
        .then(() => {
            navigate('/account_overview'); 
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            <Top>
                <LogoContainer>
                    <Logo>FamilyFi</Logo>
                    <PiggyBank src={piggyBankIcon} />
                </LogoContainer>
                <p>The Credit Card Designed For Young Families</p>
            </Top>
            <Body>
                <Logo>Raising a family is more expensive than ever. We're here to help. </Logo>
                <BodyTop>
                    <img src={creditCardImage} alt="credit card clip art" />
                    <p>FamilyFi is a mobile-first credit card designed to ease the rising cost of raising a family. 
                        On average, it costs $20,000 a year to raise a child; a 40% increase over the past decade. 
                        FamilyFi allows you to use rewards on childrearing-related products in our exclusive marketplace, 
                        allowing you to save on family-related purchases while building credit.
                    </p>
                </BodyTop>
                <BodyMiddle>
                    <div>
                        <h2>Shop. Save. Build Credit.</h2>
                    </div>
                    <div>
                        <Card>
                            <FontAwesomeIcon icon={faDollarSign} />
                            <p>Earn cash back rewards while you spend.</p>
                        </Card>
                        <Card>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <p>Find deals, use rewards, and save on essential products in our FamilyFi marketplace.</p>
                        </Card>
                        <Card>
                            <FontAwesomeIcon icon={faBoltLightning} />
                            <p>All while building credit.</p>
                        </Card>
                    </div>
                </BodyMiddle>
                <StyledHeader>Shop Marketplace Brands</StyledHeader>
                <BodyBottom>
                    <div>
                        <img src={huggiesLogo} alt="huggies" />
                    </div>
                    <div>
                        <img src={levisLogo} alt="levis" />
                    </div>
                    <div>
                        <img src={officeDepotLogo} alt="office depot" />
                    </div>
                    <div>
                        <img src={dicksLogo} alt="dicks" />
                    </div>
                </BodyBottom>
            </Body>
            <StyledHeader>Sign In</StyledHeader>
            <form onSubmit={(e) => handleLogin(e)}>
                <TextFieldContainer>
                    <StyledTextField
                        label="Email"
                        name="email"
                        sx={{
                            backgroundColor: "#ffffff"
                        }}
                    />
                </TextFieldContainer>
                <TextFieldContainer>
                    <StyledTextField
                        label="Password"
                        name="password"
                        type="password"
                        sx={{
                            backgroundColor: "#ffffff"
                        }}
                    />
                </TextFieldContainer>
                <StyledButton
                    type="submit"
                    variant="contained"
                    sx={{
                        backgroundColor: "#64F58D", 
                        color: "#000000",
                        '&:hover': {
                            backgroundColor: "#64F58D"
                        }
                    }}
                >
                    Submit
                </StyledButton>
            </form>
            <UserNotFound userNotFoundMessage={userNotFoundMessage} />
            <CredentialsContainer>
                <h3>Demo Credentials:</h3>
                <p>Email: demo@familyfi.com</p>
                <p>Password: Password!1</p>
            </CredentialsContainer>
        </>
    )
}

function UserNotFound(props: {userNotFoundMessage: string | undefined}) {
    if (!props.userNotFoundMessage) {
        return null
    }

    return (
        <UserNotFoundContainer>{props.userNotFoundMessage}</UserNotFoundContainer>
    )
}

const Top = styled.div`
    padding-top: 50px; 
    display: flex; 
    flex-direction: column; 
    justify-content: space-around; 
    align-items: center; 

    p {
        display: inline-block; 
        font-weight: bold; 
        font-family: "Josefin Sans", sans-serif;
        color: #01BAEF; 
        font-style: italic; 
    }

    @media screen and (min-width: 825px) {
        flex-direction: row; 
    }
`

const Logo = styled.h1`
    font-family: "Josefin Sans", sans-serif;
    display: inline-block; 
`

const PiggyBank = styled.img`
    display: inline-block; 
    height: 50px; 
    margin-left: 30px; 
`

const LogoContainer = styled.div`
    display: flex; 
    align-items: center; 
`

const Body = styled.div`
    margin: 0 auto; 
    width: 75%; 

    h1 {
        margin-top: 25px; 
    }

    @media all and (min-width: 825px) {
        h1 {
            margin-top: 75px; 
        }
    }
`

const BodyTop = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: space-between; 
    margin-top: 0; 

    img {
        height: auto; 
        width: 90%; 
        margin: 0 auto; 
        margin-bottom: 20px; 
    }

    p {
        width: 90%; 
        font-weight: 500; 
        line-height: 35px; 
        font-size: 18px; 
        margin: 0 auto; 
    }

    @media all and (min-width: 825px) {
        flex-direction: row; 
        margin-top: 50px;

        img {
            width: 40%; 
            max-height: 500px;
        }

        p {
            width: 40%;
        }
    }
`

const BodyMiddle = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: space-between; 
    margin: 25px 0; 



    div:first-child {
        display: flex; 
        align-items: center; 
    }

    h2 {
        margin: 25px auto; 

    }

    div {
        width: 100%; 
    }

    @media all and (min-width: 825px) {
        flex-direction: row; 

        div {
            width: 40%;
        }

        h2 {
            margin: auto; 
        }
    }
`

const BodyBottom = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: space-between; 

    div {
        width: 100%; 
        margin-bottom: 20px; 
        margin: 0 0 20px 0; 

        img {
            width: 100%; 
            height: 150px; 
            border-radius: 25px;
        }
    }

    @media all and (min-width: 825px) {
        flex-direction: row;
        padding: 40px 0; 

        div {
            width: 20%;  
        }
    }
`

const Card = styled.div`
    background-color: #64F58D; 
    border: solid; 
    margin: 0 auto; 
    margin-bottom: 20px; 
    border-radius: 25px; 
    padding: 40px 0; 
    width: 100% !important;
    display: inline-block !important; 

    svg {
        height: 25px; 
    }

    p {
        line-height: 25px; 
        padding: 0 10px; 
    }
`

const StyledHeader = styled.h2`
    margin: 0; 
    padding: 25px 0; 
`

const StyledTextField = styled(TextField)`
    width: 90%; 

    @media screen and (min-width: 825px) {
        width: 25%;
    }
`

const TextFieldContainer = styled.div`
    margin-bottom: 20px; 
    width: 100%; 
`

const StyledButton = styled(Button)`
    background-color: #64F58D; 
    width: 50%; 

    @media screen and (min-width: 825px) {
        width: inherit;
    }
`

const UserNotFoundContainer = styled.div`
    margin-top: 20px;   
`

const CredentialsContainer = styled.div`
    background-color: #64F58D; 
    padding: 12px; 
    width: 80%; 
    border: solid; 
    border-width: 0.8px; 
    margin: 0 auto; 
    margin-top: 20px; 
    border-radius: 25px; 

    @media all and (min-width: 825px) {
        width: 25%;
    }
`