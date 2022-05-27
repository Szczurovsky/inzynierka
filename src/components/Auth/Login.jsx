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
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loginErrors: ""
        }
    }
    handleSubmit = (event) => {
        axios.post("https://inzynierkatest.herokuapp.com/sessions", {
            user: {
                email: this.state.email,
                password: this.state.password
                
            }
        },
            {withCredentials: true}
        )
            .then(response => {
                if (response.data.logged_in === true) {
                    console.log("to jest z login.jsx",response)
                    this.props.handleSuccessfulAuth(response.data)
                    window.sessionStorage.setItem("zalogowany", true)
                    window.sessionStorage.setItem("user",response.data.user.id)
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
                    <Button type="submit">Zaloguj</Button>
                </Form>
                {/* <Popup trigger={this.props.showPopupLogin} setTrigger={this.props.setShowPopupLogin}>
                    <p>{this.props.komunikat}</p>
                </Popup> */}
            </>
        )
    }
}