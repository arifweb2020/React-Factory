import React, { useState } from 'react';
import './index.scss';
import OtpInput from 'react-otp-input';
function Phone() {
    const [phoneNumber, setPhoneNumber] = useState(0);
    const regex = new RegExp("^[0-9]$");
    const handlePhoneNumberChange = (number) => {
        if (!regex.test(number)) {
            setPhoneNumber(
                number
                    .split("")
                    .filter((ele) => regex.test(ele))
                    .join("")
            );
        } else setPhoneNumber(number);
    };
    return (
        <div className="phoneContainer">
            <div className="jumbotron text-center">
                <h1>Phone Validation</h1>
                <p>Enhance your skills in React and React Native !</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <OtpInput
                            className="inputStyle"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            numInputs={10}
                            isInputNum={true}
                            onPaste={(e) => e.preventDefault()}
                        />
                        {phoneNumber.length === 10 ?
                            (
                                <div className="mt-4">
                                    <div className="form-group form-check mb-2">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" /> Remember me
                                        </label>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            ) :
                            (
                                <div className="mt-4">
                                    <div className="form-group form-check mb-2">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" disabled={true} /> Remember me
                                        </label>
                                    </div>
                                    <button type="submit" class="btn btn-primary" disabled={true}>Submit</button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Phone;