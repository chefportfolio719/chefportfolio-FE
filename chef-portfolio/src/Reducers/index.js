import {
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER_BEGIN,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_ERROR,
    GET_ALL_RECIPES_BEGIN,
    GET_ALL_RECIPES_SUCCESS,
    GET_ALL_RECIPES_FAIL,
    FETCHING,
    GET_CHEF,
    ERROR,

} from '../Actions';


// Initial state for store
const initialState = {
    chefs: [],
    chef_id: null,
    isSigningUp: false,
    isLoggingIn: false,
    error: null,
    fetchingChefs: false, 
    getALL: false, 
    deletingRecipe: false,
    recipes: [],



}


// rootreducer for logging in / signin up chefs
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
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
            case GET_ALL_RECIPES_BEGIN:
                    return {
                        ...state,
                        isLoggedIn: false,
                        isRegistered: false
                    }
                case GET_ALL_RECIPES_SUCCESS:
                    return {
                        ...state,
                        getALL: true,
                        recipes: action.payload
    
                    }
                case GET_ALL_RECIPES_FAIL:
                    return {
                        ...state,
                        error: action.payload
                    }

        case FETCHING:
            return Object.assign({}, state, { fetchingChefs: true })
        case GET_CHEF:
            return Object.assign({}, state, { fetchingChefs: false, error: '', chefs: action.chefs })
        case ERROR:
            return Object.assign({}, state, { fetchingChefs: false, error: action.error })

        default:
            return state;
    }
}