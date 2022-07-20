import react,{useEffect,useState} from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import { LoadingChar } from "./LoadingChar"
import axios from "axios"
import Dice from "../../utils/dice.js"

const MyButton = styled.button`
    width: ${props => props.inputWidth || "70px"};
    height:50px;
    background-color: ${props => props.backgroundColor || "transparent"};
`


export const Characters = props => {
    const [shouldAbilitiesIsVisible, setVisibleAbilities] = useState(false);
    const [user, setUser] = useState({id:false});
    const updatePostRequest = (user) => {
        axios
            .patch(`https://inzynierkatest.herokuapp.com/users/${window.sessionStorage.getItem("user")}/characters/${window.sessionStorage.getItem("user")}`, user, {
                withCredentials: true,
            })
            .then(response => { console.log("udalo ise?", response.data.statystyki) })
    }


    useEffect(() => {
        axios.get(`https://inzynierkatest.herokuapp.com/users/${window.sessionStorage.getItem("user")}/characters`)
            .then((response) => { setUser(response.data) })
   
            
    }, []);
    return (
        <>   
            
            {console.log(user)}
            {console.log(shouldAbilitiesIsVisible)}
            {user.id === false ? "Trwa ładowanie twojej postaci" : (
               
   
                
                <>
                    <p>{Dice(100)}</p>
                    <p>Nick: {user.nick}</p>
                    <p>Statystyki: Siła: {user.statystyki.sila}</p>
                    {/* <p>Siła: {user.statystyki[0].sila}</p> */}
                    {/* <p>Statystyki: {console.log(usera.statystyki[0])}</p> */}
                    {/* <p>Staty: <br/> Siła:{usera.statystyki.sila} Zręczność:{usera.statystyki.zrecznosc}</p> */}
                    {/* {user.map((atak) => {
                    return (
                    <p>{atak.id}</p>

                    )} */}
                    <MyButton inputWidth="auto" onClick={() => { setVisibleAbilities(!shouldAbilitiesIsVisible); console.log(shouldAbilitiesIsVisible); }}>Pokaż moje umiejętności</MyButton>
                    {shouldAbilitiesIsVisible ? "" : (
                        user.umiejetnosci.map(atak => (
                            <div key={atak.nazwa}>
                                <p>{atak.nazwa}</p>
                                <p>{atak.opis}</p>
                            </div>
                        ))
                    )}
                </>
            )}
            <MyButton onClick={() => setUser({
                ...user,
                nick:"Abraham",
                staty:"test",
                statystyki: { "sila": "15", "zrecznosc": "3", "witalnosc": "5", "siła_woli":"5" },
                umiejetnosci: [{"id":"1","nazwa":"bedzie","opis":"dobrze" }]

            })}>Zapisz w state</MyButton>
            <MyButton onClick={() => updatePostRequest(user)}>Wyślij na serwer</MyButton>

            {/* <button onClick={updateUser}></button> */}
        {/* {Object.keys(user).map((item, i) => (
            <p key={i}>a</p>
        ))
        } */}
            {/* {console.log(props.postac)}
                {props.loading ? <LoadingChar/>


                    : <>
                       
                      
                    <button onClick={() => props.statystykiSave({
                        id: 1, imie: "Michał", profesja: "Wojownik tary", klan: {
                            jarl: props.klany.jarl,
                            nastepca: props.klany.nastepca,
                            nazwa: props.klany.nazwa,
                            opis: props.klany.opis,
                            polozenie: props.klany.polozenie,
                            premie: {
                                sila: props.klany.statystyki[0].sila,
                                sila_woli: props.klany.statystyki[0].sila_woli,
                            },
                            stolica: "Nidergheim"
                        },
                    })}>abcdsesfa</button>

                    
                    </>
                } */}
         
    
        </>
    )

}


