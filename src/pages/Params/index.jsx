import React, { useEffect } from 'react';
import { useParams, useLocation, useRouteMatch } from 'react-router-dom';

function Rams(props) {
    let { id } = useParams();

    //let location = useLocation();
    // console.log(location);
    // // useLocation pass two object
    // // pathname: "/useParams/dat-12"
    // //search: "?action=adsrss&id=12"
    // console.log(location.pathname);

    // custome hook for finding search query
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    //http://localhost:3001/useParams/dat-12?action=adsrss&id=12
    console.log(query.get('id'));
    console.log(query.get('action'));

    // let match = useRouteMatch('/useParams/:actionsss');
    // console.log(match);
    // console.log(match.params);
    // console.log(match.params.actionsss);


    useEffect(() => {
        console.log("params")

    }, [])

    return (
        <div className="paramsContainer">
            <div className="jumbotron text-center">
                <h1>React Router Hooks {id}</h1>
                <p>useHistory, UseParams, useLocation, useRouteMatch</p>
                <p>exact is must in Route while using useParams</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p>query parameters : http://localhost:3001/useParams/dat-12?action=adsrss&id=12</p>
                    <p>query Action : {query.get('action')}</p>
                    <p>query Id : {query.get('id')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rams;