import React from 'react';
import {Link} from 'react-router-dom'
import './index.scss'

function Navbar() {
    return (
        <div className="navBar">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark navbarBackground">
                <Link className="navbar-brand" to="/">React Factory</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/progress">Progress</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Version</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;