import React, { useState, useEffect } from 'react';
import Home from '../Home';
import { Route, Switch } from 'react-router-dom'
import About from '../About';
import Progress from '../Progress';
import NotFound from '../NotFound';
import Phone from '../Phone';
import Faq from '../Faq';
import Pagination from '../Pagination';
import PrivateRoute from '../PrivateRoute';
import Login from '../Login';


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
                <PrivateRoute exact path="/login"><Login/></PrivateRoute>
                <Route path="/phone" component={Phone} />
                <Route path="/faq" component={Faq} />
                <Route path="/pagination" component={Pagination} />
                <Route component={NotFound} />
            </Switch>
        </>
    );
}

export default MainView;