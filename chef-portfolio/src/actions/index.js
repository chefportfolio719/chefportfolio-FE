import axios from 'axios';

export const GET_ALL_RECIPES_START = 'GET_ALL_RECIPES_START';
export const GET_ALL_RECIPES_SUCCESS = 'GET_ALL_RECIPES_SUCCESS';
export const GET_ALL_RECIPES_FAILURE = 'GET_ALL_RECIPES_FAILURE';

export const getAllRecipes = () => dispatch => {
  dispatch({ type: GET_ALL_RECIPES_START });
  axios.get('https://chefportfoliopt4.herokuapp.com/recipes')
    .then(res => {
      // Check Routes
      console.log(res);
      dispatch({ type: GET_ALL_RECIPES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_RECIPES_FAILURE, payload: 'Error getting recipes form server' });
    })
};