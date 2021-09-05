import React, { useState } from 'react';
import './index.scss';
import { ProgressBar } from "react-bootstrap";
import School from './School/School';
import Puc from './Puc/Puc';
import College from './College/College';
import Congrats from './Congrats/Congrats';

function Progress(props) {
    const [progressBarValue, setProgressBarValue] = useState(33);
    const [stage, setStage] = useState("school");

    const nextPuc = () => {
        setProgressBarValue(67)
        setStage("puc");
    }
    const nextClg = () => {
        setProgressBarValue(100)
        setStage("congrat");
        setTimeout(() => {
            setStage("clg");
        }, 4000);
    }
    const proceed = () => {
        props.history.push("/");
    }
    const backSchool = () => {
        setProgressBarValue(33)
        setStage("school");
    }
    const backPuc = () => {
        setProgressBarValue(67)
        setStage("puc");
    }

    return (
        <div className="progressContainer">
            <div className="jumbotron text-center">
                <h1>Progress</h1>
                <p>Enhance your skills in React and React Native !</p>
            </div>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-lg-6 offset-lg-3 col-12">
                        <div className="card bg-primary">
                            <ProgressBar now={progressBarValue} />
                            <div className="contentWrapper mt-3">
                                {stage === "school" && <School onNext={nextPuc} />}
                                {stage === "puc" && <Puc onBack={backSchool} nextClg={nextClg} />}
                                {stage === "congrat" && <Congrats />}
                                {stage === "clg" && <College backPuc={backPuc} proceed={proceed} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Progress;