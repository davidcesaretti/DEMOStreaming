import {GET_MOVIES, GET_SERIES, ERROR} from '../actions/index'

const initialState = {
    movies: [],
    series: [],
    error: ''
}

export function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_MOVIES: {
            return {
                ...state,
                movies: action.payload
            }
        }
        case GET_SERIES:{
            return {
                ...state,
                series: action.payload
            }
        }
        case ERROR:{
            return {
                error: action.payload
            }
        }
        default: {
            return state
        } 
    }
}