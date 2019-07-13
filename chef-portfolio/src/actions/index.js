import axios from 'axios';

export const GET_ALL_RECIPES_START = 'GET_ALL_RECIPES_START';
export const GET_ALL_RECIPES_SUCCESS = 'GET_ALL_RECIPES_SUCCESS';
export const GET_ALL_RECIPES_FAILURE = 'GET_ALL_RECIPES_FAILURE';

export const getAllRecipes = () => dispatch => {
  dispatch({ type: GET_ALL_RECIPES_START });
  axios.get('http://localhost:5000/recipes')
    .then(res => {
      console.log(res.data);
      dispatch({ type: GET_ALL_RECIPES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_ALL_RECIPES_FAILURE, payload: 'Error getting recipes form server' });
    })
};