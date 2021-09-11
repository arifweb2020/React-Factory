import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

function InvestAmount({onOpenModal}) {
    const [investValue, setInvestValue] = useState("₹5,0000");

    const enterAmount = () => {
        let amount = investValue;
        if (amount < 30000 || isNaN(amount)) {
            toast.warning("Minimum amount is ₹50,000", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
                pauseOnHover: false,
            });
        } else if (amount > 10000000) {
            toast.warning("Maximum amount is ₹10,00,000", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
                pauseOnHover: false,
            });
        } else {
            onOpenModal();
        }
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4 col-12">
                        <div className="form-group">
                            <input type="text"
                                value={investValue}
                                className="form-control"
                                onChange={(e) => {
                                    let value = e.target.value;
                                    value = value.replace("₹", "");
                                    value = value
                                        .split("")
                                        .filter((e) => e !== ",")
                                        .join("");
                                    if (!isNaN(value)) {
                                        setInvestValue(e.target.value);
                                    }
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-md btn-primary" onClick={enterAmount}>
                                Proceed
                            </button>
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
        </>
    );
}

export default InvestAmount;