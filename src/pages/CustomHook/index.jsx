import React from 'react';
import useCustomCounter from './Custom';

function CustomHook() {

  //  const {count , handleDeccrement , handleIncrement} = useCustomCounter();

    const data = useCustomCounter();
    const data1 = useCustomCounter();
    return (
        <>
            <div className="jumbotron text-center">
                <h1>Custom Hook </h1>
                <p>Enhance your skills in React and React Native !</p>
            </div>
            <div className="conatiner text-center">
                <h1>Counter : {data.count}</h1>
                <button onClick={data.handleIncrement} className="btn btn-md btn-primary">Counter</button>
                <h1>Counter1 : {data1.count}</h1>
                <button onClick={data1.handleIncrement} className="btn btn-md btn-primary">+</button>
                <button onClick={data1.handleDeccrement} className="btn btn-md btn-primary ml-2">-</button>
            
            </div>
        </>
    );
}

export default CustomHook;