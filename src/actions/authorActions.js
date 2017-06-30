import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusActions';

export const loadAutorsSuccess = (authors) => {
    return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export const loadAuthors = () => (dispatch, getState) => {
    dispatch(beginAjaxCall());
    return authorApi
        .getAllAuthors()
        .then(authors => {
            dispatch(loadAutorsSuccess(authors));
        })
        .catch(error => {
            throw error
        });
}
