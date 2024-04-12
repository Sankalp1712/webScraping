import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataDisplay() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://127.0.0.1:5000/fetch1')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <div className='p-3'>
            <h1 className="text-3xl font-bold mb-4">Authors</h1>
            <table className="table-auto w-full border-bottom border-gray-600 border-b-6 text-center">
                <thead style={{ backgroundColor: '#584343d8' }}>
                    <tr>
                        <th className="px-4 py-2">Author ID</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Affiliation</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Interests</th>
                        <th className="px-4 py-2">Department</th>
                        <th className="px-4 py-2">Cited By</th>
                        <th className="px-4 py-2">H Index</th>
                        <th className="px-4 py-2">i10 Index</th>
                        <th className="px-4 py-2">Last Searched</th>
                    </tr>
                </thead>
                <tbody style={{ backgroundColor: '#58434367' }} className="border-b-6 text-dark-400">
                    {data.map(item => (
                        <tr key={item.author_id} className="border-b-4 border-gray-200 border rounded">
                            <td className="px-4 py-2">{item.author_id}</td>
                            <td className="px-4 py-2">{item.name}</td>
                            <td className="px-4 py-2">{item.affiliation}</td>
                            <td className="px-4 py-2">{item.email}</td>
                            <td className="px-4 py-2">{item.interests}</td>
                            <td className="px-4 py-2">{item.department}</td>
                            <td className="px-4 py-2">{item.citedby}</td>
                            <td className="px-4 py-2">{item.h_index}</td>
                            <td className="px-4 py-2">{item.i10_index}</td>
                            <td className="px-4 py-2">{item.last_searched}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataDisplay;
