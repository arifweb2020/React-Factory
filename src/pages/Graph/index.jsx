import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";


function Graph(props) {
    const [chartData, setChartData] = useState({});
    // const [empSal, setEmployeeSalary] = useState([]);
    // const [empAge, setEmployeeAge] = useState([]);

    const chart = async () => {
        let empSal = [];
        let empAge = [];

        const res1 = await fetch('http://dummy.restapiexample.com/api/v1/employees')
        const res = await res1.json();
        console.log(res);
        // setEmployeeSalary(res.data.employee_salary)
        // setEmployeeAge(res.data.employee_age)
        for (const dataObj of res.data) {
            empSal.push(parseInt(dataObj.employee_salary));
            empAge.push(parseInt(dataObj.employee_age));
        }
        setChartData({
            labels: empAge,
            datasets: [
                {
                    label: "Employee Salary",
                    data: empSal,
                    backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                    borderWidth: 4
                }
            ]
        });
        console.log(empSal, empAge);
    };

    useEffect(() => {
        chart();
    }, []);
    return (
        <>
            <div className="jumbotron text-center">
                <h1>Employee Graph <button className="btn btn-sm btn-warning" onClick={()=>props.history.push("/chart")}>Chart</button></h1>
                <p>Enhance your skills in React and React Native !</p>
            </div>
            <div className="container">
                <Line
                    data={chartData}
                    options={{
                        responsive: true,
                        title: { text: "Employee Salary", display: true },
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 10,
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ]
                        }
                    }}
                />
            </div>
        </>
    );
}

export default Graph;