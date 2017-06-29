import React from 'react'

const NotFound = (props) => {
    return(
        <div>
            The page you are looking for could not be found.
            {props.children}
        </div>
    )
}

export default NotFound;