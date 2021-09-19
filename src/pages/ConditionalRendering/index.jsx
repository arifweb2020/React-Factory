import React, { useState } from 'react';

function ConRender(props) {
    const [islogin, setLogin] = useState(3);
    return (
        <>
            <div className="jumbotron text-center">
                <h1>Conditional rendering | If Condition </h1>
                <p>Enhance your skills in React and React Native !</p>
            </div>
            <div className="container tex-center">
                {
                    islogin === 1 ? <h1> hii arif </h1> :
                        islogin === 2 ? <h1> welcome arif </h1> :
                            islogin === 3 ? <h1>Thanks arif</h1> :
                                <h2>sorry arif</h2>
                }
            </div>
        </>
    );
}

export default ConRender;