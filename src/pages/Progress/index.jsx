import React, { useState } from 'react';
import './index.scss';
import { ProgressBar } from "react-bootstrap";
import School from './School/School';
import Puc from './Puc/Puc';
import College from './College/College';
import Congrats from './Congrats/Congrats';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        // props.history.push("/");
        setTimeout(() => {
            props.history.push("/");
        }, 3000);
        toast.success("Success", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            pauseOnHover: false,
        });
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
                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={true}
                    closeOnClick={true}
                    rtl={false}
                />
            </div>

        </div>
    );
}

export default Progress;