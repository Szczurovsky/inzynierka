import react from "react";
import styled from "styled-components";

const WrapPage = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    position:fixed;
    flex-direction:column;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background-color:rgba(0,0,255,0.1);
`
const Comunicate = styled.div`
 background-color:rgba(0,0,255,0.2);
 padding:100px;
 color:white;
`
const ButtonPop = styled.button`
    border:1px solid white;
    background-color:rgba(0,0,255,0.2);
    margin-top:50px;
    color:white;
    padding:20px;
    &:hover{
        border:1px solid red;
        background-color:rgba(255,255,255,0.4);
        color:black;
        transition: 1s;
    }
`
export const Popup = (props) => {
    return (
        <>
            {props.trigger ? (
                <WrapPage >
                    <Comunicate>
                        {props.children}
                    
                        <ButtonPop onClick={() => { props.setTrigger(false) }}>Zamknij powiadomienie</ButtonPop>
                    </Comunicate>
                </WrapPage>
            ) : ""}
        </>
    )
}   