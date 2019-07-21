import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addChef } from '../actions/index.js';


class RecipeForm extends Component {
    constructor(){
        super();
        this.state = {
           
        }
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addChef(this.state);
        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }

    render(){
        return(
            <div>
                <h2>Add A Recipe </h2>
            <form onSubmit={this.submitHandler}>
                <input
                    type='text'
                    name='name'
                    value={this.state.name}
                    onChange={this.inputHandler}
                    placeholder='Smurf name'
                />
                <input
                    type='text'
                    name='age'
                    value={this.state.age}
                    onChange={this.inputHandler}
                    placeholder='Smurf age'
                />
                <input
                    type='text'
                    name='height'
                    value={this.state.height}
                    onChange={this.inputHandler}
                    placeholder='Smurf height'
                />
                <button type='submit'>Add Smurf!</button>
            </form>

            </div>
        )
    }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { addChef })(RecipeForm);