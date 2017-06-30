import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


import CourseList from './CourseList';

class CoursesPage extends Component {

    constructor(props, context){
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage(){
        this.props.history.push('/course');
    }

    render () {
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit" value="Add Course" className="btn btn-primary" onClick={this.redirectToAddCoursePage} />
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



export default withRouter(connect(mapStateToProps)(CoursesPage));