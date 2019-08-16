import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        };
    }
    
    handleInputChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        fetch('http://localhost:3000/auth/signup', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .then(res => {
                sessionStorage.setItem("sessionId", res.sessionId);
                // this.props.history.push('/');
            })
            .catch(err => {
                console.error(err);
                alert('Error Signing Up please try again');
            });
    };

    render() {
        return (
            <div className="page-login">
                <div className="title">
                    <a href="https://www.tanda.co"><h1>Adnat</h1></a>                    
                </div>
                <div className="ui centered grid container">
                    <div className="nine wide column">
                        <div className="ui icon yellow message">
                            <div className="content">
                                <div className="header">
                                    Sign Up
                                </div>
                            </div>
                        </div>
                        <div className="ui fluid card">
                            <div className="content">
                                <form className="ui form" onSubmit={this.handleSubmit}>
                                    <div className="field">
                                        <label>Name</label>
                                        <input type="text"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.handleInputChange}
                                            required />
                                    </div>
                                    <div className="field">
                                        <label>Email</label>
                                        <input type="email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.handleInputChange}
                                            required />
                                    </div>
                                    <div className="field">
                                        <label>Password</label>
                                        <input type="password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.handleInputChange}
                                            required />
                                    </div>
                                    <div className="field">
                                        <label>Confirm Password</label>
                                        <input type="password"
                                            name="passwordConfirmation"
                                            value={this.state.passwordConfirmation}
                                            onChange={this.handleInputChange}
                                            required />
                                    </div>
                                    <input className="ui primary button" type="submit" value="Sign up" />
                                </form>
                                Already have an Account? 
                                <Link to='/login'>Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
