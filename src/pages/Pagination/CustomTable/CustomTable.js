import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

function CustomTable(props) {

    const [result, setResult] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
   // const [filteredData, setFilteredData] = useState(result);
    //const [value, setValue] = useState(0);

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const res1 = await res.json()
        setResult(res1)
    }

    //For Pagination Functionality
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - result.length) : 0; // Avoid a layout jump when reaching the last page with empty rows.

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(10);
        setPage(0);
    };

    //For Search Functionality
    const requestSearch = (event) => {
        const searchWord = event.target.value;
        if (searchWord === "") {
            setResult(result);
        } else {
            const newFilter = result.filter((value) => {
                return (value.title.toLowerCase().includes(searchWord.toLowerCase())) || (value.body.toLowerCase().includes(searchWord.toLowerCase()));
            });
            setResult(newFilter);
        }
    };

    return (
        <div className="container mt-4">
            <h1>Custom Table</h1>
            <input type="text" class="form-control form-control" onChange={requestSearch}
                placeholder="Search ..." style={{ width: "30%", border: "2px solid darkorange" }} />

            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        (rowsPerPage > 0
                            ? setResult.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : setResult
                          ).map((item, i) => {
                            return <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>

                        })
                    }
                </tbody>
            </table>
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                //pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
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

export default CustomTable;