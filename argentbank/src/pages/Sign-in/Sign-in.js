import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Button from "../../components/Button/Button"
import "./Style/sign-in.scss"
import { useNavigate } from 'react-router-dom';


const SignIn = () => {

    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        // Ajoutez ici votre logique de validation ou d'authentification

        // Rediriger vers une autre page après la connexion réussie
        navigate("/user");
    };
    



    return (
        <div className="main">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} />
                <h1>Sign In</h1>
                <form onSubmit={handleSignIn}>

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
                    <Button name= "Sign In" />
                </form>
            </section>
        </div>
    );
}
export default SignIn;

