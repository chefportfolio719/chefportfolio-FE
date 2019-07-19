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





// logic for signing up a new user
export const registerUser = user => dispatch => {
    dispatch({ type: REGISTER_USER_BEGIN });
    axios
    .post('https://chefportfoliofinal.herokuapp.com/register/', user)
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


// logic for logging in the user
export const loginUser = user => dispatch => {
    console.log()
    dispatch({
        type: LOGIN_USER_BEGIN
    })
    axios
    .post('https://chefportfoliofinal.herokuapp.com/login/', user)
    .then(res => { 
        console.log(res.data)
        sessionStorage.setItem('jwt', res.data.token);
        sessionStorage.setItem('isLoggedIn', true)
        localStorage.setItem('username', user.username);
        
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

// logic for logging out user
export const logoutUser = user => dispatch => {
    dispatch({
        type: LOGOUT_USER_BEGIN
    })
    axios
        .get('https://chefportfoliofinal.herokuapp.com/users')
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