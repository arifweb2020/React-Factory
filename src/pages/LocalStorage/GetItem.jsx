import React, { useState, useEffect } from 'react';


function GetItem(props) {
    const [localdata, setLocaldata] = useState([]);
    useEffect(() => {
        const studentList = JSON.parse(
            localStorage.getItem('students-list')
        );

        if (studentList) {
            setLocaldata(studentList);
        }
    }, []);

    const clearItem = () => {
        window.localStorage.removeItem('students-list')
        setTimeout(() => {
            window.location.href = '/getItem';
        }, 1000);
    }
    return (
        <>
            <div className="jumbotron text-center">
                <h1>Local Storage Get Item List <button className="btn btn-sm btn-warning" onClick={() => props.history.goBack()}>Back</button></h1>
                <h2>Best Students :{localStorage.getItem("single-students")} </h2>
                <p>Enhance your skills in React and React Native !</p>
            </div>
            <div className="container">
                <button className="btn btn-sm btn-warning" onClick={clearItem}>Clear</button>
                {
                    localdata.map((item, index) => {
                        return <h1 key={index}>{item.username}</h1>
                    })
                }
            </div>
        </>
    );
}

export default GetItem;