

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
    const [loginStatus, setLoginStatus] = useState("NOT_LOGGED_IN");
    const [user, setUser] = useState({});
    // componentDidMount = () => {
    //     setKlans();
    //     setPostac();
    // }
    // async function getKlans() {
    //     // fetch("https://backinz.herokuapp.com/api/v2/klans")
    //     //     .then((response) => response.json())
    //     //     .then((response_items) => {
    //     //         setKlans({ klans: response_items });
    //     //     });
    //     const result = await axios("https://backinz.herokuapp.com/api/v2/klans");
    //     setKlans({ klans: result });
    // }
    async function getPostac() {
        // fetch("https://backinz.herokuapp.com/api/v2/postacs")
        //     .then((response) => response.json())
        //     .then((response_items)=>setPostac(response_items))
        //     // .then((response_items) => {
        //     this.setState({ postac: response_items });
        // });

    }
    // function getAll() {
    //     getKlans();
    //     getPostac();
    //     console.log(postac)
    // }
    // saveStats = (zmienna) => {
    //     //   const test = {...this.state.postac, : }
    //     const key = this.state.postac.map(object => object.klan);
    //     console.log(key)
    //     const wartosc = key.map(object => object[0].jarl);
    //     console.log(wartosc)
    //     // console.log(stats)
    //     // this.setState({postac: zmienna})

    //     this.setState(prevState => ({
    //         postac:
    //             prevState.postac.map(
    //                 el => el.key === key ? { ...el, step: 2 } : el
    //             )
    //     }
    //     ))
    // }
    // const checkLoginStatus = () => {
    //     axios.get("https://inzynierkatest.herokuapp.com/api/v3/logged_in", { withCredentials: true })
    //         .then(response => { 
    //             console.log("TO jest glowny response",response)
    //             if (response.data.logged_in && loginStatus === "NOT_LOGGED_IN") {
    //                 console.log("loggen in?",response.data.logged_in)
    //                 setLoginStatus("LOGGED_IN");
    //                 setUser(response.data.user);
    //             } else if (!response.data.logged_in & loginStatus === "LOGGED_IN") {
    //                 console.log("loggen in?", response.data.logged_in)
    //                 setLoginStatus("NOT_LOGGED_IN");
    //                 setUser({});
    //             }
    //         })
           
    //         .catch(error => { console.log("errors", error) })
    // }

    useEffect(() => {
        // async function fetchData() {
        axios.get("https://inzynierkatest.herokuapp.com/api/v3/logged_in", { withCredentials: true })
            .then(response => {
                console.log("TO jest glowny response", response)
                if (response.data.logged_in && loginStatus === "NOT_LOGGED_IN") {
                    console.log("loggen in?", response.data.logged_in)
                    setLoginStatus("LOGGED_IN");
                    setUser(response.data.user);
                } else if (!response.data.logged_in & loginStatus === "LOGGED_IN") {
                    console.log("loggen in?", response.data.logged_in)
                    setLoginStatus("NOT_LOGGED_IN");
                    setUser({});
                }
            })

            .catch(error => { console.log("errors", error) })
        //     const result = await axios("https://inzynierkatest.herokuapp.com/api/v3/postacs");
        //     const result1 = await axios("https://backinz.herokuapp.com/api/v2/klans");
        //     setKlans(result1.data[0]);
        //     setPostac(result.data[0]);
        //     setProfesja(result.data[0].profesja)
        //     setLoading(false)
        // }
//    fetchData();


    },[]);


    return (

        <Router>
         
            <MenuPC />
            <Routes>

                <Route path="/" element={<MainPage {...props} setLoginStatus={setLoginStatus} setUser={setUser} loggedInStatus={loginStatus}/>} />
                <Route path="home" element={<MainPage {...props} setLoginStatus={setLoginStatus} setUser={setUser} loggedInStatus={loginStatus}/>} />
                <Route path="norgmar" element={<GamePage {...props} loggedInStatus={loginStatus}/>} />
                <Route
                    path="characters"
                    element={
                        <Characters
                            klany={klans}
                            // saveStats={this.saveStats}
                            statystykiSave={setStatystyki}
                            postac={postac}
                            loading={loading}
                            profesja={profesja}
                            statystyki={statystyki}
                        // aktstat={this.state.staty}
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