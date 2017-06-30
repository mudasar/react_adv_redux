import * as types from './actionTypes';
import authorApi from '../api/mockAuthoApi';

export const loadAutorsSuccess = (authors) => {
    return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export const loadAuthors = () =>
    (dispatch, getState) => {
        return authorApi.getAllAuthors().then( authors => {
            dispatch(loadAutorsSuccess(authors));
        }).catch(error => {throw error});
    }

