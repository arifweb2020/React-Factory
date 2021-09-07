import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'

function Mymodal({ tophedaing, name, children }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary ml-2" onClick={handleShow}>
                Read More
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="mt-5"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{tophedaing}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {name}
                    {children}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Mymodal;