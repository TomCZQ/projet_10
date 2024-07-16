import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();

    const [redirect, setRedirect] = useState(false);

    

    if (redirect) {
        return <Navigate to="/signin" />;
    }

    return (
        location.pathname === "/user" ?
        <div>
            <a className="main-nav-item" href="#" >
                <FontAwesomeIcon icon={faUserCircle} />
                Sign In
            </a>
        </div>
        :
        <div>
            <a className="main-nav-item" href="#" >
                <FontAwesomeIcon icon={faUserCircle} />
                Username
            </a>
            <a className="main-nav-item" href="#">
                <FontAwesomeIcon icon={faSignOut} />
                Sign Out
            </a>
        </div>

    );
}

export default Navbar;
