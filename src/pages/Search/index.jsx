import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';

function Search(props) {
    const [data, setData] = useState([])
    const [query, setQuery] = useState("")

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/albums")
            const res1 = await res.json()
            setData(res1)
        }
        if (query.length === 0 || query.length >2){
            getData()
        }
       
    }, [query])

    console.log(query)
    console.log(data.filter((val) => val.title.toLowerCase().includes("quidem")))

    const keys = ["title", "id", "userId"]

    // console.log(data[0]["title"])
    const search = (mydata) => {
        return mydata.filter((item) =>
            //item.title.toString().toLowerCase().includes(query) || item.id.toString().toLowerCase().includes(query) || item.userId.toString().toLowerCase().includes(query)
            keys.some((key) => item[key].toString().toLowerCase().includes(query))
        )
    }
    return (
        <div style={{ margin: "0 auto", maxWidth: "70%", marginTop: "30px" }}>
            <h1>Search</h1>
            <input type="text" placeholder='search...' onChange={(e) => setQuery(e.target.value)} />

            <Table list={search(data)} />
        </div>
    );
}

export default Search;