import  { Component } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Registration from "../Auth/Registrations"
import Login from "../Auth/Login"

const Page = styled.div`
color:black;
font-size:1.5rem
`

export const MainPage = (props) => {

  const navigate = useNavigate();
  const handleSuccessfulAuth = (data) => {
    // props.setLoginStatus("LOGGED_IN")
    // props.setUser(data)
    props.handleLogin(data)
      navigate("/norgmar")
    }
//     // const [loading, setLoading] = useState(true);
//     // const [error, setError] = useState(null);
    return (
       
            <Page>
              <Page>Status: {props.loggedInStatus}</Page>
              <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
              <Login handleSuccessfulAuth={handleSuccessfulAuth} />
            </Page>
       
    )
}

