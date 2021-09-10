import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { tfv_img } from "./../../config/config";

function Tfv() {
    const [mydata, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const data = await fetch('http://thefacevalue.in/api/index.php');
            const res = await data.json();
            console.log(res.data);
            setData(res.data);
        }
        getData();
    }, []);
    return (
        <>
            <div className="jumbotron text-center">
                <h1>TFV Api Call using Params without id</h1>
                <p>Enhance your skills in React and React Native !</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {
                            mydata.map((items) => {
                                return (
                                    <div key={items.id}>
                                        <img src={`${tfv_img}${items.image}`} alt="img" width="200" />
                                        {/* <h1><Link to={`/tfv/${items.name}`}>{items.name}</Link></h1> */}
                                        <h1><Link to={{ pathname: `/tfv/${items.name}`, state: { userData: items } }}>{items.name}</Link></h1>
                                        
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

export default Tfv;