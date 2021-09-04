import React, { useState } from "react";
import cardimage from "../../../../assets/Images/cardProfile.svg";
import Modal from "./../../../../components/deleteAccountModal/Modal";
import { Link } from "react-router-dom"

function DeleteAccount() {
  const [showModal, setshowModal] = useState(false);
  const handleDelteAccount = () => {
    setshowModal(true);
  };
  return (
    <>
      {showModal ? <Modal closePopup={() => setshowModal(false)} /> : null}
      <div className="profilePage">
        <div className="container-fluid topSection">
          <div className="profileContainers">
            <div className="row">
              <div className="col-lg-12 col-12">
                <div className="mt-3">
                  <Link to="/userProfile"><span className="goBack">Back</span></Link>
                </div>
                <div className="mt-5">
                  <h3 className="profileHeading">Delete your account</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-12">
                <div className="cardBody p-3 mt-5">
                  <h5 className="cardHeading mt-2">
                    We are sad to see you leave......
                  </h5>
                  <div className="imageBackground mt-4">
                    <img src={cardimage} alt="profile" />
                  </div>
                  <span className="cardPara mt-1">
                    If there is any way we can change your mind, please reach
                    out to us.
                  </span>
                  <div className="cardButton mt-3">
                    <button className="btn"> Email our team </button>
                    <button className="btn mt-3">Whatsapp us right away</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-12">
                <button
                  className="footerButton mt-4 mb-5"
                  onClick={handleDelteAccount}
                >
                  Continue with account deletion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteAccount;
