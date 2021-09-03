import React, { useState, useEffect } from 'react';

function Loader() {
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        setTimeout(() => setSpinner(false), 2000)
    }, []);
    if (spinner) return <h4 style={{ textAlign: "center", marginTop: "200px", color: "darkorange" ,background:"#fff" ,zIndex:'9999' }}>plz wait...</h4>
    return (
        <>
           
        </>
    );
}

export default Loader;