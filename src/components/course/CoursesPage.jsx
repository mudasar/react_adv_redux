import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

import CourseList from './CourseList';

class CoursesPage extends Component {

    constructor(props, context){
        super(props, context);
        
    }

    render () {
        return (
            <div>
                <h1>Courses</h1>
                <CourseList />
            </div>
        )
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        courses: state.courses
    }
}



export default connect(mapStateToProps)(CoursesPage);