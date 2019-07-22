import React from 'react';

class Filter extends React.Component {
  render() {
    return (
      <div className='filter-wrapper'>
        <p onClick={(event) => this.props.selectFoodType(event)}>All</p>
        <p onClick={(event) => this.props.selectFoodType(event)}>Breakfast</p>
        <p onClick={(event) => this.props.selectFoodType(event)}>Lunch</p>
        <p onClick={(event) => this.props.selectFoodType(event)}>Dinner</p>
        <p onClick={(event) => this.props.selectFoodType(event)}>Dessert</p>
        <p onClick={(event) => this.props.selectFoodType(event)}>Snack</p>
      </div>
    );
  }
};

export default Filter;