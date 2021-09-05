import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
        <div className="jumbotron text-center">
            <h1>404 - Not Found!</h1>
            <p><Link to="/">
                Go Home
            </Link></p>
        </div>


    </div>
);

export default NotFound;