import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall} from './ajaxStatusActions';

export const loadedCoursesSuccess = (courses) => {
    return {type: types.LOAD_COURSES_SUCCESS, courses};
};

export const createCourseSuccess = (course) => {
    return {type: types.CREATE_COURSE_SUCCESS, course};
};

export const updateCourseSuccess = (course) => {
    return {type: types.UPDATE_COURSE_SUCCESS, course};
};

export const loadCourses = () => {
    return (dispatch, getState) => {
        dispatch(beginAjaxCall());
        return courseApi
            .getAllCourses()
            .then(courses => {
                dispatch(loadedCoursesSuccess(courses));
            })
            .catch(error => {
                throw error
            });
    };
};

export const saveCourse = (coruse) => (dispatch, getState) => {
    dispatch(beginAjaxCall());
    return courseApi
        .saveCourse(coruse)
        .then(course => {
            course.id
                ? dispatch(updateCourseSuccess(course))
                : dispatch(createCourseSuccess(course));
        });
};

export const deleteCourse = (id) => (dispatch, getState) => {
    dispatch(beginAjaxCall());
    return courseApi
        .deleteCourse(id)
        .then(() => {
            console.log(`course with id ${id} is deleted.`);
        })
        .catch(error => {
            throw error;
        });
};
