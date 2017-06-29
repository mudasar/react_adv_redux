const courseReducerInitialState = [];
export const courseReducer = (state = courseReducerInitialState, action) => {
    switch (action.type) {
        case `CREATER_COURSE`:
            return [...state, Object.assign({}, action.course)];
        // case ACTION_TYPE_2:
        //     return state
        default:
            return state
    }
}