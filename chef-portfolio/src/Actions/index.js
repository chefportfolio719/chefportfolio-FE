import axios from 'axios';

export const REGISTER_USER_BEGIN = 'REGISTER_USER_BEGIN'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE'
export const LOGIN_USER_BEGIN = 'LOGIN_USER_BEGIN'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'
export const LOGOUT_USER_BEGIN = 'LOGOUT_USER_BEGIN'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
export const LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR'
export const GET_CHEF = 'GET_CHEF'
export const FETCHING = 'FETCHING'
export const ERROR = 'ERROR'
export const GET_ALL_RECIPES_BEGIN = 'GET_ALL_RECIPES_BEGIN'
export const GET_ALL_RECIPES_SUCCESS = 'GET_ALL_RECIPES_SUCCESS'
export const GET_ALL_RECIPES_FAIL = 'GET_ALL_RECIPES_FAIL'
export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS'
export const DELETE_RECIPE = 'DELETE_RECIPE'
export const DELETE_RECIPE_ERROR = 'DELETE_RECIPE_ERROR'





// logic for registering new chef 
export const registerUser = chef => dispatch => {
    dispatch({ type: REGISTER_USER_BEGIN });
    axios
    .post('https://chefportfoliofinal.herokuapp.com/chefs/register', chef)
    .then(res => {
        sessionStorage.setItem('isSignedUp', true)
         window.location.reload();
         console.log(res.data)
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: res.data
        })
    }).catch((err) => {
        console.log('test', err);
        dispatch({
        type: REGISTER_USER_FAILURE,
        payload: err
    })})
}


// logic for logging in chef
export const loginUser = chef => dispatch => {
    console.log()
    dispatch({
        type: LOGIN_USER_BEGIN
    })
    axios
    .post('https://chefportfoliofinal.herokuapp.com/chefs/login', chef)
    .then(res => { 
        console.log(res.data)
        sessionStorage.setItem('jwt', res.data.token);
        sessionStorage.setItem('isLoggedIn', true)
        localStorage.setItem('firstname', chef.firstname);
        
        window.location.reload();
        dispatch({
            type: LOGIN_USER_BEGIN,
            payload: res.data
        })
    })
    .catch(err => dispatch({
        type: LOGIN_USER_FAILURE,
        payload: err
    }))
}

// logic for logging out chef 
export const logoutUser = user => dispatch => {
    dispatch({
        type: LOGOUT_USER_BEGIN
    })
    axios
        .get('https://chefportfoliofinal.herokuapp.com/chefs')
        .then(res => {
            sessionStorage.removeItem('isLoggedIn', false)
            sessionStorage.removeItem('jwt')
            localStorage.removeItem('userId')
            localStorage.removeItem('username')

            window.location.reload();
            dispatch({
                type: LOGOUT_USER_SUCCESS,
                payload: res.data
            })})
            .catch(err => dispatch({
                type: LOGOUT_USER_ERROR,
                payload: err
            }));
}


// Logid for getting one chef 

export const getChef = (_id) => {
    return (dispatch) => {
      dispatch({type: FETCHING});
      axios
        .get(`https://chefportfoliofinal.herokuapp.com/chefs`)
        .then(response => {
          dispatch({type: GET_CHEF, chefs: response.data})
        })
        .catch(ERROR => {
          dispatch({type: ERROR, error: 'Sorry having some issues loading Chef, try again!'})
        });
    }
  }

  export const deleteChef = (_id) => {
    return(dispatch) => {
      dispatch({type: FETCHING});
      axios
        .delete(` https://chefportfoliopt4.herokuapp.com/chefs/${_id}`)
        .then(response => {
          dispatch({type: GET_CHEF, chefs: response.data})
        })
        .catch(err => {
          dispatch({type: ERROR, error: `Sorry! We could not delete the Chef!`})
        });  
    }
  }

   // Logic for getting all recipes

 export const getAll = () => dispatch => {
    dispatch({type: GET_ALL_RECIPES_BEGIN});
    axios
    .get('https://chefportfoliofinal.herokuapp.com/recipes')
    .then(res => {
       dispatch({type: GET_ALL_RECIPES_SUCCESS,
                 payload: res.data})
    })
    .catch(err => {
        dispatch({tpye: GET_ALL_RECIPES_FAIL, error: "Sorry having trouble loading recipes"})
    })

 }

 // Logic for deleting recipe

export const deleteRecipe = (id) => {
    return(dispatch) => {
        dispatch({type: DELETE_RECIPE});
        axios
        .delete(`https://chefportfoliofinal.herokuapp.com/chefs/:_id`)
        .then(res => {
            dispatch({type: DELETE_RECIPE_SUCCESS})
        })
        .catch(err => {
            dispatch({type: DELETE_RECIPE_ERROR , error: "Sorry! Could not delete recipe.."})
        });
        
    }

}