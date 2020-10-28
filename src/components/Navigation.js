import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation() {
    return (
        <div className="navigation">
            <Link className="navigation__btn" to="/">
                <span>Home</span>
            </Link>
            <Link className="navigation__btn" to="/about">
                <span>About</span>
            </Link>
        </div>
    );
}

export default Navigation;