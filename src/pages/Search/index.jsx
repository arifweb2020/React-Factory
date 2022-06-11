import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import ReactPaginate from 'react-paginate';

function Search(props) {
    const [data, setData] = useState([])
    const [query, setQuery] = useState("")
    const [offset, setOffset] = useState(0);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0)

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

    }, [query, perPage])

    console.log(query)
    console.log(data.filter((val) => val.title.toLowerCase().includes("quidem")))

    const keys = ["title", "id", "userId"]

    // console.log(data[0]["title"])
    const search = (mydata) => {
        return mydata.filter((item) =>
            //item.title.toString().toLowerCase().includes(query) || item.id.toString().toLowerCase().includes(query) || item.userId.toString().toLowerCase().includes(query)
            keys.some((key) => item[key].toString().toLowerCase().includes(query))
        ).slice(offset, offset + perPage)
    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };

    return (
        <div style={{ margin: "0 auto", maxWidth: "70%", marginTop: "30px" }}>
            <h1>Search</h1>
            <input type="text" placeholder='search...' onChange={(e) => setQuery(e.target.value)} />

            <Table list={search(data)} />

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
                //  breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </div>
    );
}

export default Search;

