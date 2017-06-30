import * as types from '../actions/actionTypes';
import initialState from './initialState';

const courseReducerInitialState = initialState.courses;
export const courseReducer = (state = courseReducerInitialState, action) => {
    switch (action.type) {
        case types.CREATE_COURSE_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.course)
            ];
        case types.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter((course) => {
                    return course.id !== action.course.id
                }),
                Object.assign({}, action.course)
            ];
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        default:
            return state
    }
}