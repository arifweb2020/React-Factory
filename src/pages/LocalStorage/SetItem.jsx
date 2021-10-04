import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SetItem(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    })

    const getData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const res1 = await res.json();
        setData(res1);
        localStorage.setItem('students-list', JSON.stringify(res1))
    }
    return (
        <>
            <div className="jumbotron text-center">
                <h1>Local Storage Set Item List <button className="btn btn-sm btn-warning" onClick={() => props.history.push("/getItem")}>Get Item</button></h1>
                <p>Enhance your skills in React and React Native !</p>
            </div>
            <div className="container">
                {
                    data.map((item, index) => {
                        return <h1 key={index}><Link to={`/localStorage/${item.id}`} onClick={() => {
                            localStorage.setItem("single-students", item.name)
                        }}>{item.name}</Link></h1>
                    })
                }
            </div>
        </>
    );
}

export default SetItem;