

// import MainPage from "./components/MainPage/MainPage";
import { MainPage } from "../MainPage/MainPage";
import { MenuPC } from "../Menu/MenuPC/MenuPC";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GamePage } from "../GamePage/GamePage";
import { Characters } from "../Characters/Characters";
import { Story } from "../StoryLine/Story";
// import { Forum } from "./components/Forum/Forum";
import { useState, useEffect } from "react";
import { About } from "../About/About.jsx";
import {Walka} from "../Walka/Walka.jsx"
import axios from "axios"
import React from "react"
import styled from "styled-components"
import img1 from "./img1.jpg"
import Logo from "./NorgmarLogo.png"
import logo from "./norgmar.png"
import isLoggedIn from "../../utils/isLoggedIn.js"
const MainStyle = styled.div`
  
    display: flex;
    height: 100vh;

 /* background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;  */
    flex-direction: row;
    color: white;
    letter-spacing: 2px;
`;
// const WrapLogos = styled.div`
//     display:flex;
    
//     /* align-self: center; */
//     /* justify-content: center; */
//     flex-direction: column;
// `
// const Image = styled.img`
//     width:160px;
//     height:40px;
//         display:flex;
    
//     align-self: center;
//     width: ${props => props.inputWidth || "160px"};
//     height: ${props => props.inputHeight || "40px"};
// `

const WrapperMenuLeft = styled.div`
    position: relative;
    
    width:20%;
`
const WrapperContent = styled.div`
    position:relative;
    width:80%;
    max-width:80%;
    display:flex;
    align-items: center;
    /* margin-right:30px; */
`

export const StartPageUse = (props) => {
    const [klans, setKlans] = useState();
    const [postac, setPostac] = useState();
    const [statystyki, setStatystyki] = useState({
        id: 1, imie: "", profesja: "", klan: {
            jarl: "",
            nastepca: "",
            nazwa: "",
            opis: "",
            polozenie: "",
            premie: {
                sila: "",
                sila_woli: "",
            },
            stolica: "Nidergheim"
        }
    });
    const [profesja, setProfesja] = useState();
    const [loading, setLoading] = useState(true);




    return (
    <MainStyle>
            <Router>  
                {/* <WrapLogos>
                    <Image src={Logo} inputHeight="200px" inputWidth="200px" />
                    <Image src={logo} />                
                </WrapLogos> */}
          

                <WrapperMenuLeft>
                    <MenuPC />
                </WrapperMenuLeft>
                <WrapperContent>
            <Routes>
                    <Route path="/" element={<MainPage {...props} handleLogin={props.handleLogin} loggedInStatus={props.loginStatus} isLoggedIn={isLoggedIn}/>} />
                    <Route path="home" element={<MainPage {...props} handleLogin={props.handleLogin} loggedInStatus={props.loginStatus} isLoggedIn={isLoggedIn} />} />
                    <Route path="game" element={<GamePage {...props} handleLogin={props.handleLogin} loggedInStatus={props.loginStatus} isLoggedIn={isLoggedIn}/>} />
                <Route
                    path="characters"
                    element={
                        <Characters
                            isLoggedIn={isLoggedIn}
                            klany={klans}                        
                            statystykiSave={setStatystyki}
                            postac={postac}
                            loading={loading}
                            profesja={profesja}
                            statystyki={statystyki}
                            user_id={props.user_id}
                        />
                    }
                />
                    <Route path="story-line" element={<Story isLoggedIn={isLoggedIn}/>} />
                    <Route path="ekipa" element={<About />} isLoggedIn={isLoggedIn}/>
                    <Route path="walka" element={<Walka />} isLoggedIn={isLoggedIn}/>
            </Routes>
                </WrapperContent>
            </Router>
        </MainStyle>
    )


}