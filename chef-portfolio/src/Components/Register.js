import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../Actions/index';
import { 
    RegisterForm, 
    RegisterInput, 
    RegisterDiv, 
    RegisterButton, 
    Registerh3, 
    RegisterP,
    LinkDiv
} from './Styles'; // Styled components
import Moment from './Moment';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            location: '',
            password: '',
        }
    }

    handleChange = e => {
        this.setState({
                ...this.state,
                [e.target.name]: e.target.value
        })
    }

    toggleIsSigningUp = () => {
        this.setState({isSigningUp: !this.state.isSigningUp})
    }

    registerUser = () => {
        this.props.registerUser(this.state)
    }


    render() {
        {console.log(this.props)}
        return(
            <>
            <RegisterDiv>
                <Moment/>
                <Registerh3>Chef Portfolio</Registerh3>
                <RegisterP>Register to view chef recipes</RegisterP>
                <RegisterForm>
                    <RegisterInput
                        type='text'
                        name='firstname'
                        placeholder='firstname'
                        value={this.state.firstname}
                        onChange={this.handleChange}
                    />
                       <RegisterInput
                        type='text'
                        name='lastname'
                        placeholder='lastname'
                        value={this.state.lastname}
                        onChange={this.handleChange}
                    />
                         <RegisterInput
                        type='text'
                        name='email'
                        placeholder='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                         <RegisterInput
                        type='text'
                        name='location'
                        placeholder='location'
                        value={this.state.location}
                        onChange={this.handleChange}
                    />

                    <RegisterInput
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    {/* this should create a new account */}
                    <RegisterButton 
                    type='submit'
                    onClick={e => {
                    e.preventDefault() 
                    this.props.registerUser(this.state)}}>
                    Register</RegisterButton>       
                </RegisterForm>
            </RegisterDiv>
            <LinkDiv>
                <Link to='/login' 
                style={{ textDecoration: 'none',
                color: '#444444' }}>
                Already have an account? Login
                </Link> {/* takes you to Login page */} 
            </LinkDiv>
            </>
        )
    }
}

const mapStateToProps = state => {
    return{
        users: [],
        isSigningUp: state.isSigningUp
    } 
}

export default connect(mapStateToProps, {registerUser})(Register);