import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import uparrow from "./../../assets/images/uparrow.svg";
import downarrow from "./../../assets/images/downarrow.svg";
import './index.scss'

function Faq() {
    const [open, setOpen] = useState(false);
    function toggleActive(id) {
        if (open === id) {
            setOpen(null);
        } else {
            setOpen(id);
        }
    }
    return (
        <div className="faqContainer">
            <div className="jumbotron text-center">
                <h1>Faq about React Factory</h1>
                <p>Enhance your skills in React and React Native !</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="card">
                            <Accordion defaultActiveKey="0" className="accordion">
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="0"
                                    onClick={() => toggleActive(1)}
                                >
                                    <p className="questionHeading">
                                        {" "}
                                        what is react js?
                                        <img
                                            src={open === 1 ? downarrow : uparrow}
                                            alt="img"
                                            className="accordionArrow"
                                        />
                                    </p>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <span className="answerPara">
                                            React · Declarative. React makes it painless to create interactive UIs. · Component-Based. Build encapsulated components that manage their own state,
                                        </span>
                                    </Card.Body>
                                </Accordion.Collapse>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="1"
                                    onClick={() => toggleActive(2)}
                                >
                                    <p className="questionHeading">
                                        {" "}
                                        What is JavaScript React used for?

                                        <img
                                            src={open === 2 ? uparrow : downarrow}
                                            alt="img"
                                            className="accordionArrow"
                                        />
                                    </p>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <span className="answerPara">
                                            React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.
                                        </span>
                                    </Card.Body>
                                </Accordion.Collapse>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="2"
                                    onClick={() => toggleActive(3)}
                                >
                                    <p className="questionHeading">
                                        {" "}
                                        Is react JS frontend or backend?

                                        <img
                                            src={open === 3 ? uparrow : downarrow}
                                            alt="img"
                                            className="accordionArrow"
                                        />
                                    </p>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        <span className="answerPara">
                                            React. js/React is an open-source frontend framework that is based on JavaScript, developed by Facebook, and best known for its virtual DOM feature. With React, we recommend Express. js/Express as a backend service.
                                        </span>
                                    </Card.Body>
                                </Accordion.Collapse>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="4"
                                    onClick={() => toggleActive(4)}
                                >
                                    <p className="questionHeading">
                                        {" "}
                                        What is react JS for beginners?

                                        <img
                                            src={open === 4 ? uparrow : downarrow}
                                            alt="img"
                                            className="accordionArrow"
                                        />
                                    </p>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body>
                                        <span className="answerPara">

                                            Image result for what is react js
                                            React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. We'll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.
                                        </span>
                                    </Card.Body>
                                </Accordion.Collapse>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="5"
                                    onClick={() => toggleActive(5)}
                                >
                                    <p className="questionHeading">
                                        {" "}
                                        Is react js a programming language?
                                        <img
                                            src={open === 5 ? uparrow : downarrow}
                                            alt="img"
                                            className="accordionArrow"
                                        />
                                    </p>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body>
                                        <span className="answerPara">
                                            React is a popular and widely used programming language at present since almost every web developer or a full-stack developer is using it.
                                        </span>
                                    </Card.Body>
                                </Accordion.Collapse>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="6"
                                    onClick={() => toggleActive(6)}
                                >
                                    <p className="questionHeading">
                                        {" "}
                                        Why react is so popular?
                                        <img
                                            src={open === 6 ? uparrow : downarrow}
                                            alt="img"
                                            className="accordionArrow"
                                        />
                                    </p>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="6">
                                    <Card.Body>
                                        <span className="answerPara">
                                            The core objective of ReactJS is providing the best possible rendering performance. ... Its strength comes from the focus on individual components. Instead of working on the entire web app, ReactJS allows a developer to break down the complex UI into simpler components.
                                        </span>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;