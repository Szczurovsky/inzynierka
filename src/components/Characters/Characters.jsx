import react,{useEffect,useState} from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import { LoadingChar } from "./LoadingChar"
import axios from "axios"
import Dice from "../../utils/dice.js"
import { Card } from "../ReComponents/Card"
const MyButton = styled.button`
    width: ${props => props.inputWidth || "auto"};
    position: ${props => props.position || "static"};
    top:0;
    right:10%;
    height:50px;
    color:white;
    padding:20px;
    border:none;
    background-color: ${props => props.backgroundColor || "rgba(0,0,0,0.2);"};
`
const StyledCard = styled.div`
    position:absolute;
    top:0;
    right:0;
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    align-items:center;
    justify-content: center;
    height:400px;
`

export const Characters = props => {
    const [shouldAbilitiesIsVisible, setVisibleAbilities] = useState(true);
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
                    <MyButton position="absolute" inputWidth="auto" onClick={(e) => { setVisibleAbilities(!shouldAbilitiesIsVisible) }}>Pokaż moje umiejętności</MyButton>
                    <StyledCard>
                    {shouldAbilitiesIsVisible ? "" : (
                        user.umiejetnosci.map(atak => (
                            <Card
                                id="karta" key={atak.id}
                                valuesOfAttack={atak}>
                                {atak.nazwa}
                            </Card>
                        ))
                        )}
                    </StyledCard>
                </>
            )}
            <MyButton onClick={() => setUser({
                ...user,
                nick:"Abraham",
                staty:"test",
                statystyki: { "sila": "15", "zrecznosc": "3", "witalnosc": "5", "siła_woli":"5" },
                umiejetnosci: [{ "id": "1", "nazwa": "bedzie", "opis": "dobrze" }, { "id": "2", "nazwa": "uderzenie wikinga", "opis": "Twoj młot będzie mi służył" }, { "id": "3", "nazwa": "młot thora", "opis": "piekny mlot" }, { "id": "4", "nazwa": "nieziemskie uderzenie", "opis": "wbijasz piesc w ziemie" }]

            })}>Zapisz w state</MyButton>
            <MyButton onClick={() => updatePostRequest(user)}>Wyślij na serwer</MyButton>    
        </>
    )

}


