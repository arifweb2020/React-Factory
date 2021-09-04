import React from 'react';
import { Link } from 'react-router-dom'
import './index.scss'
import topArrow from './../../assets/images/toparrow.png';

function Footer() {
    return (
        <div className="footer mt-5">
            <footer className="bd-footer text-muted">
                <div className="container-fluid p-3 p-md-5">
                    <ul className="footer-links">
                        <li><Link to="">GitHub</Link></li>
                        <li><Link to="">Twitter</Link></li>
                        <li><Link to="">Examples</Link></li>
                        <li><Link to="">About</Link></li>
                    </ul>                   
                    <p>React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. </p>
                    <p>React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.</p>
                    <img src={topArrow} alt="top arrow" onClick={()=>window.scroll(0,0)} className="topArrow" />
                </div>
            </footer>
        </div>
    );
}

export default Footer;