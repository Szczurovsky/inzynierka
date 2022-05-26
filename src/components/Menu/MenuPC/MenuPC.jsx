import react from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import Logo from "./NorgmarLogo.png"
import logo from "./norgmar.png"

const Main = styled.div`
  width:20%;
    display:flex;
    flex-direction:column;
    
`
const Wrapper = styled.div`
position:fixed;
height:100vh;
width:20%;

`
const WrapButtons = styled.div`

`
const Button = styled(Link)`
    width:100%;
    height:20%;
    text-decoration:none;
    padding:20px 10px;
    margin:30px 0;
    background: radial-gradient(circle, rgba(0,0,0,0.5466561624649859) 30%, rgba(255,255,255,0.16290266106442575) 200%);
    color:white;
    display:flex;align-items:center;
    justify-content:center;
    border-bottom:1px solid black;
    border-top:1px solid black;
      &:hover{
            transition:0.5s;
    /*      background: radial-gradient(circle, rgba(0,0,0,0.5466561624649859) 30%, rgba(255,255,255,0.16290266106442575) 200%); */
            color:red;
  }
`
const WrapLogos = styled.div`
    display:flex;
    
    /* align-self: center; */
    /* justify-content: center; */
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