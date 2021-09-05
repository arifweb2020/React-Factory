import React from 'react';

function School({ onNext }) {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>School</h1>
            <p>A school is an educational institution designed to provide learning spaces and learning environments for the teaching of students under the direction of teachers. Most countries have systems of formal education, which is sometimes compulsory. In these systems, students progress through a series of schools. </p>
            <button className="btn btn-md btnStep" onClick={onNext}>Next</button>
        </div>
    );
}

export default School;