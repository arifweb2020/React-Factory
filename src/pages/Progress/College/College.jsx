import React from 'react';

function College({ backPuc }) {
    return (
        <div>
            <span onClick={backPuc}>{"<"} Back</span>
            <h1 style={{ textAlign: 'center' }}>College</h1>
            <p>A college is an educational institution or a constituent part of one. A college may be a degree-awarding tertiary educational institution, a part of a collegiate or federal university, an institution offering vocational education, or a secondary school.</p>
        </div>
    );
}

export default College;