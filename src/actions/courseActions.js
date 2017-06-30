import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export const loadedCoursesSuccess = (courses) => {
    return {type: types.LOAD_COURSES_SUCCESS, courses};
};

export const loadCourses = () => {
    return (dispatch, getState) => {
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

export const deleteCourse = (id) =>
    (dispatch, getState) => {
        return courseApi.deleteCourse(id).then(()=>{
            console.log(`course with id ${id} is deleted.`);
        }).catch(error => {throw error;});
    }
