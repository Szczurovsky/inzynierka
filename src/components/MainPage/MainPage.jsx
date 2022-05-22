import  { Component } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Registration from "../Auth/Registrations"
import Login from "../Auth/Login"

const Page = styled.div`
     width: 100%;
    display: flex;
    /* height:100vh; */
    background-color:#171717;
    /* justify-content: center; */
   flex-direction: column;
   color:white;
   letter-spacing: 2px;
 
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
       
            <>
              <Page>Status: {props.loggedInStatus}</Page>
              <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
              <Login handleSuccessfulAuth={handleSuccessfulAuth} />
            </>
       
    )
}

// class MainPage extends Component {



//     const staty = { siła: 1 }

//     async function fetcha() {
//     const response = await fetch('https://backinz.herokuapp.com/api/v1/klans');
//     const movies = await response.json();
//     setData(movies)
// }


//     render() {
//         return (
//             <>
//               <Page></Page>
//             </>
//         )
//     }
// }
// export default MainPage