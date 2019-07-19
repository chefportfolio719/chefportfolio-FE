import React, { Component } from 'react';
import '../../App.css';

class ChefCreatePost extends Component {
  state = {
    recipeTitle: '',
    mealType: '',
    ingredients: '',
    instructions: ''
  };

  // Handle Change
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  // Handle Submit
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form
          onSubmit={this.handleSubmit}
          className="form-signin py-5 bg-dark text-white text-center rounded-lg"
        >
          {/* <img
            className="brand"
            style={{ width: '100px' }}
            src={brand}
            alt="chef portfolio brand logo"
          /> */}
          <h1 className="h3 my-5 font-weight-normal">
            Add your recipe
          </h1>
          <label htmlFor="recipeTitle" className="sr-only">
            Recipe Title
          </label>
          <input
            type="text"
            id="recipeTitle"
            className="form-control"
            placeholder="Recipe Title"
            required
            autoFocus
            onChange={this.handleChange}
          />

          <label htmlFor="mealType" className="sr-only">
            Meal Type
          </label>
          <textarea
            className="form-control"
            id="mealType"
            placeholder="Meal Type"
            onChange={this.handleChange}
          />

          <label htmlFor="ingredients" className="sr-only">
            Ingredients
          </label>
          <textarea
            className="form-control"
            id="ingredients"
            placeholder="Ingredients"
            onChange={this.handleChange}
          />

          <label htmlFor="instructions" className="sr-only">
            Instructions
          </label>
          <textarea
            className="form-control"
            id="instructions"
            placeholder="Instructions"
            onChange={this.handleChange}
          />
          {/* <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" />
              &nbsp; Remember me
            </label>
          </div> */}
          <button
            className="btn btn-lg py-4 mt-4 border border-white text-white btn-block"
            type="submit"
          >
            Add it!
          </button>
        </form>
      </div>
    );
  }
}

export default ChefCreatePost;
