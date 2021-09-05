import React, { useState } from 'react';
import image from './../../assets/images/reactjs.jpg';
import Advantages from './Advantages/Advantages';
import './index.scss'
import Prerequisites from './Prerequisites/Prerequisites';
import Pwa from './Pwa/Pwa';

function About() {
    const [tab, setTab] = useState("advantages");
    return (
        <div className="aboutContainer">
            <div className="jumbotron text-center">
                <h1>About</h1>
                <p>Enhance your skills in React and React Native !</p>
            </div>

            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-7">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <button 
                                    className={"btn btn-lg " +
                                        (tab === "advantages"
                                            ? "activeBtn"
                                            : "inactiveBtn"
                                        )}
                                    onClick={() => setTab("advantages")}>Advantages</button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={"btn btn-lg " +
                                    (tab === "prerequisites"
                                        ? "activeBtn"
                                        : "inactiveBtn"
                                    )}
                                    onClick={() => setTab("prerequisites")}>Prerequisites</button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={"btn btn-lg " +
                                    (tab === "pwa"
                                        ? "activeBtn"
                                        : "inactiveBtn"
                                    )}
                                    onClick={() => setTab("pwa")}>React PWA</button>
                            </li>
                        </ul>
                        <div className="tabWrapper mt-3">
                            {tab === "advantages" && (
                                <div>
                                    <Advantages/>
                                </div>
                            )}
                            {tab === "prerequisites" && (
                                <div>
                                    <Prerequisites/>
                                </div>
                            )}
                            {tab === "pwa" && (
                                <div>
                                    <Pwa/>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-5 mt-5">
                        <img src={image} className="img-fluid" alt="banner images" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;