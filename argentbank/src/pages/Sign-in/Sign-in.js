import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Button from "../../components/Button/Button"
import "./Style/sign-in.scss"


const SignIn = () => {

    



    return (
        <div className="main">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} />
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label for="username" >Username</label>
                        <input type="text" id="username"></input>
                    </div>
                    <div className="input-wrapper">
                        <label for="password">Password</label>
                        <input type="password" id="password"></input>                     
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"></input>
                        <label for="remember-me">Remember me</label>
                    </div>
                    <Button name= "Sign In"/>
                </form>
            </section>
        </div>
    );
}
export default SignIn;

