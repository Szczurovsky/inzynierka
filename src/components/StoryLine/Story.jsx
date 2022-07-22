import React,{useState,useEffect} from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import axios from "axios";
import {Card} from "../ReComponents/Card"

const Form = styled.form`
display:flex;
align-self:center;
justify-content:center;
flex-direction:column;
max-width:40%;
`
const Input = styled.input`
    background-color:transparent;
    border:1px solid white;
    margin:10px 0px;
    color:white;
    padding:15px 5px;
    letter-spacing: 1px;
    background-color: rgba(0, 0, 0,0.5);

    &:focus{
    background-color:white;
    color:black
    }
    &:first-child{
        margin-top:20px;
    }
    &:nth-child(2){
        margin-bottom:20px;
    }
    ::placeholder{
        color:white;
    letter-spacing: 2px;


    }
  
`
const Button = styled.button`
    background-color:rgba(0,0,0,0.3);
    border:1px solid red;
    letter-spacing: 2px;

    margin:10px 0px;
    color:white;
    padding:15px 5px;
     &:hover{
    background-color:rgba(255,255,255,0.1);

    }
`
const StyledCard = styled.div`
   
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    align-items:center;
    justify-content: center;
    height:400px;
`
const SetNull = () => {
    return undefined;
}

export const Story = () => {
    
    const [id, setId] = useState(0);
    const [prevId, setPrevId] = useState(0);
    const [nextId, setNextId] = useState(0);
    const [npcText, setNpcText] = useState("");
    const [playerText, setPlayerText] = useState([{
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
    }])
    const [story, setStory] = useState([{
        id: id,
        prevId: prevId,
        nextId: nextId,
        npcText: npcText,
        playerText: playerText,
    }]);
    const [newStory, setNewStory] = useState([{
        id: 0,
        prevId: 0,
        nextId: 0,
        npcText: "npcText",
        playerText: [{
            "answer1": "",
            "answer2": "",
            "answer3": "",
            "answer4": "",
        }]
    }]);

    const updatePostRequest = (story) => {
        fetch("https://inzynierkatest.herokuapp.com/fabulas", {
            method: "POST",
            body: JSON.stringify(story),
            headers: { 'Content-Type':"application/json"}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newStory)
        updatePostRequest(newStory);
    }

    useEffect(() => {
        axios.get("https://inzynierkatest.herokuapp.com/fabulas")
            .then((response) => { setStory(response.data) })
    }, []);
        return (
        <>
                <StyledCard>
                    
                    {story.map(story => (
                        <Card
                            id="karta" key={story.id}
                            story={story}>
                            {story.playerText}
                        </Card>
                        
                    ))
                    }
                </StyledCard>
                
                    <Form onSubmit={handleSubmit}>
                        <Input
                            type="id"
                            name="id"
                            placeholder="ID"
                            value={newStory.Id}
                            onChange={(e) => setNewStory({ ...newStory, id: e.target.value })}
                            required
                        />
                        <Input
                            type="prevId"
                            name="prevId"
                            placeholder="Id poprzedniej storki"
                            value={newStory.prevId}
                            onChange={(e) => setNewStory({ ...newStory, prevId: e.target.value })}
                            required
                        />
                        <Input
                            type="nextId"
                            name="nextId"
                            placeholder="Id poprzedniej storki"
                            value={newStory.nextId}
                            onChange={(e) => setNewStory({...newStory, nextId: e.target.value})}
                            required
                        />
                        <Input
                            type="npcText"
                            name="npcText"
                            placeholder="Tekst który wygłosi NPC"
                            value={newStory.npcText}
                            onChange={(e) => setNewStory({ ...newStory, npcText: e.target.value })}
                        />
                    <Button type="submit">Dodaj wątek</Button>
                    </Form>
        </>
    )
}
