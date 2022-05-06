import React, { useState } from 'react';
import image from './../../assets/images/reactjs.jpg';
import Advantages from './Advantages/Advantages';
import './index.scss'
import Prerequisites from './Prerequisites/Prerequisites';
import Pwa from './Pwa/Pwa';
import { useParams } from 'react-router-dom';

function About() {
    let { title } = useParams();
    const [tab, setTab] = useState("advantages");

    const [open, setOpen] = useState(false)

    const [popup, setPopup] = useState(true)


    const modal = true

    let readings = [
        {
            name: 'Apples',
            value: 60,
            color: '#eb4d4b'
        },
        {
            name: 'Blueberries',
            value: 7,
            color: '#22a6b3'
        },
        {
            name: 'Guavas',
            value: 23,
            color: '#6ab04c'
        },
        {
            name: 'Grapes',
            value: 5,
            color: '#e056fd'
        }
    ];

    let values = readings.map((item, i) => {

        if (item.value > 0) {
            return (
                <div className="value" style={{ 'color': item.color, 'width': item.value + '%' }} key={i}>
                    <span>{item.value}%</span>
                </div>
            )
        }
    })

    // eslint-disable-next-line array-callback-return
    // let bars = readings.map((item, i) => {

    //     if (item.value > 0) {
    //         return (
    //             // eslint-disable-next-line no-useless-concat
    //             <div className="value" style={{ backgroundColor: "item.color", width: "item.value" + '%' }} key={i}>

    //             </div>
    //         )
    //     }
    // })

    return (
        <div className="aboutContainer">
            <div className="jumbotron text-center">
                <h1>About {title}</h1>
                <p>Enhance your skills in React and React Native !</p>
            </div>
            <div className="container">
                <button onClick={() => setOpen(!open)}>open</button>
                {
                    open && (
                        <div className="sideNav">
                            <p>arif</p>
                            <button onClick={() => setOpen(!open)}>close</button>
                        </div>
                    )
                }

                {
                    popup && modal ?
                        <div style={{ width: '200px', height: '100px', background: 'purple', marginTop: '20px' }}>
                            <span style={{ color: '#fff', cursor: 'pointer' }} onClick={() => setPopup(false)}>close</span>

                        </div> : null

                }



                {/* {
                    // eslint-disable-next-line array-callback-return
                    readings.map((item, i) => {
                        // return (
                        //     <h1>{item.color}</h1>
                        // )
                        if (item.value > 0) {
                            return (
                                <div className="value" style={{ 'color': item.color, 'width': item.value + '%' }} key={i}>
                                    <span>|</span>
                                </div>
                            )
                        }
                    })
                } */}

                <div className="multicolor-bar">
                    <div className="values">
                        {values}
                    </div>
                    <div className="scale">
                        {readings.map((items, i) => {

                            if (items.value > 0) {
                                return (

                                    <div className="graduation" style={{ 'color': items.color, 'width': items.value + '%' }} key={i}>
                                        <span>|</span>
                                    </div>
                                )
                            }
                        })
                        }
                    </div>
                    {/* <div className="bars" >
                        {readings.map((items, i) => {

                            if (items.value > 0) {
                                return (

                                    <div className="bar" style={{ 'backgroundColor': items.color, 'width': items.value + '%' }} key={i}>

                                    </div>
                                )
                            }
                        })
                        }
                    </div> */}
                    <div className="progress" style={{ width: '100%' }}>
                        {readings.map((items, i) => {

                            if (items.value > 0) {
                                return (

                                    <div className="bar" style={{ 'backgroundColor': items.color, 'width': items.value + '%' }} key={i}>

                                    </div>
                                )
                            }
                        })
                        }
                    </div>
                    <div className="legends">
                        {readings.map((item, i) => {

                            if (item.value > 0) {
                                return (

                                    <div className="legend" key={i}>
                                        <span className="dot" style={{ 'color': item.color }}>●</span>
                                        <span className="label">{item.name}</span>
                                    </div>

                                )
                            }
                        })
                        }
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-7">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <button
                                    className={"btn btn-lg " +
                                        (tab === "advantages"
                                            ? "activeBtn"
                                            : "inactiveBtn"
                                        )}
                                    onClick={() => setTab("advantages")}>Advantages</button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={"btn btn-lg " +
                                        (tab === "prerequisites"
                                            ? "activeBtn"
                                            : "inactiveBtn"
                                        )}
                                    onClick={() => setTab("prerequisites")}>Prerequisites</button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={"btn btn-lg " +
                                        (tab === "pwa"
                                            ? "activeBtn"
                                            : "inactiveBtn"
                                        )}
                                    onClick={() => setTab("pwa")}>React PWA</button>
                            </li>
                        </ul>
                        <div className="tabWrapper mt-3">
                            {tab === "advantages" && (
                                <div>
                                    <Advantages />
                                </div>
                            )}
                            {tab === "prerequisites" && (
                                <div>
                                    <Prerequisites />
                                </div>
                            )}
                            {tab === "pwa" && (
                                <div>
                                    <Pwa />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-5 mt-5">
                        <img src={image} className="img-fluid" alt="banner images" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;