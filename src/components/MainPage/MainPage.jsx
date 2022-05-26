import  { Component } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Registration from "../Auth/Registrations";
import Login from "../Auth/Login";
import { WindowAuth } from "../Auth/WindowAuth";
const Page = styled.div`
color:black;
font-size:1.5rem;
position:relative;

width:25%;
left:75%;
`
const WrapperMenuRight = styled.div`

`
export const MainPage = (props) => {


  const [showPopupLogin, setShowPopupLogin] = useState(false)
  const [showPopupRegistration, setShowPopupRegistration] = useState(false)
  const navigate = useNavigate();
  const handleSuccessfulAuth = (data) => {
    /* // props.setLoginStatus("LOGGED_IN") */
    /* // props.setUser(data) */
    props.handleLogin(data)
      navigate("/game")
    // alert("Brawo. Witaj wsród nas!")
    if(showPopupLogin===false) setShowPopupLogin(true)
  
    }
/* //     // const [loading, setLoading] = useState(true);
//     // const [error, setError] = useState(null); */
    return (
       
            <Page>
        {/* {zalogowany === true ? (<WindowAuth showPopLogin={showPopupLogin} showPopupRegistration={showPopupRegistration} setShowPopupRegistration={setShowPopupRegistration} setShowPopupLogin={setShowPopupLogin} handleSuccessfulAuth={handleSuccessfulAuth} />)} */}
        <WindowAuth showPopupLogin={showPopupLogin} showPopupRegistration={showPopupRegistration} setShowPopupRegistration={setShowPopupRegistration} setShowPopupLogin={setShowPopupLogin} handleSuccessfulAuth={handleSuccessfulAuth} />

               {/* <Registration handleSuccessfulAuth={handleSuccessfulAuth} /> 
               <Login handleSuccessfulAuth={handleSuccessfulAuth} /> 
             <Page>Status: {props.loggedInStatus}</Page>  */}
            </Page>
       
    )
}

