import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [redirect, setRedirect] = useState(false);

    const handleLoginClick = () => {
        setRedirect(true);
    };

    if (redirect) {
        return <Navigate to="/signin" />;
    }

    return (
        <div>
            <a className="main-nav-item" href="#" onClick={handleLoginClick}>
                <FontAwesomeIcon icon={faUserCircle} />
                Sign In
            </a>
        </div>
    );
}

export default Navbar;
