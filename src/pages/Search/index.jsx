import React, { useEffect, useState } from 'react';
import ReactPaginate  from 'react-paginate';


function Search(props) {
    const [data, setData] = useState([])
    const [query, setQuery] = useState("")
    const [pageCount, setPageCount] = useState(0)
    const [perPage] = useState(10);
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/albums")
            const res1 = await res.json()
            setData(res1)
            setPageCount(Math.ceil(res1.length / perPage))
        }
        if (query.length === 0 || query.length > 2) {
            getData()

        }

    }, [perPage, query])

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };

    return (
        <div style={{ margin: "0 auto", maxWidth: "70%", marginTop: "30px" }}>
            <h1>Search</h1>
            <input type="text" placeholder='search..' onChange={(e) => setQuery(e.target.value)} />

            {
                data.filter((ss) => ss.title.toLowerCase().includes(query)).slice(offset, offset + perPage).map((ele, i) => {
                    return <p key={i}>{ele.userId}</p>
                })
            }

            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                // breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </div>
    );
}

export default Search;