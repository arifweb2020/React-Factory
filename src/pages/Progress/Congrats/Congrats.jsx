import React from 'react';
import Lottie from "react-lottie";
import congrats from "./../../../assets/lottie/thankyouLoader.json";

function Congrats() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData : congrats,
      };
    return (
        <div>
            <div className="text-center">
              <Lottie options={defaultOptions} height={74} width={74} />
            </div>
            <h1 style={{textAlign:'center'}}>Congrulations!!!!!!</h1>
        </div>
    );
}

export default Congrats;