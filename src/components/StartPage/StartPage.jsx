

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
import React from "react"
class StartPage extends React.Component {
    // const [data, setData] = useState(null);
    // const [stats, setStats] = useState("");

    // useEffect(() => {
    //     fetch("https://backinz.herokuapp.com/api/v1/klans")
    //         .then((response) => response.json())
    //         .then((response_items) => {
    //             setData(response_items);
    //         });
    // }, []);
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            staty: {
                sila: 1,
                sila_woli: 2,
            }

        };
    }
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        fetch("https://backinz.herokuapp.com/api/v1/klans")
            .then((response) => response.json())
            .then((response_items) => {
                this.setState({ data: response_items });
            });
    }
    saveStats = (stats) => {
      
        console.log(stats)
        this.setState({staty: stats})
    }
    render(){
    return(
        <Router>
            <MenuPC />
            <Routes>
                {console.log(this.state)}
                <Route path="/" element={<MainPage />} />
                <Route path="home" element={<MainPage />} />
                <Route path="norgmar" element={<GamePage />} />
                <Route
                    path="characters"
                    element={
                        <Characters
                            klany={this.state.data}
                            saveStats={this.saveStats}
                    
                            aktstat={this.state.staty}
                        />
                    }
                />
                <Route path="story-line" element={<Story />} />
                <Route path="ekipa" element={<About />} />
            </Routes>
        </Router>
    )
}
}
export default StartPage