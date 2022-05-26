import React, {useState} from 'react';
import Login from "./Login"
import Registrations from "./Registrations.jsx"
import styled from "styled-components"

const Wrapper = styled.div`

    width:100%;
`

const WindowAut = styled.div`
    /* height: 400px; */
        display:flex;
    flex-direction: column;
    padding: 30px 10px;
    background-color: rgba(0, 0, 0,0.4);
    /* background-color:red; */
    
    &:first-child{
        margin-bottom:20px;
    }
`
const Text = styled.p`
    font-size: 1rem;
    color:white;
`
export const WindowAuth = (props) => {

    return (
        <Wrapper>
         
            <WindowAut>
                <Text>Zarejestruj konto przybyszu !</Text>
                <Registrations komunikat="Brawo własnie się Zarejestrowałes!" setShowPopupRegistration={props.setShowPopupRegistrations} showPopupRegistration={props.showPopupRegistrations} handleSuccessfulAuth={props.handleSuccessfulAuth}/>
            </WindowAut>
            <WindowAut>
                <Text>A więc jesteś znanym poszukiwaczem przygód? <br /> Zaloguj się zatem!</Text>
                <Login komunikat="Brawo własnie się zalogowałeś!" setShowPopupLogin={props.setShowPopupLogin} showPopupLogin={props.showPopupLogin} handleSuccessfulAuth={props.handleSuccessfulAuth}/>
            </WindowAut>     
        </Wrapper>
    )
}