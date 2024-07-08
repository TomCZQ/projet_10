import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div>
            <a className="main-nav-item" href="#">
            <FontAwesomeIcon icon={faUserCircle}/>
            Sign In
            </a>
      </div>

    );
}
export default Navbar;

