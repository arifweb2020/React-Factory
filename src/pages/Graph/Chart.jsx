import React, { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2'

function Chart(props) {
    const [chartData, setChartData] = useState({});
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
                    label: "Salary",
                    data: empSal,
                    backgroundColor: ["#3f51b5"],
                    borderColor: ["rgba(255, 99, 132, 1)"],
                    borderWidth: 1
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
                <h1>Employee Chart <button className="btn btn-sm btn-warning" onClick={() => props.history.goBack()}>Back</button></h1>
                <p>Enhance your skills in React and React Native !</p>
                <p>https://www.chartjs.org/docs/latest/</p>
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

export default Chart;