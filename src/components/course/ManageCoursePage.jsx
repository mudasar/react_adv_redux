import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            authors:  this.props.authors
        };
    }

    render() {
        const { authors } = this.props;
        return (<CourseForm
            course={this.state.course}
            allAuthors={authors}
            errors={this.state.errors}
            />)
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
    let course = {
        id: '',
        watchHref: '',
        authorid: '',
        length: '',
        category: ''
    };
    
    const authorFormattedForDropdown = state.authors.map( author=> {
        return { value: author.id, text: author.firstName + ' ' + author.lastName};
    });
    
    return {course,authors: authorFormattedForDropdown};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
