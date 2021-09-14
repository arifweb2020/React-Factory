import React, { useState, useEffect } from 'react';
import Paginate from '../../components/Paginate';
import {useHistory} from 'react-router-dom'

function Pagination() {
    let history = useHistory();
    const [items, setItems] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    let limit = 12;

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`);
            const data = await res.json();
            const total = res.headers.get("x-total-count");
            setpageCount(Math.ceil(total / limit));
            // console.log(Math.ceil(total/12));
            setItems(data);
        };
        getComments();
    }, [limit]);

    const fetchComments = async (currentPage) => {
        const res = await fetch(
            // `http://localhost:3004/comments?_page=${currentPage}&_limit=${limit}`
            `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        return data;
    };

    const handlePageClick = async (data) => {
        console.log(data.selected);
        let currentPagess = data.selected + 1;
        const commentsFormServer = await fetchComments(currentPagess);
        setItems(commentsFormServer);
        // scroll to the top
        window.scrollTo(0, 0)
    };

    return (
        <div className="paginationContainer">
            <div className="jumbotron text-center">
                <h1>Pagination</h1>
                <p>Enhance your skills in React and React Native ! <button className="btn btn-md btn-primary" onClick={()=>history.push('/newPagination')}>new pagination</button></p>
            </div>
            <div className="container">
                <div className="row m-2">
                    {items.map((item) => {
                        return (
                            <div key={item.id} className="col-sm-6 col-md-4 v my-2">
                                <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                                    <div className="card-body">
                                        <h5 className="card-title text-center h2">Id :{item.id} </h5>
                                        <h6 className="card-subtitle mb-2 text-muted text-center">
                                            {item.email}
                                        </h6>
                                        <p className="card-text">{item.body}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Paginate pageCounts={pageCount} onPageChanges={handlePageClick} />
            </div>
        </div>
    );
}

export default Pagination;