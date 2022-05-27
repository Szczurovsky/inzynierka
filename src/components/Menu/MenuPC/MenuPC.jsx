import react from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import Logo from "./NorgmarLogo.png"
import logo from "./norgmar.png"

const Main = styled.div`
    width:20%;
    flex-direction:column;
`
const Wrapper = styled.div`
position:fixed;
height:100vh;
width:20%;

`
const WrapButtons = styled.div`
 width:100%;
 display:flex;
 align-items:center;
 flex-direction:column;

`
const Button = styled(Link)`
    width:200px;
    height:20%;
    text-decoration:none;
    padding:20px 10px;
    margin:15px 0;
    background-color: rgba(0,0,0,0.2);
    color:white;
    display:flex;align-items:center;
    justify-content:center;
    border-bottom:1px solid black;
    border-top:1px solid black;
      &:hover{
            transition:0.5s;
            color:red;
            background-color:rgba(255,255,255,0.2);
  }
`
const WrapLogos = styled.div`
    display:flex;
    flex-direction: column;
`
const Image = styled.img`
    width:160px;
    height:40px;
        display:flex;
    
    align-self: center;
    width: ${props => props.inputWidth || "160px"};
    height: ${props => props.inputHeight || "40px"};
`
export const MenuPC = props => {
    return (
        <Main>
            <Wrapper>
            <WrapLogos>
                <Image src={Logo} inputHeight="200px" inputWidth="200px" />
                <Image src={logo} />        
            </WrapLogos>
            <WrapButtons>
                <Button to="home">Strona Główna</Button>
                <Button to="game">Zagraj!</Button>
                <Button to="story-line">Fabuła</Button>
                <Button to="characters">Postacie</Button>
                <Button to="ekipa">Ekipa</Button>
                <Button to="walka">Walka</Button>
                </WrapButtons>
            </Wrapper>
        </Main>
    )

}