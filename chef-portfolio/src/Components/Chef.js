import React from 'react';
import { connect } from 'react-redux';
import { deleteChef } from '../Actions/index'
import ChefList from './ChefList'

const Chef = props => {
    const deleteClickHandler = (e) => {
        e.preventDefault();
        props.deleteChef(props.chef.id);
    }

    return (
        <div>
            <p>{props.chef} </p>
            <h3><ChefList/></h3>
            <button onClick={deleteClickHandler}>Delete Chef!</button>
        </div>
    )
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { deleteChef })(Chef);