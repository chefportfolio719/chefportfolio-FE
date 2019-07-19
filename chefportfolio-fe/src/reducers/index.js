import { GET_ALL_RECIPES_START } from '../actions';
import { GET_ALL_RECIPES_SUCCESS } from '../actions';
import { GET_ALL_RECIPES_FAILURE } from '../actions';

const initialState = {
  recipes: [],
  gettingRecipes: false,
  error: ''
};

export const rootReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_ALL_RECIPES_START:
      return {
        ...state,
        gettingRecipes: true
      };
    case GET_ALL_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        gettingRecipes: false
      };
    case GET_ALL_RECIPES_FAILURE:
      return {
        ...state,
        gettingRecipes: false,
        error: action.payload
      };
    default:
      return state;
  }
};
