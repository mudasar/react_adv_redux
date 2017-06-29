import React, { Component } from 'react'

class CoursesPage extends Component {

    constructor(props, context){
        super(props);
        this.state = { course: {title: null}};
    }

    onTitleChagne(e) {
        const course = this.state.course;
        course.title = e.target.value;
        this.setState({course: {course}});
    }

    onClickSave(e){
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

export default CoursesPage;