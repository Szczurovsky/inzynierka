import React from 'react';
import axios from 'axios';

import styled from "styled-components"
import {Popup} from "../Popup/Popup.jsx"
const Form = styled.form`
    display:flex;
    align-self:center;
    justify-content:center;
    flex-direction:column;
    max-width:40%;
`
const Input = styled.input`
    background-color: rgba(0, 0, 0,0.5);
    border:1px solid white;
    margin:10px 0px;
    color:white;
    padding:15px 5px;
    letter-spacing: 1px;
    /* font-size:0.9rem; */
    &:focus{
    background-color:white;
    color:black
    }
    &:first-child{
        margin-top:20px;
    }
    &:nth-child(3){
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
    transition:0.5s;
    background-color:rgba(255,255,255,0.1);

    }
`
export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
        }
    }
    handleSubmit = (event) => {
        axios.post("https://inzynierkatest.herokuapp.com/registrations", {
            user: {
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation
            }
        },
            {withCredentials: true}
        )
            .then(response => {
                if (response.data.status === "created") {
                    console.log("rejestracja zakonczona",response)
                    this.props.handleSuccessfulAuth(response.data)
        }
        })
        event.preventDefault();
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Hasło"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <Input
                        type="password_confirmation"
                        name="password_confirmation"
                        placeholder="Potwierdź hasło"
                        value={this.state.password_confirmation}
                        onChange={this.handleChange}
                        required
                    />
                    <Button type="submit">Zarejestruj!</Button>
                </Form>

                {/* <Popup trigger={this.props.showPopupRegistration} setTrigger={this.props.setShowPopupRegistration}>
                    <p>{this.props.komunikat}</p>
                </Popup> */}
            </>
        )
    }
}