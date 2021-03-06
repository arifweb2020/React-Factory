import React from 'react';
import {Route,Redirect} from 'react-router-dom'

function PrivateRoute({children,...rest}) {
    const isAuth=false;
    return (
        <Route {...rest} render={()=>isAuth?(children):(<Redirect to={'/'}/>)}/>
    );
}
export default PrivateRoute;