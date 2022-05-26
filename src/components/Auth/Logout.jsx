import react from "react"
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';
const Wrapper = styled.form`
display:flex;
align-self:center;
justify-content:center;
flex-direction:column;
max-width:40%;
`
const Button = styled.button`
    background-color:rgba(255,255,255,0.3);
    border:1px solid red;
    letter-spacing:2px;
    margin:10px 0px;
    color:white;
    padding:15px 5px;
     &:hover{
    transition:0.5s;
    background-color:rgba(255,255,255,0.1);

    }
`

export const Logout = (props) => {
    const navigate = useNavigate();
    const destroySession = (e) => {
        e.preventDefault();
        window.sessionStorage.removeItem("user");
        window.sessionStorage.removeItem("zalogowany");
        navigate("/home");
        console.log("logout dziala")
    }
    return (
        <Wrapper>
            <Button onClick={destroySession}>Wyloguj</Button>
        </Wrapper>
    )
}