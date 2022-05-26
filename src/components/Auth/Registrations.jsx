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
                    <input
                        type="password_confirmation"
                        name="password_confirmation"
                        placeholder="Password confirmation"
                        value={this.state.password_confirmation}
                        onChange={this.handleChange}
                        required
                    />
                    <button type="submit">Zarejestruj!</button>
                </Form>

                {/* <Popup trigger={this.props.showPopupRegistration} setTrigger={this.props.setShowPopupRegistration}>
                    <p>{this.props.komunikat}</p>
                </Popup> */}
            </>
        )
    }
}