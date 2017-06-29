import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends Component {

    constructor(props, context){
        super(props);
        this.state = { course: {title: null}};
        this.onTitleChagne  = this.onTitleChagne.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChagne(e) {
        const course = this.state.course;
        course.title = e.target.value;
        console.log(course);
        this.setState({course: course});
    }

    onClickSave(e){
        e.preventDefault();
        this.props.handleCourseAdd({title: this.state.course.title});
        alert(`Saving ${this.state.course.title}`);
    }

    render () {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChagne} />
                <input type="submit" value="Save" onClick={this.onClickSave} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        courses: state.courses
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleCourseAdd: (course) => {
            dispatch(courseActions.createCourse(course));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);