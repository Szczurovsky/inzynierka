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
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <button type="submit">Zaloguj</button>
                </Form>
                {/* <Popup trigger={this.props.showPopupLogin} setTrigger={this.props.setShowPopupLogin}>
                    <p>{this.props.komunikat}</p>
                </Popup> */}
            </>
        )
    }
}