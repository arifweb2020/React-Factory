import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

function Api() {
    const [mydata, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/users');
            const res = await data.json();
            console.log(res);
            setData(res);
        }
        getData();
    }, []);


    return (
        <>
            <div className="jumbotron text-center">
                <h1>Api Call using Params</h1>
                <p>Enhance your skills in React and React Native !</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {
                            mydata.map((items)=>{
                                return(
                                    <div key={items.id}>
                                    <h1><Link to={`/apicall/${items.id}`}>{items.name}</Link></h1>
                                    {/* <h1><Link to={`/userlist/${items.id}`}>{items.name}</Link></h1> */}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Api;