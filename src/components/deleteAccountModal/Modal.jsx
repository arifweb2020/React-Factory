import accoundDelete from "./../../assets/Images/accoundDelete.svg";
import "./modal.scss";

const Modal = ({ closePopup }) => {
  return (
    <>
      <div className="modalBackground"></div>
      <div className="modalContainer">
        <div className="topImage">
          <img
            src={accoundDelete}
            alt="accoundDelete"
            className="crossImage"
            onClick={closePopup}
          />
        </div>
        <div className="row mt-5">
          <div className="col-lg-12 col-12">
            <div className="textContainer mt-4">
              <h3 className="modalHeading">Delete Your account</h3>
              <p className="modalPara">We will stop storing the following</p>
              <div className="stepWrapper">
                <span className="checkmark">
                  <span className="checkmarkCircle"></span>
                  <span className="checkmarkStem"></span>
                  <span className="checkmarkTick"></span>
                </span>
                <p className="modalStepText">Your email address</p>
                <span className="checkmark">
                  <span className="checkmarkCircle"></span>
                  <span className="checkmarkStem"></span>
                  <span className="checkmarkTick"></span>
                </span>
                <p className="modalStepText">Your mobile number</p>
                <span className="checkmark">
                  <span className="checkmarkCircle"></span>
                  <span className="checkmarkStem"></span>
                  <span className="checkmarkTick"></span>
                </span>
                <p className="modalStepText">
                  Your external investments imported
                </p>
              </div>
              <div className="agreementText mt-5">
                <span>
                  Your investments with dezerv. will not be exited. We will not
                  be able to exit these on your behalf if you delete your
                  account
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="modalFooter mt-3">
          <button className="deleteAccountBtn">Delete account</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
