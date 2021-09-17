import React, { useState, useEffect } from 'react';

function InfiniteScroll() {
    const PAGE_NUMBER = 1;
    const [state, setState] = useState([]);
    const [page, setPage] = useState(PAGE_NUMBER);

    useEffect(async () => {
        const res = await fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=5`)

        const res1 = await res.json();

        console.log(res1.data);
        setState(res1.data);
    }, [page]);

    // const getData = async () => {

    //     const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}`)

    //     const res1 = await res.json();

    //     console.log(res1);
    //     setState(res1);
    // }

    const scrollToEnd = () => {
        setPage(page + 1);
    }

    window.onscroll = function () {
        if (
            window.innerHeight + document.documentElement.scrollTop
            === document.documentElement.offsetHeight
        ) {
            scrollToEnd()
        }
    }

    return (
        <>
            {/* <div className="jumbotron text-center">
                <h1>Infinite Scroll</h1>
                <p>Enhance your skills in React and React Native !</p>
            </div> */}

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {state.length > 0 && state.map((ele, index) => {
                            return <h1 key={index} style={{ background: 'red', padding: '30px' }}>{ele.name}</h1>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default InfiniteScroll;