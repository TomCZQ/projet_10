import React from "react";
import "./Style/Button.scss"


const Button = (props) => {
    return (
        <div>
            <button className="sign-in-button">
                {props.name}
            </button>
        </div>
    );
}
export default Button;

