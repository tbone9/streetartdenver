import React, { Component } from 'react';
import './styles.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleLogin = (e) => {
        e.preventDefault();
        alert('Looks good!');
        this.props.history.push('/addart');
    }

    isLoginInvalid() {
        return !(this.state.email && this.state.password);
    }

    render() {
        return (
            <div className='formContainer'>
                <form onSubmit={this.handleLogin}>
                    <input required type='email' placeholder='Email' name='email' onChange={this.handleChange} />
                    <input required type='password' placeholder='Password' name='password' onChange={this.handleChange} />
                    <button disabled={this.isLoginInvalid()} type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;