import React from 'react';
import { connect } from 'react-redux';
import { deleteChef } from '../Actions/index'
import ChefList from './ChefList'
import RecipeList from './RecipeList';


const Chef = props => {
    
    const deleteClickHandler = (e) => {
        e.preventDefault();
        props.deleteChef(props.chef_id);
    }

    return (
        <div>
            <p>{props.chef_id}</p>
            <h3><ChefList/></h3>
            <h4><RecipeList/></h4>
            <button onClick={deleteClickHandler}>Delete Chef!</button>
        </div>
    )
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { deleteChef })(Chef);