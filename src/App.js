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
import StartPage from "./components/StartPage/StartPage.jsx";
function App(props) {
    return (
        <div className="App">
            <StartPage />
        </div>
    );
}

export default App;
