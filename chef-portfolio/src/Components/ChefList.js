import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getChef } from '../Actions/index'
import Chef from './Chef.js';


class ChefList extends Component {
    componentDidMount(){
        this.props.getChef();
    }

    render() {
    return (
        <div>
            {this.props.fetchingChefs ? <h1>Loading Chef...</h1> : null}
            {this.props.error !== '' ? <h1>{this.props.error}</h1> : null}
            {this.props.chefs.map(chef => <Chef chef={chef} key={Math.random()}/>)}
        </div>
    );
    }
}

const mapStateToProps = state => {
    return {
        chefs: state.chefs,
        error: state.error,
        fetchingChefs: state.fetchingChefs
    }
}

export default connect(mapStateToProps, { getChef })(ChefList);