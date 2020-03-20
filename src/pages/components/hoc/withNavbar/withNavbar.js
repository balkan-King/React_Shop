import React from 'react';
import NavLink from './navLink/NavLink';


const withHeader = (WrappedComponent) => {

    function WithHeader(){
        return (
            <div>
                <ul>
                    <li><NavLink href="/">Home</NavLink></li>
                    <li><NavLink href="/weather">Weather</NavLink></li>
                    <li><NavLink href="/shop">Shop</NavLink></li>
                    <li><NavLink>Authorization</NavLink>
                        <ul className="dropdown">
                            <li><NavLink href="/signUp">Sign-Up</NavLink></li>
                            <li><NavLink href="/logIn">Log-In</NavLink></li>
                            <li onClick={clearStorage.bind()}><NavLink>Log-Out</NavLink></li>
                        </ul>
                    </li>
                </ul>
                <WrappedComponent />
            </div>
        )
    }

    return WithHeader;
}

function clearStorage(){
    localStorage.clear();
}

export default withHeader