import React from 'react';
import axios from 'axios';
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
        axios.post("https://inzynierkatest.herokuapp.com/api/v3/sessions", {
            user: {
                email: this.state.email,
                password: this.state.password
          
            }
        },
            {withCredentials: true}
        )
            .then(response => {
                if (response.data.logged_in === true) {
                    console.log(response)
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
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}