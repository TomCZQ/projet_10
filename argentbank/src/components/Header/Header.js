import React from "react";
import "./Style/header.scss"
import Logo from "../../assets/img/argentBankLogo.png"
import Navbar from "../../components/Navbar/Navbar"


const Header = () => {
    return (
        <nav className="main-nav">
            <a class="main-nav-logo" href="#">
                <img
                className="main-nav-logo-image"
                src={Logo}
                alt="Argent Bank Logo"
                />
                <h1 class="sr-only">Argent Bank</h1>
            </a>
            <Navbar/>
        </nav>

    );
}

export default Header;