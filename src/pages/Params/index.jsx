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
                {/* <div>
                    import {useHistory}  from 'react-router'

                    const history = useHistory();
                    history.goBack();
                    {
                        props.location.hash.includes("id") ?
                            (
                                <p
                                    className="backbutton"
                                    onClick={goBack}
                                >
                                    {"<"} Back
                                </p>
                            )
                            : null
                    }
                    logout() {
                        window.localStorage.clear();
                    window.location.href = '/home';
  }

                    <Link to={`/profileDeatil#id:${ele.id}`} onClick={() => {
                        localStorage.setItem("profiledetails", ele.id)
                    }}>View details</Link>

                    onClick={() => props.history.push(`/profileDeatil#id:${localStorage.getItem("profiledetails")}`)}
                    
                    const isDesktop = window.innerWidth > 669 ? true : false;
                    {isDesktop ? (

                        this.props.location.pathname === "/home" || this.props.location.pathname === "/portfolio" ? (

                            <button className="btn btnLogOut" onClick={this.logout}>Logout</button>) :

                            null

                    ) : (

                        this.props.location.pathname === "/home" ? (

                            <button className="btn btnLogOut" onClick={this.logout}>Logout</button>) :

                            null

                    )}

                </div> */}
            </div>
        </div>
    );
}

export default Rams;