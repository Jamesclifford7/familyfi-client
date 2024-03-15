import React, {useState} from 'react'
import { TextField, Button } from '@mui/material'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import '../../fonts/index.css'

interface LoginProps {
    email: string
    password: string
}

export default function LandingPage() {

    const handleLogin = (e: any) => {
        e.preventDefault()
        const email: LoginProps["email"] = e.target.email.value
        const password: LoginProps["password"] = e.target.password.value

        console.log(email)
        console.log(password)
    }

    return (
        <>
            <Top>
                <Logo>FamilyFi</Logo>
                <p>The Credit Card for Childrearing</p>
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
            <CredentialsContainer>
                <h3>Demo Credentials:</h3>
                <p>Email: demo@familyfi.com</p>
                <p>Password: Password1</p>
            </CredentialsContainer>

        </>
    )
}

const Top = styled.div`
    margin-top: 50px; 
    display: flex; 
    flex-direction: row; 
    justify-content: space-around; 
    align-items: center; 

    p {
        display: inline-block; 
        font-weight: bold; 
        font-style: italic; 
    }
`

const Logo = styled.h1`
    font-family: "Josefin Sans", sans-serif;
    display: inline-block; 
`

const StyledHeader = styled.h2`
    margin: 0; 
    padding: 25px 0; 
`

const StyledTextField = styled(TextField)`
    width: 25%; 
`

const TextFieldContainer = styled.div`
    margin-bottom: 20px; 
    width: 100%; 
`

const StyledButton = styled(Button)`
    background-color: #64F58D; 
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
    @media all and (min-width: 640px) {
        width: 25%;
    }
`