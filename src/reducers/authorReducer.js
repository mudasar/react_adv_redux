import * as types from '../actions/actionTypes';
import initialState from './initialState';

const authorReducerInitialState = initialState.authors;
export const authorReducer = (state = authorReducerInitialState, action) => {
    switch (action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        default:
            return state
    }
}