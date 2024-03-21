import React, {useState} from 'react'
import { TextField, Button } from '@mui/material'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import '../../fonts/index.css'
import piggyBankIcon from '../images/piggybank2.png'
import axios from 'axios'

interface LoginProps {
    email: string
    password: string
}

export default function LandingPage() {
    const [userNotFoundMessage, setUserNotFoundMessage] = useState<string>()
    const navigate = useNavigate()

    const handleLogin = (e: any) => {
        e.preventDefault()
        const email: LoginProps["email"] = e.target.email.value
        const password: LoginProps["password"] = e.target.password.value

        axios({
            method: 'post', 
            url: `${process.env.REACT_APP_API_URL}/login`, 
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
            setUserNotFoundMessage(""); 
            navigate('/account_overview'); 
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <Container>
            <Top>
                <LogoContainer>
                    <Logo>FamilyFi</Logo>
                    <PiggyBank src={piggyBankIcon} />
                </LogoContainer>
                <p>The Credit Card Designed For Young Families</p>
            </Top>
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
        </Container>
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

const Container = styled.div`
    height: 100vh; 
`

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
        font-style: italic; 
    }

    @media screen and (min-width: 415px) {
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

const StyledHeader = styled.h2`
    margin: 0; 
    padding: 25px 0; 
`

const StyledTextField = styled(TextField)`
    width: 90%; 

    @media screen and (min-width: 415px) {
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

    @media screen and (min-width: 415px) {
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
    @media all and (min-width: 415px) {
        width: 25%;
    }
`