import React from 'react';
import axios from 'axios';
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
        axios.post("http://inzynierkatest.herokuapp.com/api/v3/registrations", {
            user: {
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation
            }
        },
            {withCredentials: true}
        )
        event.preventDefault();
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}