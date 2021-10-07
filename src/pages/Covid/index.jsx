import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2'

function Covid(props) {
    const [chartData, setChartData] = useState({});
    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {
        let state = [];
        let confirmed = [];
        const res1 = await fetch('https://data.covid19india.org/data.json')
        const res = await res1.json();
        console.log(res.statewise);
        for (const dataObj of res.statewise) {
            state.push(dataObj.state);
            confirmed.push(parseInt(dataObj.confirmed));
        }
        setChartData({
            labels: state,
            datasets: [
                {
                    label: "Total Cases",
                    data: confirmed,
                    backgroundColor: ["#3f51b5"],
                    borderColor: ["rgba(255, 99, 132, 1)"],
                    borderWidth: 1
                }
            ]
        });
        console.log(state, confirmed);
    }

    return (
        <>
            <div className="jumbotron text-center">
                <h1>State Wise Covid Result</h1>
                <p>Enhance your skills in React and React Native !</p>

            </div>
            <div className="container">
                <Bar
                    data={chartData}
                    options={{
                        responsive: true,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }}
                />
            </div>
        </>
    );
}

export default Covid;