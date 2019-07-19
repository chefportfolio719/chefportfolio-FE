import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../Actions/index';
import { 
    RegisterForm, 
    RegisterInput, 
    RegisterDiv, 
    RegisterButton, 
    Registerh3, 
    RegisterP,
    LinkDiv
} from './Styles'; // Styled components


class Login extends Component {
    state = {
            username: '',
            password: '',
    }

    handleChange = e => {
        this.setState({
                ...this.state,
                [e.target.name]: e.target.value
        })
    }

    loginUser = () => {
        this.props.loginUser(this.state)
    }

    render() {
        return (
            <>
            <RegisterDiv>
                <Registerh3>Chef Portfolio</Registerh3>
                <RegisterP>Please Log in</RegisterP>
                <RegisterForm>
                    <RegisterInput
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />

                    <RegisterInput
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    {/* This should login the user */}
                    <RegisterButton 
                    type='submit' 
                    onClick={e => { 
                    e.preventDefault()
                    this.loginUser(this.state)}}>
                    Login</RegisterButton>
                    
                </RegisterForm>
            </RegisterDiv>
            <LinkDiv>
                <Link to='/register' 
                style={{ textDecoration: 'none', 
                color: '#444444' }}>
                Need to Register?
                </Link> {/* takes you to SignUp page */}
            </LinkDiv>
            </>
        )
    }
    
}

export default connect(null, {loginUser})(Login);