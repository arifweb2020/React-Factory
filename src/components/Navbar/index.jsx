import React from 'react';
import { NavLink , Link } from 'react-router-dom';
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
                            <NavLink activeClassName="active" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/progress">Progress</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/phone">Phone</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/pagination">Pagination</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/faq">Faq</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/useParams">Params</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;