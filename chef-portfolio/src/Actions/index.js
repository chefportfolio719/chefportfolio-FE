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

export const getChef = () => {
    return (dispatch) => {
      dispatch({type: FETCHING});
      axios
        .get(`https://chefportfoliopt4.herokuapp.com/chefs/:_id`)
        .then(response => {
          dispatch({type: GET_CHEF, chefs: response.data})
        })
        .catch(error => {
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