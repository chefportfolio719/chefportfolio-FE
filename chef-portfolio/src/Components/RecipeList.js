import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getAll} from '../Actions/index';
import Recipe from '../Components/Recipe';


class RecipeList extends Component {
    componentDidMount() {
        this.props.getAll();
    }
    state = {
        recipe: {
            id: null,
            mealtype: '',
            ingredients: '',
            instructions: '',
            picture: '',
            name: '',
            description: '',
            chef: {
                id: null,
                location: ''
            }
            
        },
        
    };
    render() {
        console.log(this.props)
    return (
        <div>
        {this.props.getALL ? <h1>Loading Recipes...</h1> : null}
        {this.props.error !== '' ? <h1>{this.props.error}</h1> : null}
        {this.props.recipes.map(recipe => <Recipe recipe={recipe} key={recipe.id}/>)}


        </div>
    );

    }
}
const mapStateToProps = state => {
    console.log(state)
    return {
        getAll: state.getAll,
        error: state.error,
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, {getAll})(RecipeList);