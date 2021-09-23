import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGlobe,
    faMobileAlt
} from "@fortawesome/free-solid-svg-icons";
import './index.scss';
import ReactWeb from './Reactweb/ReactWeb';
import ReactNative from './ReactNative/ReactNative';

function Home() {
    const [tab, setTab] = useState("reactweb");
    return (
        <div className="homeContainer">
            <div className="jumbotron text-center">
                <h1>Welcome to React Factory : {localStorage.getItem("ReactFactory")}</h1>
                <p>Enhance your skills in React and React Native !</p>
            </div>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <button
                        className={"btn btn-lg " + (tab === "reactweb" ? "activeBtn" : "inactiveBtn")}
                        onClick={() => setTab("reactweb")}>
                        <FontAwesomeIcon icon={faGlobe} className="faIcon mr-1" />
                        React
                    </button>
                    <button
                        className={"btn btn-lg ml-3 " + (tab === "reactnative" ? "activeBtn" : "inactiveBtn")}
                        onClick={() => setTab("reactnative")}>
                        <FontAwesomeIcon className="faIcon mr-1" icon={faMobileAlt} />
                        React Native
                    </button>
                </div>
                <div className="informationDetails mt-5">
                    {tab === "reactweb" ? (
                        <ReactWeb />
                    ) : (
                        <ReactNative />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;