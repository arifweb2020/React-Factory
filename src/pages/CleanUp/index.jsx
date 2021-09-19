import React, { useState, useEffect } from 'react';

function CleanUp(props) {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     console.log("1")

    //     return () =>{
    //         console.log('2')
    //     }
    // }, [count]);

    //     useEffect(() => {
    //     console.log("1")
    //     const eventHandler = () =>  console.log("arif");
    //     document.addEventListener("click", eventHandler);

    //     return () =>{
    //         console.log('clean code');
    //         document.removeEventListener("click", eventHandler);
    //     }
    // }, [count]);

    useEffect(() => {
        console.log("1")
        const interval = setInterval(()=>{
                console.log("arif")
        },2000)

        return () =>{
            console.log("2")
            clearInterval(interval)
        }
    }, [count]);


    return (
        <>
            <div className="jumbotron text-center">
                <h1>Clean Up code by hooks </h1>
                <p>Enhance your skills in React and React Native !</p>
            </div>
            <div className="container text-center">
                <h1>{count}</h1>
                <button className="btn btn-md btn-primary" onClick={() => setCount(count + 1)} >count</button>
            </div>
        </>
    );
}

export default CleanUp;