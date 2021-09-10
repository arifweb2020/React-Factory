import React from 'react';

function TfvDetails(props) {
    const { name, email, material } = props.location.state.userData
    return (
        <>
            <div className="jumbotron text-center">
                <h1>TFV user details</h1>
                <p>Enhance your skills in React and React Native !</p>
            </div>
            <div className="conatiner text-center">
                <h3>Name : {name}</h3>
                <h3>Email : {email} </h3>
                <h3>Material : {material} </h3>
            </div>
        </>
    );
}

export default TfvDetails;