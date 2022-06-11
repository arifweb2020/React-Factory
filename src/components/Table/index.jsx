import React from 'react';

function Table({ list }) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>SNo</th>
                        <th>Title</th>
                        <th>userId</th>
                    </tr>

                </thead>
                <tbody>
                    {list.map((ele, i) => {
                        return <tr key={i}>
                            <td >{ele.id}</td>
                            <td >{ele.title}</td>
                            <td >{ele.userId}</td>
                        </tr>
                    })}

                </tbody>
            </table>


            <td>

            </td>
        </div>
    );
}

export default Table;