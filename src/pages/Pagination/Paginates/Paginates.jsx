import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';

function Paginates() {
  const [offset, setOffset] = useState(0);
  const [mydata, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0)
  const [search, setSearch] = useState('');
  const [filterdata, setFilterdata] = useState([]);
  const moviedata = mydata.slice(offset, offset + perPage)

  useEffect(() => {
    setFilterdata(
      moviedata.filter((e) => e.original_title.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, moviedata]);

  const getData = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b278160cf43c03c878828e19e9e271b0`)
    const data = await res.json();
    console.log("sss" + data.results);
    const finalData = data.results
    setData(finalData)
    setPageCount(Math.ceil(finalData.length / perPage))
  }
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)
  };

  useEffect(() => {
    getData()
  }, [offset])


  return (
    <div className="container mt-4">
      {/* {data} */}
      <input type="text" class="form-control form-control" onChange={(e) => {
        setSearch(e.target.value);
      }
      }
        placeholder="Search Movies..." style={{ width: "30%", border: "2px solid darkorange" }} />

      {filterdata.length > 0 ? filterdata.map(pd => <div key={pd.id}>
        <p>{pd.original_title}</p>
      </div>) : "Sorry , no movie found"
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

export default Paginates;
