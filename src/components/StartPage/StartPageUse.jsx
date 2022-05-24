

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

        <Router>        
            <MenuPC />
            <Routes>
                <Route path="/" element={<MainPage {...props} handleLogin={props.handleLogin} loggedInStatus={props.loginStatus} />} />
                <Route path="home" element={<MainPage {...props} handleLogin={props.handleLogin} loggedInStatus={props.loginStatus} />} />
                <Route path="norgmar" element={<GamePage {...props} handleLogin={props.handleLogin} loggedInStatus={props.loginStatus}/>} />
                <Route
                    path="characters"
                    element={
                        <Characters
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
                <Route path="story-line" element={<Story />} />
                <Route path="ekipa" element={<About />} />
                <Route path="walka" element={<Walka />} />
            </Routes>
        </Router>
    )


}