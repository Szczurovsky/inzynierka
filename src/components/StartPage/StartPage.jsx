

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
            klans: null,
            postac: null,
            staty: {
                sila: 1,
                sila_woli: 2,
            }

        };
    }
    componentDidMount() {
        this.getKlans();
        this.getPostac();
    }
    getKlans = () => {
        fetch("https://backinz.herokuapp.com/api/v2/klans")
            .then((response) => response.json())
            .then((response_items) => {
                this.setState({ klans: response_items });
            });
    }
    getPostac = () => {
        fetch("https://backinz.herokuapp.com/api/v2/postacs")
            .then((response) => response.json())
            .then((response_items) => {
                this.setState({ postac: response_items });
            });
    }

    saveStats = (zmienna) => {
        //   const test = {...this.state.postac, : }
        const key = this.state.postac.map(object => object.klan);
        console.log(key)
        const wartosc = key.map(object => object[0].jarl);
        console.log(wartosc)
        // console.log(stats)
        // this.setState({postac: zmienna})

        this.setState(prevState => ({
            postac: 
                prevState.postac.map(
                   el => el.key === key? {...el, step:2 }: el
               )
            }
        ))
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
                            klany={this.state.klans}
                            saveStats={this.saveStats}
                            postac={this.state.postac}
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