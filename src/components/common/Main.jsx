import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Home from '../home/HomePage';
import NotFound from './NotFound';
import About from '../about/AboutPage';
import CoursesPage from '../course/CoursesPage';
import ManageCoursePage from '../course/ManageCoursePage';
const Main = (props) => {
    return(
        <Switch>

            <Route path="/" exact component={Home} />
            <Route path="/courses" component={CoursesPage} />
            <Route path="/course/:id" component={ManageCoursePage} />
            <Route path="/about" component={About} />


            <Route path="*" component={NotFound} />
        </Switch> 
    )
}

export default Main;