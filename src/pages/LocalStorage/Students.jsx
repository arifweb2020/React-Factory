import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Students(props) {
    const [data, setData] = useState({});
    const { students } = useParams();
    useEffect(() => {
        const getData = async () => {
            const data = await fetch(`https://jsonplaceholder.typicode.com/users/${students}`);
            const res = await data.json();
            setData(res);
        }
        getData();
    }, []);

    const ss = JSON.parse(localStorage.getItem('students-list'))
    console.log("sss " + ss[0].name)
    return (
        <>
            <div className="jumbotron text-center">
                <h1>User Name : {data.name} <button className="btn btn-sm btn-warning" onClick={() => props.history.goBack()}>Back</button></h1>
                <p>Enhance your skills in React and React Native !</p>
            </div>
        </>
    );
}

export default Students;