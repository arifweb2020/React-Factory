import React, { useState } from 'react';
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
//import { useHistory } from "react-router-dom";

function Account({ onCloseModal, lastpage }) {
   // let history = useHistory();
    const [pan, setPan] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState(
        new Date().setFullYear(new Date().getFullYear() - 18)
    );

    const toInputUppercase = (e) => {
        e.target.value = ("" + e.target.value).toUpperCase();
    };

    const getToastWarning = (text) => {
        return toast.warning(text, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            pauseOnHover: false,
        });
    };
    const getToastSuccess = (text) => {
        toast.success(text, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            pauseOnHover: false,
        });
    };
    const validateFormDetails = () => {
        let panregex = /[a-zA-Z]{3}[P]{1}[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}$/;
        let regEmail = /^\w+([.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
        let warningText = "";
        if (!panregex.test(pan)) warningText = "Please enter valid PAN";
        if (!regEmail.test(email)) warningText = "Please enter valid Email";
        if (warningText) {
            getToastWarning(warningText);
        } else {
            getToastSuccess("success");
            // setTimeout(() => {
            //     history.push('/');
            // }, 3000);
            setTimeout(() => {
                onCloseModal();
                lastpage();
            }, 3000);
        }
    };

    return (
        <>
            <div className="modal-header">
                <h4 className="modal-title">Modal Heading</h4>
                <button type="button" onClick={onCloseModal}>&times;</button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            value={pan}
                            onChange={(e) => setPan(e.target.value)}
                            maxLength={10}
                            onInput={toInputUppercase}
                            placeholder="Enter your pan number"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="date"
                            className="form-control"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            minDate={moment().subtract(150, "years")._d}
                            maxDate={moment().subtract(18, "years")._d}
                        />
                    </div>
                </form>
                <div className="form-group">
                    <button className="btn btn-md btn-primary"
                        onClick={() => {
                            let warningText = "";
                            if (!email) warningText = "Email is required ! ";
                            if (!date) warningText = "Date of birth is required ! ";
                            if (!pan) warningText = "Pan Number is required ! ";
                            if (!pan || !date || !email) {
                                getToastWarning(warningText);
                            } else {
                                validateFormDetails();
                            }
                        }}
                    >proceed</button>
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
        </>
    );
}

export default Account;