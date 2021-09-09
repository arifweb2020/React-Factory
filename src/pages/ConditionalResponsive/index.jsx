import React from 'react';

function conditionalResponsive() {
    const isDesktop = window.innerWidth >= 640 ? true : false;
    return (
        <div>
            <div className="jumbotron text-center">
                <h1>Conditonal Responsive Code</h1>
                <p>Based upon screen width code is working..</p>

            </div>
            <div className="container text-center">
            {isDesktop ? (
                <div>
                    <h1>Desktop</h1>
                </div>
            ) : (
                <div>
                    <h1>Mobile</h1>
                </div>
            )}
            </div>
        </div>
    );
}

export default conditionalResponsive;