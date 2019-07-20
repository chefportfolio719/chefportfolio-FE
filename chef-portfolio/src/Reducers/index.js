import {
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER_BEGIN,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_ERROR
  
  } from '../Actions';


// Initial state for store
const initialState = {
    chefs: [],
    userId: null,
    isSigningUp: false,
    isLoggingIn: false,
    error: null,
    
    
    
}


// rootreducer for logging in / signin up chefs
export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_USER_BEGIN:
            return {
                ...state,
                isSigningUp: true
            }
        
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                isSigningUp: false,
                chefs: action.payload
            }

        case REGISTER_USER_FAILURE:
            return {
                ...state,
                isSigningUp: false,
                error: action.payload
            }

        case LOGIN_USER_BEGIN:
            return {
                ...state,
                isLoggingIn: true,
            }

        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                chefs: action.payload
            }

        case LOGIN_USER_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
                error: action.payload
            }

        case LOGOUT_USER_BEGIN:
            return {
                ...state,
                isLoggedIn: true,
                chefs: action.payload
            }

        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                chefs: action.payload
            }

        case LOGOUT_USER_ERROR:
            return {
                ...state,
                isLoggedIn: true,
                error: action.payload
            }

            default:
                return state;
        }
    }