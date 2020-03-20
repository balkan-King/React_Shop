import React from 'react';
import {withRouter} from 'react-router-dom';

const NavLink = ({href, children, location}) => {
    return (
        <div>
            <a className={"navLink " + (location.pathname===href ? "active" : "")} href={href}>{children}</a>
        </div>
    )
}

export default withRouter(NavLink)
