import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UserList() {
    const [data, setData] = useState({});
    const { myid } = useParams();
    useEffect(() => {
        const getData = async () => {
            const data = await fetch(`https://jsonplaceholder.typicode.com/users/${myid}`);
            const res = await data.json();
            setData(res);
        }
        getData();
    }, []);
    return (
        <>
            <div className="jumbotron text-center">
                <h1>User Name : {data.name}</h1>
                <p>Enhance your skills in React and React Native !</p>
            </div>
        </>
    );
}

export default UserList;