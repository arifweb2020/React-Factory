import React, { useState, useEffect } from 'react';
import Home from '../Home';
import { Route, Switch } from 'react-router-dom'
import About from '../About';
import Progress from '../Progress';
import NotFound from '../NotFound';
import Phone from '../Phone';

function MainView() {
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        setTimeout(() => setSpinner(false), 2000)
    }, []);
    if (spinner) return <h4 style={{ textAlign: "center", marginTop: "300px", marginBottom: "300px", color: "darkorange", background: "#fff", zIndex: '9999' }}>plz wait...</h4>

    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/progress" component={Progress} />
                <Route path="/phone" component={Phone} />
                <Route component={NotFound} />
            </Switch>
        </>
    );
}

export default MainView;