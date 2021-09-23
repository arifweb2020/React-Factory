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
    
//     export const rupeeConverter = (n)=>{
//     n = n.toString();
//     n = n.replace("₹", "");
//     n = n
//       .split("")
//       .filter((e) => e !== ",")
//       .join("");
//     let currency;
//     if(window.innerWidth < 640) {
//       if(n.length > 3 && n.length <= 5) {
//         n = n.slice(0, n.length - 3)
//         n += "k"
//       }
//       if(n.length > 5 && n.length <= 7) {
//         n = n.slice(0, n.length - 5)
//         n += "L"
//       }
//       if(n.length > 7) {
//         n = n.slice(0, n.length - 7)
//         n += "Cr"
//       }
//       currency = "₹" + n;
//     }
//     else {
//       currency = new Intl.NumberFormat("en-IN", {
//         style: "currency",
//         currency: "INR",
//       }).format(n);
//       currency = currency.split(".")[0];
//     }
//     return currency;
// }

// export const rupeeConverterMobile = (n) => {
//   n = n.toString();
//   n = n.replace("₹", "");
//   n = n
//   .split("")
//   .filter((e) => e !== ",")
//   .join("");
//   if(n.length > 3 && n.length <= 5) {
//     n = n.slice(0, n.length - 3)
//     n += "k"
//   }
//   if(n.length > 5 && n.length <= 7) {
//     n = n.slice(0, n.length - 5)
//     n += "L"
//   }
//   if(n.length > 7) {
//     n = n.slice(0, n.length - 7)
//     n += "Cr"
//   }
//   n = "₹" + n;
//   return n;
// }

// export const rupeeConverterFull = (n) => {
//   n = n.toString();
//   n = n.replace("₹", "");
//   n = n
//     .split("")
//     .filter((e) => e !== ",")
//     .join("");
//   let currency;
//   currency = new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//   }).format(n);
//   currency = currency.split(".")[0];
//   return currency;

// }

    return (
        <div className="amountContainer">
            <div className="jumbotron text-center">
                <h1>Enter Amount</h1>
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
