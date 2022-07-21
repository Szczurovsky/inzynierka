import React from 'react';
import styled from "styled-components"
import { useState } from "react";
const CardComponent = styled.div`
    overflow:hidden;
    background-color: rgba(0,0,0,0.2);
    width:50%;
    height:100px;
    display:flex;
    align-items: center;
    justify-content: center;
`

const HoverCard = styled.div`
    position:fixed;
    top:20%;
    left:25%;
    width:200px;
    height:20%;
    text-decoration:none;
    padding:20px 10px;
    margin:15px 0;
    background-color: rgba(0,0,0,0.2);
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
`   
export const Card = (props) => {
    const [isHovering, setVisibleHovering] = useState(false);

    const handleMouseOver = () => {
        setVisibleHovering(true);
    }
    const handleMouseOut = () => {
        setVisibleHovering(false);
    }

    return (
    
            <CardComponent id="titleinComponent" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {props.valuesOfAttack.nazwa}
            {
                isHovering &&
                (
                    <HoverCard id="opis">{props.valuesOfAttack.opis}</HoverCard>
                )
            }
            </CardComponent>
           

    )
}