import React from 'react';

function Puc({ onBack, nextClg }) {
    return (
        <div>
            <span onClick={onBack}>{"<"} Back</span>
            <h1 style={{ textAlign: 'center' }}>Puc</h1>
            <p>Plan programme is based on the Class 12th results from CBSE or any equivalent examination. The candidate must have studied Mathematics in Class 12th for admission in B. ... PCM students interested in the subjects can pursue the course from an institute that offers this course after the completion of Class 12th studies.</p>
            <button className="btn btn-md btnStep" onClick={nextClg}>Next</button>
        </div>
    );
}

export default Puc;