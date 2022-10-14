import React from "react";
import './Button.scss'

function Button({ children, className }) {
    return <button className={`btn ${className}`}>{children}</button>
}

export default Button;
