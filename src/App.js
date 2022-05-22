import logo from "./logo.svg";
import "./App.css";
import React from "react";
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
    // const [loginStatus, setLoginStatus] = useState("NOT_LOGGED_IN");
    // const [user, setUser] = useState({});
    handleLogin = (data) => {
        this.setState({
            loggedInStatus: "LOGGED_IN",
            user: { data },
        });
    };
    // useEffect(() => {
    //     // async function fetchData() {
    //     axios
    //         .get("https://inzynierkatest.herokuapp.com/api/v3/logged_in", {
    //             withCredentials: true,
    //         })
    //         .then((response) => {
    //             console.log("TO jest glowny response", response);
    //             if (
    //                 response.data.logged_in &&
    //                 loginStatus === "NOT_LOGGED_IN"
    //             ) {
    //                 console.log("Jestes zalogowany");
    //                 setLoginStatus("LOGGED_IN");
    //                 setUser(response.data.user);
    //             } else if (
    //                 !response.data.logged_in &
    //                 (loginStatus === "LOGGED_IN")
    //             ) {
    //                 console.log("Nie jestes zalogowany");
    //                 setLoginStatus("NOT_LOGGED_IN");
    //                 setUser({});
    //             }
    //         })
    //         .catch((error) => {
    //             console.log("errors", error);
    //         });
    // }, []);
    checkLoginStatus = () => {
        axios
            .get("https://inzynierkatest.herokuapp.com/api/v3/logged_in", {
                withCredentials: true,
            })
            .then((response) => {
                if (
                    response.data.logged_in &&
                    this.state.loggedInStatus === "NOT_LOGGED_IN"
                ) {
                    this.setState({
                        loggedInStatus: "LOGGED_IN",
                        user: response.data.user,
                    });
                } else if (
                    !response.data.logged_in &
                    (this.state.loggedInStatus === "LOGGED_IN")
                ) {
                    this.setState({
                        loggedInStatus: "NOT_LOGGED_IN",
                        user: {},
                    });
                }
            })

            .catch((error) => {
                console.log("login rror", error);
            });
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
                />
            </div>
        );
    }
}

// export default App;
