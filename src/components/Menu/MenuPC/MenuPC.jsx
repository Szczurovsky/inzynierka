import react from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";


const Main = styled.div`
    position:fixed;
    margin-left:10px;
    height:300px;
    width:200px;
    top:20vh;
    left:0px;

    border:1px solid black;
    display:flex;
    flex-direction:column;
    
`
const Button = styled(Link)`
    width:100%;
    height:20%;
    text-decoration:none;
  background: rgb(10,33,149);
background: radial-gradient(circle, rgba(10,33,149,0.5466561624649859) 0%, rgba(28,4,9,0.16290266106442575) 100%);
    color:white;
    display:flex;align-items:center;
    justify-content:center;
    border-bottom:1px solid black;
        border-top:1px solid black;

`
export const MenuPC = props => {
    return (
        <Main>
            <Button to="home">Strona Główna</Button>
            <Button to="norgmar">Zagraj!</Button>
            <Button to="story-line">Fabuła</Button>
            <Button to="characters">Postacie</Button>
            <Button to="ekipa">Ekipa</Button>
           
        </Main>
    )

}