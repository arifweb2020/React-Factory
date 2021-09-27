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
import Rams from '../Params';
import InstaStories from '../InstaStories';
import Api from '../Api';
import Tfv from '../Tfv';
import UserList from '../Api/UserList.jsx/UserList';
import TfvDetails from '../Tfv/TfvDetails/TfvDetails';
import conditionalResponsive from '../ConditionalResponsive';
import FileUpload from '../FileUpload';
import Amount from '../Amount';
import InfiniteScroll from '../InfiniteScroll';
import Paginates from '../Pagination/Paginates/Paginates';
import CustomHook from '../CustomHook';
import ConRender from '../ConditionalRendering';
import CleanUp from '../CleanUp';
import Movies from '../Movies';
import FavList from '../Movies/FavList';

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
                <Route exact path="/about" component={About} />
                <Route exact path="/about/:title" component={About} />
                <Route path="/progress" component={Progress} />
                <PrivateRoute exact path="/login"><Login /></PrivateRoute>
                <Route path="/phone" component={Phone} />
                <Route path="/movies" component={Movies} />
                <Route path="/fav-movie-list" component={FavList} />
                <Route path="/faq" component={Faq} />
                <Route path="/pagination" component={Pagination} />
                <Route path="/newPagination" component={Paginates} />
                <Route exact path="/useParams" component={Rams} />
                <Route exact path="/apicall" component={Api} />
                <Route exact path="/apicall/:myid" component={UserList} />
                <Route exact path="/tfv" component={Tfv} />
                <Route exact path="/tfv/:name" component={TfvDetails} />
                <Route exact path="/conditionalResponsive" component={conditionalResponsive} />
                <Route path="/instaStories" component={InstaStories} />
                <Route path="/fileUpload" component={FileUpload} />
                <Route path="/amount" component={Amount} />
                <Route path="/InfiniteScroll" component={InfiniteScroll} />
                <Route path="/customHook" component={CustomHook} />
                <Route path="/cleanCode" component={CleanUp} />
                <Route path="/conditionalRendering" component={ConRender} />
                <Route exact path="/useParams/:id" component={Rams} />
                <Route component={NotFound} />
            </Switch>
        </>
    );
}

export default MainView;