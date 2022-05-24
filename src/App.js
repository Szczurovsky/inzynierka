import logo from "./logo.svg";
import "./App.css";
import React from "react";
import styled from "styled-components";
// import MainPage from "./components/MainPage/MainPage";
import { MainPage } from "./components/MainPage/MainPage";
import { MenuPC } from "./components/Menu/MenuPC/MenuPC.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GamePage } from "./components/GamePage/GamePage";
import { Characters } from "./components/Characters/Characters";
import { Story } from "./components/StoryLine/Story";
import { Forum } from "./components/Forum/Forum";
import { useState, useEffect } from "react";
import { About } from "./components/About/About.jsx";
// import StartPage from "./components/StartPage/StartPage.jsx";
import axios from "axios";
import { StartPageUse } from "./components/StartPage/StartPageUse.jsx";

export default class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            loggedInStatus: "NOT_LOGGED_IN",
            user: {},
        };
    }

    handleLogin = (data) => {
        this.setState({
            loggedInStatus: "LOGGED_IN",
            user: { data },
        });
    };

    checkLoginStatus = () => {
        if (
            window.sessionStorage.getItem("zalogowany") &&
            this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
            this.setState({
                loggedInStatus: "LOGGED_IN",
                user_id: window.sessionStorage.getItem("user"),
            });
        } else if (
            !window.sessionStorage.getItem("zalogowany") &
            (this.state.loggedInStatus === "LOGGED_IN")
        ) {
            this.setState({
                loggedInStatus: "NOT_LOGGED_IN",
                user: {},
            }).catch((error) => {
                console.log("login rror", error);
            });
        }
    };

    componentDidMount() {
        this.checkLoginStatus();
    }
    render() {
        return (
            <div className="App">
                <StartPageUse
                    handleLogin={this.handleLogin}
                    // setUser={setUser}
                    // setLoginStatus={setLoginStatus}
                    loginStatus={this.state.loggedInStatus}
                    user_id={this.state.user_id}
                />
            </div>
        );
    }
}

// export default App;
