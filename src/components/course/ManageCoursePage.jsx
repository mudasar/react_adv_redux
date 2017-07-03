import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';

import * as actions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class ManageCoursePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            authors:  this.props.authors,
            saving: false
        };
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    updateCourseState(e){
        const field = e.target.name;
        
        let course = this.state.course;
        
        course[field] = e.target.value;
        return this.setState({course: course});
    }

    componentWillReceiveProps(nextProps){
        if (this.props.course.id !== nextProps.course.id) {
            this.setState({
            course: Object.assign({}, nextProps.course)
        });    
        }
        
    }

    saveCourse(e){
        e.preventDefault();
        this.setState({saving: true});
        this.props.actions.saveCourse(this.state.course).then(() => {
            this.setState({saving: false});
            toastr.success('Course is saved');
            this.props.history.push('/courses');
        }, (error) => {
            toastr.error(error);
        }).catch(error => {
            toastr.error(error);
        });
    }

    render() {
        const { authors } = this.props;
        return (<CourseForm
            course={this.state.course}
            allAuthors={authors}
            errors={this.state.errors}
            onChange={this.updateCourseState}
            onSave={this.saveCourse}
            loading={this.state.saving}
            />)
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

const getCourseById =(courses, id) => {
    const course = courses.filter( course => course.id === id);
    if (course) {
        return course[0];
    }
    return null;
}

const mapStateToProps = (state, ownProps) => {
    
    let courseId = ownProps.match.params.id;
     let course = {
        id: '',
        watchHref: '',
        authorid: '',
        length: '',
        category: ''
    };

    if (courseId && state.courses.length > 0 ) {
        course = getCourseById(state.courses, courseId);
    }
   
    
    const authorFormattedForDropdown = state.authors.map( author=> {
        return { value: author.id, text: author.firstName + ' ' + author.lastName};
    });
    
    return {course,authors: authorFormattedForDropdown};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
         actions: bindActionCreators(actions, dispatch)
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage));
