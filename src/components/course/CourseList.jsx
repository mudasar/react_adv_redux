import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as actions from '../../actions/courseActions';
import CourseListRow from './CourseListRow';

const CourseList = ({courses, deleteCourse}) => {
    return(
       
        <table className="table "> 
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
            </thead>
            <tbody>
                {
                    
                    courses.map(course => {
                    return <CourseListRow key={course.id} course={course} />
                })}
            </tbody>
        </table>
    )
};

CourseList.propTypes = {
    courses: PropTypes.array.isRequired,
    deleteCourse: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        courses: state.courses
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteCourse: (id) => {
            dispatch(actions.deleteCourse(id));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
