import React, { useState, useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from './CardSkeleton';

function MySkeleton(props) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            ApiData()
        }, 3000)

    }, [])

    const ApiData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const res1 = await res.json()
        console.log(res1)
        setData(res1)
        setLoading(false)
    }

    return (
        <div className="container">
            <SkeletonTheme highlightColor="#e8ffd1">
                <div className="row mt-5">
                    {
                        loading
                            ?
                            (
                                <>
                                    <CardSkeleton />
                                    <CardSkeleton />
                                    <CardSkeleton />
                                    <CardSkeleton />
                                    <CardSkeleton />
                                    <CardSkeleton />
                                </>
                            )
                            :
                            (
                                <>
                                    {
                                        data.map((item, i) => {
                                            return <div className="col-md-4 mb-4" key={i.id}>
                                                <div className="card">
                                                    <img className="card-img-top" src={"https://joeschmoe.io/api/v1/random" + item.name} alt="Card image" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">{item.name}</h4>
                                                        <p className="card-text">{item.email}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        })

                                    }
                                </>
                            )

                    }
                </div>
            </SkeletonTheme>
        </div>
    );
}

export default MySkeleton;