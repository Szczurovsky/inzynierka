import logo from "./logo.svg";
import "./App.css";
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
function App(props) {
    const [loginStatus, setLoginStatus] = useState("NOT_LOGGED_IN");
    const [user, setUser] = useState({});
    const handleLogin = (data) => {
        setLoginStatus("LOGGED_IN");
        setUser({ data });
    };
    useEffect(() => {
        // async function fetchData() {
        axios
            .get("https://inzynierkatest.herokuapp.com/api/v3/logged_in", {
                withCredentials: true,
            })
            .then((response) => {
                console.log("TO jest glowny response", response);
                if (
                    response.data.logged_in &&
                    loginStatus === "NOT_LOGGED_IN"
                ) {
                    console.log("loggen in?", response.data.logged_in);
                    setLoginStatus("LOGGED_IN");
                    setUser(response.data.user);
                } else if (
                    !response.data.logged_in &
                    (loginStatus === "LOGGED_IN")
                ) {
                    console.log("loggen in?", response.data.logged_in);
                    setLoginStatus("NOT_LOGGED_IN");
                    setUser({});
                }
            })
            .catch((error) => {
                console.log("errors", error);
            });
    }, []);
    return (
        <div className="App">
            <StartPageUse
                handleLogin={handleLogin}
                setUser={setUser}
                setLoginStatus={setLoginStatus}
                loginStatus={loginStatus}
            />
        </div>
    );
}

export default App;
