import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';

function Paginates() {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0)
  

  // const getData = async() => {
  //     const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
  //     const data = res.data;
  //               const slice = data.slice(offset, offset + perPage)
  //               const postData = slice.map(pd => <div key={pd.id}>
  //                   <p>{pd.title}</p>
  //                   <img src={pd.thumbnailUrl} alt=""/>
  //               </div>)
  //               setData(postData)
  //               setPageCount(Math.ceil(data.length / perPage))
  // }

  const getData = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b278160cf43c03c878828e19e9e271b0`)
    const data = await res.json();
    console.log(data.results);
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

  const slice = data.slice(offset, offset + perPage)

  return (
    <div className="container mt-4">
      {/* {data} */}

      {slice.map(pd => <div key={pd.id}>
        <p>{pd.original_title}</p>
        {/* <img src={pd.thumbnailUrl} alt="" /> */}
      </div>)
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
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default Paginates;
