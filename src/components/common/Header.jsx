import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button
                    className="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/" className="navbar-brand">Course Manger</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/courses" className="nav-link" activeClassName="active">Courses</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
            {props.children}
        </div>
    )
}

export default Header;