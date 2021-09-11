import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Account from './Account/Account';
import './index.scss';
import InvestAmount from './InvestAmount/InvestAmount';
import ThankYou from './ThankYou/ThankYou';

function Amount() {
    const [stage, setStage] = useState("investamount");
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const lastpage = () => {
        setStage("thankyou")
    }

    return (
        <div className="amountContainer">
            <div className="jumbotron text-center">
                <h1>Enter Amolunt</h1>
                <p>Enhance your skills in React and React Native !</p>
            </div>
            <Modal
                show={open}
                onHide={onCloseModal}
                backdrop="static"
                centered
            >
                <Account onCloseModal={onCloseModal} lastpage={lastpage} />
            </Modal>
            {stage === "investamount" && <InvestAmount onOpenModal={onOpenModal} />}
            {stage === "thankyou" && <ThankYou />}
        </div>

    );
}

export default Amount;