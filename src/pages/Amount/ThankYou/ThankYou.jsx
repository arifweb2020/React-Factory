import React from 'react';
import Lottie from "react-lottie";
import congrats from "./../../../assets/lottie/thankyouLoader.json";

function ThankYou() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: congrats,
    };
    return (
        <>
            <div className="container text-center">
                <Lottie options={defaultOptions} height={100} width={100} />
                <h1>Thank You for Investment</h1>
            </div>
        </>
    );
}

export default ThankYou;